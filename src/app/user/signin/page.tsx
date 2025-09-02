"use client";
import InputBox from "@/components/InputBox";
import LoaderSpin from "@/components/LoaderSpin";
import { LOGIN_USER, USER_REGISTER } from "@/graphql/queries/user.query";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slicers/currentUser";
import { useMutation } from "@apollo/client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { TiUser } from "react-icons/ti";
import { useRouter } from "next/navigation";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [registerUser] = useMutation(USER_REGISTER);
  const [loginUser] = useMutation(LOGIN_USER);
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  
  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
    
    if (error) setError("");
    if (successMessage) setSuccessMessage("");
  };

  const validateForm = () => {
    const errors = {
      username: "",
      email: "",
      password: "",
    };
    
    let isValid = true;
    
    if (!isLogin && !form.username.trim()) {
      errors.username = "Username is required";
      isValid = false;
    }
    
    if (!form.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }
    
    if (!form.password) {
      errors.password = "Password is required";
      isValid = false;
    } else if (form.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }
    
    setFormErrors(errors);
    return isValid;
  };

  const toggleFormMode = () => {
    setIsLogin(!isLogin);
    setError("");
    setSuccessMessage("");
    setFormErrors({ username: "", email: "", password: "" });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError("");
    
    try {
      if (isLogin) {
        const loginForm = {
          email: form.email,
          password: form.password,
        };

        const { data } = await loginUser({
          variables: { input: loginForm },
          fetchPolicy: "no-cache",
        });
        
        if (data?.loginUser?.user) {
          dispatch(setUser(data.loginUser.user));
          router.push("/");
        } else {
          setError("Login failed. Please check your credentials.");
        }
      } else {
        const { data } = await registerUser({ 
          variables: { input: form },
          fetchPolicy: "no-cache",
        });
        
        if (data?.registerUser) {
          setSuccessMessage("Registration successful! Please login.");
          setIsLogin(true);
          setForm({ username: "", email: "", password: "" });
        }
      }
    } catch (error: any) {
      console.error("Auth error:", error);
      setError(error.message || "An error occurred. Please try again.");
    } finally {
      console.log('login successfully')
    }
  };

  return (
    <div className="bg-yellow-100 min-h-dvh flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="flex flex-col items-center space-y-2">
            <div className={`bg-white rounded-full p-3 shadow-md ring-2 ${
              error ? "ring-red-300" : successMessage ? "ring-green-300" : "ring-gray-300"
            }`}>
              <TiUser className="size-10" />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>
            
            <p className="text-gray-500 text-sm text-center">
              {isLogin 
                ? "Please sign in to continue" 
                : "Create an account to get started"
              }
            </p>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md text-sm">
              {error}
            </div>
          )}
          
          {successMessage && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-sm">
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <InputBox
                firstIcon={MdOutlineAlternateEmail}
                onChange={handleOnChange}
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                placeholder="Email"
              />
            </div>
            <div>
              <InputBox
                firstIcon={TbPasswordFingerprint}
                secondIcon={PiEye}
                thirdIcon={PiEyeClosed}
                onChange={handleOnChange}
                label="Password"
                name="password"
                type="password"
                value={form.password}
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2 px-4 mt-6 rounded-md text-white font-medium ${
                loading ? "bg-primary-800/70 cursor-not-allowed" : "bg-primary-800 hover:bg-primary-800"
              } transition-colors duration-200 flex items-center justify-center`}
            >
              {loading ? (
                <LoaderSpin color="text-white" />
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Register"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
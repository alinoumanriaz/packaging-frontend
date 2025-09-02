"use client";
import InputBox from "@/components/InputBox";
import LoaderSpin from "@/components/LoaderSpin";
import { LOGIN_USER, USER_REGISTER } from "@/graphql/queries/user.query";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/slicers/currentUser";
import { useMutation } from "@apollo/client";
import React, { ChangeEvent, useState } from "react";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { TiUser } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { loginUser } from '../../../../../backend/src/controllers/user.controller';

const Page = () => {
  const [islogin, setIslogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [newError, setNewError] = useState("");
  const [registerUser] = useMutation(USER_REGISTER);
  const [loginUser] = useMutation(LOGIN_USER);
  const Router = useRouter();
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // const changeformhandler = () => {
  //   setIslogin(!islogin);
  // };

  const onsubmithandler = async () => {
    setLoading(true);
    try {
      if (islogin) {
        const loginForm = {
          email: form.email,
          password: form.password,
        };
        console.log("submit login form");
        console.log({ loginForm: loginForm });

        const { data } = await loginUser({
          variables: { input: loginForm },
          fetchPolicy: "no-cache", // Important for auth
        });
        console.log({cUSer:data})
        dispatch(setUser(data?.loginUser?.user));
      } else {
        console.log(form);
        const { data } = await registerUser({ variables: { input: form } });
        console.log("submit registior form");
        console.log(data);
      }
    } catch (error) {
      console.log({ res: error });
      setNewError(`Unauthorized user detected`);
      setLoading(false);

    } finally {
      console.log({ res: "login suces" });
      Router.push("/");
    }
  };
  return (
    <div className="bg-yellow-100 w-full h-dvh flex justify-center items-center">
      <div className="w-[400px] bg-white rounded-xl shadow-md">
        <div className="flex flex-col justify-center items-center space-y-4 p-10">
          <div className="flex flex-col justify-center items-center space-y-1">
            <div
              className={`bg-white ${
                newError === "" ? "ring-gray-300" : "ring-red-300 text-red-600"
              } ring-1 rounded-full p-2 shadow-md`}
            >
              <TiUser className="size-12" />
            </div>
            <div className="font-semibold text-xl">
              {newError === "" ? (
                <>Wellcome Back</>
              ) : (
                <div className="text-red-600 text-lg font-mono">{newError}</div>
              )}
            </div>
            <p className="text-gray-400 text-sm">
              Please enter your detail here
            </p>
            <div>
              {/* <button className="ring-1 ring-gray-500 rounded-2xl px-6 py-2">
                Login with Google
              </button> */}
            </div>
          </div>
          {!islogin && (
            <InputBox
              firstIcon={TiUser}
              onChange={handleOnChange}
              label="Username"
              name="username"
              type="text"
              value={form.username}
              placeholder="Username"
            />
          )}

          <InputBox
            firstIcon={MdOutlineAlternateEmail}
            onChange={handleOnChange}
            label="Email Address"
            name="email"
            type="email"
            value={form.email}
            placeholder="Email"
          />
          <InputBox
            onChange={handleOnChange}
            firstIcon={TbPasswordFingerprint}
            secondIcon={PiEye}
            thirdIcon={PiEyeClosed}
            label="Password"
            name="password"
            type="password"
            value={form.password}
            placeholder="Password"
          />

          <div className="w-full flex flex-col justify-center items-center">
            {/* {islogin && (
              <div className="w-full text-xs text-right text-green-700 ">
                <div>Forget Password?</div>
              </div>
            )} */}
            <button
              disabled={loading}
              onClick={onsubmithandler}
              type="submit"
              className={` ${
                loading ? "bg-primary-800/80" : "bg-primary-800"
              } flex justify-center items-center h-10 text-white w-full my-4 py-2 rounded-md`}
            >
              {loading ? (
                <>
                  <LoaderSpin color="text-white" />
                </>
              ) : (
                <>{islogin ? <>Sign In</> : <>Registor</>}</>
              )}
            </button>
            {/* {dbErrorMessage && (
              <div
                className={` ${
                  codestatus
                    ? "text-green-800 bg-green-100"
                    : "text-red-600 bg-red-200"
                }  text-center  w-[99%] text-xs rounded-md py-1`}
              >
                {dbErrorMessage}
              </div>
            )} */}
          </div>
          {/* <div className="flex justify-center items-center flex-col text-sm space-y-4 w-full">
            <div>
              {islogin ? (
                <>Don&#39;t have an account:</>
              ) : (
                <>Already have an account:</>
              )}
              <span
                onClick={changeformhandler}
                className="text-blue-600 text-sm cursor-pointer "
              >
                {" "}
                {islogin ? <>Sign Up</> : <>Sign In</>}
              </span>
            </div>
            <div className="bg-gray-400 w-full h-[1px] flex justify-center items-center relative">
              <span className="bg-white w-8 flex justify-center items-center absolute">
                OR
              </span>
            </div>
            <div className="w-full flex justify-between px-2 py-2 ">
              <button className="flex space-x-2 ring-1 ring-gray-300 bg-gray-200 w-full justify-center items-center py-2 shadow-md rounded-md">
                <Image
                  src={
                    "https://www.vectorlogo.zone/logos/facebook/facebook-official.svg"
                  }
                  alt="facebook"
                  width={18}
                  height={18}
                />
                <span>Facebook</span>
              </button>
            </div>
          </div> */}
          {/* {newError && <div className="text-red-600">{newError}</div>} */}
        </div>
      </div>
    </div>
  );
};

export default Page;

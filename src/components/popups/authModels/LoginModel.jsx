"use client"
import InputBox from '@/components/InputBox.jsx'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { TbPasswordFingerprint } from "react-icons/tb";
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TiUser } from "react-icons/ti";
import { signUp_zodSchema } from '@/zodSchema/signUp_zod';
import { signin_zodSchema } from '@/zodSchema/signin_zod';
import ForgetpassModel from './ForgetpassModel.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LoaderSpin from '@/components/LoaderSpin';
import VerifyModel from './VerifyModel.jsx';
import { api } from '@/helper/getData.js';
import GoogleLoginButton from '@/components/Social-auth/GoogleLoginButton.jsx';
import { useDispatch } from 'react-redux';
import { setUser } from '@/app/redux/slicer/currentUser.js';


const LoginModel = ({ onclose }) => {
    const backdrop = useRef()
    const boxlogin = useRef()
    const [actt, setActt] = useState(false);
    const [codestatus, setCodestatus] = useState(false);
    const [islogin, setIslogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [dbErrorMessage, setDbErrorMessage] = useState(null);
    const [forgetpass, setForgetpass] = useState(false);
    const [errorMessage, setErrorMessage] = useState(
        {
            username: "",
            email: "",
            password: "",
        }
    );
    const [openVerifyModel, setOpenVerifyModel] = useState(false);
    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
    );

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setFormData((prevForm) => ({ ...prevForm, [name]: value }))
        setErrorMessage((prevErrors) => ({ ...prevErrors, [name]: "" }))
        setDbErrorMessage("")
    }

    const onsubmithandler = async (e) => {
        e.preventDefault();
        if (islogin) {
            const parseData = signin_zodSchema.safeParse(formData)
            if (!parseData.success) {
                const newErrors = parseData.error.issues.reduce((acc, issue) => {
                    acc[issue.path[0]] = issue.message;
                    return acc;
                }, {});
                setErrorMessage(newErrors);
            } else {
                try {

                    setLoading(true)
                    const loginFormData = {
                        email: formData.email,
                        password: formData.password
                    }
                    const response = await api.post('/api/user/login', loginFormData, { withCredentials: true })
                    setDbErrorMessage(response.data.message)
                    setLoading(false)
                    if (response.status === 200) {
                        dispatch(setUser(response.data.cUser))
                        setCodestatus(true)
                        onCloseHandler();
                    } else if (response.status === 201) {
                        setOpenVerifyModel(true)
                    } else {
                        setCodestatus(false)
                    }
                } catch (error) {
                    setDbErrorMessage(error.response.data.message)
                    setLoading(false)
                    console.error("Error in login api:", error);
                }
            }
        } else {
            const parseData = signUp_zodSchema.safeParse(formData)
            if (!parseData.success) {
                console.log(parseData.error.issues);
                const newErrors = parseData.error.issues.reduce((acc, issue) => {
                    acc[issue.path[0]] = issue.message;
                    return acc;
                }, {});
                setErrorMessage(newErrors);
            } else {
                try {

                    setLoading(true)
                    console.log("user got registor form data")
                    const response = await api.post('/api/registor', formData)
                    console.log(response.status)
                    if (response.status === 202) {
                        setDbErrorMessage(response.data.message)
                    } else {
                        setOpenVerifyModel(true)
                    }
                    setLoading(false)
                } catch (error) {
                    console.error("Error in registor api:", error);
                }
            }

        }
    }

    const changeformhandler = () => {
        switch (islogin) {
            case true:
                setTimeout(() => {
                    setActt(!actt)
                }, 50);

                setIslogin(!islogin)
                setDbErrorMessage("")

                break;

            case false:

                setTimeout(() => {
                    setActt(!actt)
                }, 50);
                setTimeout(() => {
                    setIslogin(true)
                }, 550)
                setDbErrorMessage("")
                break;
        }
    }
    const forgetpasshandler = (e) => {
        e.preventDefault();
        setForgetpass(true)
    }

    useGSAP(() => {
        gsap.fromTo(boxlogin.current,
            { opacity: 0, scale: 0.7, ease: 'power1.inOut' },
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power1.inOut' }
        )
        gsap.fromTo(backdrop.current,
            { backgroundColor: 'rgba(0, 0, 0, 0)', ease: 'power1.inOut' },
            { backgroundColor: 'rgba(0, 0, 0, 0.8)', ease: 'power1.inOut' }
        )
    })

    const onCloseHandler = () => {
        gsap.fromTo(boxlogin.current,
            { opacity: 1, scale: 1, duration: 0.4, ease: 'power1.inOut' },
            { opacity: 0, scale: 0.7, ease: 'power1.inOut', onComplete: onclose },
        )
        gsap.fromTo(backdrop.current,
            { backgroundColor: 'rgba(0, 0, 0, 0.8)', ease: 'power1.inOut' },
            { backgroundColor: 'rgba(0, 0, 0, 0)', ease: 'power1.inOut' }
        )
    }


    return (
        <>
            <div ref={backdrop} className={`fixed z-50 will-change-transform inset-0 flex justify-center items-center h-screen`}>
                <div
                    ref={boxlogin}
                    onClick={(e) => e.stopPropagation()}
                    className={` absolute bg-white rounded-md w-80  md:w-96 space-y-4 p-4 will-change-transform text-sm md:text-base`}
                >
                    <div className='font-extrabold text-3xl backdrop-blur-md text-black/80 '>
                        MIRFAH
                    </div>
                    <div onClick={onCloseHandler} className=' absolute -top-10 right-0 md:-right-14 bg-white rounded-full p-1 '><RxCross2 className='size-6' /></div>
                    <form className='gap-y-4 transition-all duration-500 ease-in-out' >
                        {
                            !islogin && (
                                <div className={`${actt ? "mb-0 opacity-100" : "md:-mb-[88px] -mb-[76px] opacity-0 "} flex flex-col items-center justify-center transition-all -z-50 duration-500 ease-in-out `}>
                                    <InputBox
                                        firstIcon={TiUser}
                                        label={"Username"}
                                        placeholder={"Enter Your Username"}
                                        onChange={handleInputChange}
                                        name={"username"}
                                    />
                                    {errorMessage.username && <div className={` text-red-600 bg-red-200  text-center  w-[99%] text-xs rounded-md py-1`}>{errorMessage.username}</div>}
                                </div>

                            )
                        }

                        <div className='w-full flex flex-col justify-center items-center'>
                            <InputBox
                                firstIcon={MdOutlineAlternateEmail}
                                label={"Email"}
                                placeholder={"Enter Your Emaill"}
                                onChange={handleInputChange}
                                name={"email"}
                            />
                            {errorMessage.email && <div className='text-red-600 text-center bg-red-200 w-[99%] text-xs rounded-md py-1'>{errorMessage.email}</div>}
                        </div>

                        <div className='w-full flex flex-col justify-center items-center'>
                            <InputBox
                                label={"Password"}
                                firstIcon={TbPasswordFingerprint}
                                secondIcon={PiEyeClosed}
                                thirdIcon={PiEye}
                                placeholder={"Password"}
                                password={"password"}
                                onChange={handleInputChange}
                                name={"password"}
                            />
                            {errorMessage.password && <div className='text-red-600 text-center bg-red-200 w-[99%] text-xs rounded-md py-1'>{errorMessage.password}</div>}
                        </div>

                        {
                            !actt ?
                                <div className='flex justify-end h-4'>
                                    <div
                                        onClick={forgetpasshandler}
                                        className={` ${!actt ? "mb-0 opacity-100" : "-mb-12 opacity-0 "} text-xs text-green-800 cursor-pointer text-right pr-2 `}>
                                        Forget Password?
                                    </div>
                                    {
                                        forgetpass && <ForgetpassModel onclose={() => setForgetpass(false)} />
                                    }
                                </div>
                                :
                                <div className='flex justify-end h-4'>
                                </div>
                        }
                        <div className='w-full flex flex-col justify-center items-center'>
                            <button disabled={loading} onClick={onsubmithandler} type='submit' className={` ${loading ? "bg-black/80" : "bg-black active:scale-[0.96]"} flex justify-center items-center h-10 text-white w-full my-2 py-2 rounded-md`}>
                                {loading ?
                                    <>
                                        <LoaderSpin />
                                    </>
                                    :
                                    <>{islogin ? <>Sign In</> : <>Registor</>}</>}</button>
                            {dbErrorMessage && <div className={` ${codestatus ? "text-green-800 bg-green-100" : "text-red-600 bg-red-200"}  text-center  w-[99%] text-xs rounded-md py-1`}>{dbErrorMessage}</div>}
                        </div>

                    </form>
                    <div className='flex justify-center items-center flex-col space-y-4'>
                        <div>{islogin ? <>Dont have an account:</> : <>Already have an account:</>}
                            <span
                                onClick={changeformhandler}
                                className='text-blue-600 text-sm cursor-pointer ' > {islogin ? <>Sign Up</> : <>Sign In</>}</span>
                        </div>
                        <div className='bg-gray-400 w-full h-[1px] flex justify-center items-center relative'><span className='bg-white w-8 flex justify-center items-center absolute'>OR</span></div>
                        <div className='w-full flex justify-between px-2 py-2 '>
                            <GoogleLoginButton onclose={() => onCloseHandler()} />
                            {/* <button className='flex space-x-2 ring-1 ring-gray-300 bg-gray-200 w-[47%] justify-center items-center py-2 shadow-md rounded-md'>
                                <Image src={"https://www.vectorlogo.zone/logos/facebook/facebook-official.svg"} alt='facebook' width={18} height={18} /><span>Facebook</span>
                            </button> */}
                            {
                                openVerifyModel && (
                                    <VerifyModel email={formData.email} condition={"VERIFY"} />
                                )
                            }
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default LoginModel

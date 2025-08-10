"use client"

import InputBox from "@/components/InputBox";
import axios from "axios";
import React, { useRef, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import VerifyModel from "./VerifyModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoaderSpin from "@/components/LoaderSpin";
import { api } from "@/helper/getData";





const ForgetpassModel = ({ onclose }) => {
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [code, setCode] = useState();
    const [openVerifyModel, setOpenVerifyModel] = useState(false);
    const boxref = useRef()
    const backdropref = useRef()

    const onchangehandler = (e) => {
        setEmail(e.target.value)
        setError("")
    }

    const onsubmithandler = async (e) => {
        e.preventDefault()
        console.log(email)
        try {
            setLoading(true)
            const response = await api.post("/api/user/forgetpassword", { email: email })
            console.log(response)
            setLoading(false)
            if (response.status === 200) {
                setCode(true)
                setOpenVerifyModel(true)

            } else {

                setCode(false)
                setError(response.data.message)
            }
        } catch (error) {
            console.log("forget api not working")
        }

    }

    useGSAP(() => {
        gsap.from(boxref.current, {
            scale: 0.7, opacity: 0
        })
    })

    const onCloseHandle = () => {
        gsap.to(boxref.current, {
            scale: 0.7, opacity: 0, onComplete: onclose
        })
    }



    return (
        <div ref={backdropref} className="fixed inset-0 bg-black/60 backdrop-blur-sm rounded-e-md z-10 flex justify-center items-center">
            <div ref={boxref} className="bg-white flex flex-col justify-center items-center rounded-md w-96 space-y-4 p-4 relative ">
                <div onClick={onCloseHandle} className="absolute top-3 right-3  text-black "><RxCross2 className="size-5" /></div>
                <p className="font-bold text-lg" >Enter your email</p>
                <div className=" w-full">

                    <InputBox
                        firstIcon={MdAlternateEmail}
                        // label={"Email"}
                        placeholder={"Enter email"}
                        onChange={onchangehandler}
                        name={"email"}
                    />

                    {error && <div className={`${code ? "text-green-800 bg-green-100 rounded-md py-1 px-2" : ""} text-red-600 w-full bg-red-200 rounded-md py-1 text-center`}>{error}</div>}

                    <button disabled={loading} onClick={onsubmithandler} className={`w-full ${loading ? "bg-black/80" : "bg-black active:scale-[0.96]"} flex justify-center h-10 items-center py-2 text-white rounded-md`}>
                        {
                            loading ?
                                <LoaderSpin />
                                :
                                <>Forget Password</>
                        }
                    </button>
                    {
                        openVerifyModel &&
                        <VerifyModel email={email} condition={"FORGETPASSWORD"} />
                    }
                </div>
            </div >
        </div >
    );
};

export default ForgetpassModel;

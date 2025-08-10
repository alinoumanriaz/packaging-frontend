"use client"
import InputBox from "@/components/InputBox";
import React, { useState } from "react";
import { PiEyeClosed } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
import { TbPasswordFingerprint } from "react-icons/tb";
import { newpassword_zodSchema } from "@/zodSchema/newpassword_zod";
import LoaderSpin from "@/components/LoaderSpin";
import { api } from "@/helper/getData";

const NewpasswordModel = ({ email }) => {
    const [loading, setLoading] = useState(false);
    const [newpassword, setNewpassword] = useState();
    const [errorMessage, setErrorMessage] = useState(false);
    const [code, setCode] = useState();

    const handleInputChange = (e) => {
        setNewpassword(e.target.value)
        setErrorMessage("")
    }

    const onsubmithandler = async (e) => {
        e.preventDefault()
        console.log(newpassword)
        const parseData = newpassword_zodSchema.safeParse({ password: newpassword })
        console.log(parseData)
        if (!parseData.success) {
            console.log(parseData.error.issues[0].message);
            const newError = parseData.error.issues[0].message
            setErrorMessage(newError);
        } else {
            try {
                setLoading(true)
                const userData = {
                    email,
                    password: newpassword
                }
                const response = await api.post("/api/user/newpassword",  userData )
                // console.log(response)
                setLoading(false)
                if (response.status === 200) {
                    console.log(response.data.message)
                    setCode(true)
                    setErrorMessage(response.data.message)
                    window.location.reload()
                } else {

                    setCode(false)
                    setErrorMessage(response.data.message)
                }
            } catch (error) {
                console.log("forget api not working")
            }
        }

    }




    return (
        <div className="fixed inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm h-full flex justify-center items-center">
            <div className="bg-white flex flex-col justify-center items-center rounded-md w-96 space-y-4 p-4 relative ">
                <p className="font-bold text-lg" >Enter your new password</p>
                <div className="space-y-4 w-full">

                    <InputBox
                        firstIcon={TbPasswordFingerprint}
                        secondIcon={PiEyeClosed}
                        thirdIcon={PiEye}
                        placeholder={"Password"}
                        password={"password"}
                        onChange={handleInputChange}
                        name={"password"}
                    />

                    {errorMessage && <div className={`${code ? "text-green-800 bg-green-100" : "text-red-600 bg-red-200"} w-full rounded-md py-1 text-center`}>{errorMessage}</div>}

                    <button disabled={loading} onClick={onsubmithandler} className={`w-full ${loading?"bg-black/80":"bg-black active:scale-[0.96]"} flex justify-center items-center h-10 py-2 text-white rounded-md`}>
                        {
                            loading ?
                                <LoaderSpin />
                                :
                                <>Save new password</>
                        }
                    </button>
                </div>
            </div >
        </div >
    );
};

export default NewpasswordModel;

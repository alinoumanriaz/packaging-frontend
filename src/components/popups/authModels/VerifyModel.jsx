"use client"
import axios from 'axios';
import React, { useRef, useState } from 'react';
import NewpasswordModel from './NewpasswordModel';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LoaderSpin from '@/components/LoaderSpin';
import { api } from '@/helper/getData';




const VerifyModel = ({ email, condition }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [opennewpasswordmodel, setOpennewpasswordmodel] = useState(false);
  const [code, setCode] = useState(false);
  const boxref = useRef()
  const inputRefs = useRef([]);

  const handleInput = (e, index) => {
    setError("")
    const value = e.target.value;
    // Move to the next input if the current value is filled and there's another input available
    if (value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    setError("")
    if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text').slice(0, 6);
    const pasteArray = paste.split('');
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    });
    if (pasteArray.length === 6) {
      inputRefs.current[5].focus();
    }
  };

  const onsubmithandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    const otpArray = inputRefs.current.map(e => e.value)
    const otp = otpArray.join("");
    const verifyData = {
      condition,
      otp,
      email
    }
    switch (condition) {
      case "VERIFY":
        console.log("Verify user Model work")
        console.log(verifyData)
        try {
          const response = await api.post("/api/user/verify", verifyData)
          console.log(response)
          setLoading(false)
          if (response.status === 200) {
            setCode(true)
            setError("User verified successfully")
            window.location.reload()
          }
          else {
            setCode(false)
            setError("Invalid code")
          }
        } catch (error) {
          setError("Invalid Code")
          setLoading(false)
        }

        break;

      case "FORGETPASSWORD":
        console.log("forget pass model work")
        console.log(verifyData)
        try {
          const response = await api.post("/api/user/verifyemail", verifyData)
          console.log(response)
          setLoading(false)
          if (response.status === 200) {
            setCode(true)
            setError("User verified successfully")
            setOpennewpasswordmodel(true)
          }
          else {
            setCode(false)
            setError("Invalid code")
          }
        } catch (error) {
          setError("Invalid Code")
          setLoading(false)
        }

        break;
    }
  }

  useGSAP(() => {
    gsap.from(boxref.current, {
      scale: 0.7, opacity: 0
    })
  })

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center h-full items-center">
      <div
        onPaste={handlePaste}
        ref={boxref}
        className="bg-white flex flex-col justify-center items-center rounded-md w-96 p-4  relative"
      >
        <div>Email verify OTP</div>
        <p>Enter 6-digit code sent to your email</p>
        <div className="space-y-4" >
          <div className="flex shadow-inner gap-2">
            {Array(6)
              .fill(1)
              .map((_, index) => (
                <div key={index}>
                  <input
                    type="text"
                    maxLength="1"
                    required
                    className="w-11 text-xl h-10 rounded-md ring-1 text-center outline-none focus:ring-2"
                    ref={(e) => (inputRefs.current[index] = e)}
                    onInput={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    pattern="[0-9]*" // Accept only numeric characters
                  />
                </div>
              ))}
          </div>
          {error && <div className={`${code ? "text-green-800 bg-green-100 rounded-md py-1 px-2" : "text-red-600 bg-red-100"} py-1 rounded-md text-center`}>{error}</div>}
          <button disabled={loading} onClick={onsubmithandler} className={` ${loading ? "bg-black/80" : "bg-black active:scale-[0.96]"} h-10 w-full flex justify-center items-center py-2  text-white rounded-md`}>
            {
              loading ?
                <LoaderSpin />
                :
                <>Verify email</>
            }
          </button>
          
        </div>
        {
        condition === "FORGETPASSWORD" && opennewpasswordmodel && (
          <NewpasswordModel onclose={() => setOpennewpasswordmodel(false)} email={email} />
        )
      }
      </div>
      
    </div>
  );
};

export default VerifyModel;

"use client"
import React, { useState, ChangeEvent } from 'react'
import { IconType } from 'react-icons';

interface InputBoxProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    name: string;
    type: string;
    placeholder: string;
    label?: string;
    firstIcon?: IconType;
    secondIcon?: IconType;
    thirdIcon?: IconType;
    password?: boolean;
    value?: any;
}

const InputBox: React.FC<InputBoxProps> = ({ onChange, name, placeholder, label, firstIcon: FirstIcon, secondIcon: SecondIcon, thirdIcon: ThirdIcon, type, value }) => {
    const [currentIcon, setCurrentIcon] = useState(true);
    const [showpassword, setShowpassword] = useState(true);

    const iconhandler = () => {
        setCurrentIcon(!currentIcon)
        setShowpassword(!showpassword)
    }

    return (
        <>
            <div className='md:space-y-2 my-2 space-y-1 md:text-sm text-sm px-1 w-full'>
                <label htmlFor="" >{label && label}</label>
                <div className='relative flex items-center pt-1'>
                    {FirstIcon && <FirstIcon className='ml-2 absolute md:size-5 size-4 ' />}
                    <input
                        onChange={onChange}
                        value={value}
                        name={name}
                        type={SecondIcon ? !showpassword ? "text" : "password" : type}
                        className={` ${FirstIcon ? "pl-9 " : "pl-3"} ${SecondIcon ? "pr-9" : "pr-3"} focus:ring-2 cursor-pointer focus:ring-blue-400 w-full ring-1 ring-gray-300 rounded-md outline-none py-1.5 px-2`}
                        placeholder={placeholder} />
                    {SecondIcon && (
                        <div onClick={iconhandler} className='ml-2 absolute right-2 text-black cursor-pointer'>
                            {currentIcon ? (
                                ThirdIcon ? <ThirdIcon className='size-5' /> : null
                            ) : (
                                <SecondIcon className='size-5' />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default InputBox

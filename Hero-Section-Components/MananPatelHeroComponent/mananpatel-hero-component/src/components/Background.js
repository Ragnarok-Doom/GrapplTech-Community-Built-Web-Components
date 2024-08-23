import React, { useEffect, useState } from 'react'
import blackPanther from '../assets/panther.png'
import { FaArrowLeft, FaArrowRight,  FaPlay, FaStar } from "react-icons/fa";
import {  IoMdMoon } from "react-icons/io";
import {  LuMenu, LuSun } from "react-icons/lu";
import bkg1 from '../assets/pantherback.jpg'
import chr1 from '../assets/panther1.png'
import chr2 from '../assets/panther2.png'
import chr3 from '../assets/panther3.png'
import chr4 from '../assets/panther4.png'
import chr5 from '../assets/panther5.png'


function Background() {

    const [step, setStep] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [characterChange, setCharacterChange] = useState(false)

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

  return (
    <div className=' w-[100vw] h-[100vh] bg-slate-50 dark:bg-gray-900 dark:text-white overflow-hidden relative'>
        {/* FOREGROUND */}
        <div className='foreground absolute w-full h-full flex justify-center items-center overflow-hidden'>
            <h1 className=' font-black text-8xl md:text-[220px] opacity-[.1]'>BLACK PANTHER</h1>
        </div>
        {/* HEADER */}
        <div className=' w-full flex justify-between items-center p-5 relative z-[1]'>
            {/* NAME */}
            <div className=' absolute w-full h-full flex justify-center items-center z-[-1]'>
                <h1 className='name '>BLACK PANTHER</h1>
            </div>
            <div>
                <h1 className=' uppercase font-black font-sans text-5xl'>logo</h1>
            </div>
            <div className=' block md:hidden'>
                <div className=' flex gap-3 items-center'>
                <h2 className=' bg-slate-200 p-3 rounded-full cursor-pointer dark:text-black' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? <LuSun /> : <IoMdMoon />}</h2>
                <LuMenu className=' cursor-pointer text-[20px]' />
                </div>
            </div>
            <div className=' hidden md:block'>
                <nav className=' flex gap-10 items-center'>
                    <h2>Home</h2>
                    <h2>About</h2>
                    <h2>Service</h2>
                    <h2>Contact</h2>
                    <h2 className=' bg-slate-200 p-3 rounded-full cursor-pointer dark:text-black' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? <LuSun /> : <IoMdMoon />}</h2>
                </nav>
            </div>
        </div>
        { step == true &&
        <>
        {/* MAIN IMAGE */}
        <div className=' absolute w-full h-[90vh]'>
            <div className=' text-center'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing</h1>
                <span className=' border border-black py-2 px-3 top-5 relative dark:border-white cursor-pointer'>Learn More</span>
            </div>
            <img src={blackPanther} className=' w-[800px] bottom-0 absolute left-[50%] -translate-x-[50%]' />
        </div>
        </>
        }
        { step == false && 
        <>
            <div className='character w-full h-[90vh] absolute'>
                {/* 1ST */}
                <img src={chr1} className=' h-[450px] md:h-[650px] bottom-20 absolute left-[32%] -translate-x-[50%] z-30' />
                {/* 2ND */}
                <img src={chr2} className=' h-[470px] md:h-[670px] bottom-10 absolute left-[40%] -translate-x-[50%] z-40' />
                {/* CENTER */}
                <img src={chr4} className=' h-[500px] md:h-[700px] bottom-0 absolute left-[50%] -translate-x-[50%] z-50' />
                {/* 4TH */}
                <img src={chr3} className=' h-[470px] md:h-[670px] bottom-10 absolute left-[60%] -translate-x-[50%] z-40' />
                {/* 5TH */}
                <img src={chr5} className=' h-[450px] md:h-[650px] bottom-20 absolute left-[70%] -translate-x-[50%] z-30' />
            </div>
        </> }
        <div className=' w-full h-full flex'>
            <div className={` w-full md:w-[50%] ${step == false && 'hidden sm:block'} relative md:left-12 left-1/2 -translate-x-1/2 md:-translate-x-0 top-[10%] md:top-[15%]`}>
                <div className=' w-[300px] rounded-xl p-5 backdrop-blur-sm flex flex-col gap-5 shadow-md'>
                    <h1 className=' uppercase font-black text-gray-700 dark:text-white font-mono flex gap-3 items-center'><FaStar />Black Panther</h1>
                    <p className=' text-sm text-gray-500 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate.</p>
                    <span className=' py-2 px-6 border-black border cursor-pointer w-max bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>Learn More</span>
                </div>
            </div>
            <div className=' w-[50%] relative flex justify-end'>
                <div className={` ${characterChange ? 'right-[-55%]' : 'right-[50%] md:right-0'} w-[500px] h-fit backdrop-blur-sm relative top-[45%] overflow-hidden z-[1000]`}>
                    <div className='slider back flex gap-5 p-5 overflow-x-scroll relative'>
                        <div className='flex justify-center bg-black dark:bg-white dark:text-black text-white px-3 items-center cursor-pointer' onClick={() => setCharacterChange(!characterChange)}>{characterChange ? <FaArrowLeft /> : <FaArrowRight />}</div>
                        <img src={bkg1} />
                        <img src={bkg1} />
                        <img src={bkg1} />
                        <img src={bkg1} />
                    </div>
                </div>
            </div>
        </div>
        <div className=' absolute bottom-0 left-0 flex  w-full gap-5 p-2 items-center'>
            <span className=' font-mono backdrop-blur-md cursor-pointer border bg-black text-white border-black px-6 py-3 flex justify-center items-center gap-3 dark:bg-white dark:text-black' onClick={() => setStep(!step)}><FaPlay /> { step == true ? 'AVATAR' : 'BACK'}</span>
            <div className=' flex gap-3'>
                <span className=' text-3xl border rounded-full w-[80px] h-[80px] flex justify-center items-center hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black border-black cursor-pointer backdrop-blur-sm'>&larr;</span>
                <span className=' text-3xl border rounded-full w-[80px] h-[80px] flex justify-center items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white border-black cursor-pointer backdrop-blur-sm'>&rarr;</span>
            </div>
        </div>
    </div>
  )
}

export default Background

import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight,  FaPlay, FaStar } from "react-icons/fa";
import {  IoMdMoon } from "react-icons/io";
import {  LuMenu, LuSun } from "react-icons/lu";

import blackPanther from '../assets/panther.png'
import ironman from '../assets/ironman.png'
import moonknight from '../assets/moonknight.png'
import spider from '../assets/spider.png'

import bkg1 from '../assets/pantherback.jpg'
import bkg2 from '../assets/ironmanBack.jpg'
import bkg3 from '../assets/spiderBack.jpg'
import bkg4 from '../assets/moonknightBack.jpg'

import chr1 from '../assets/panther1.png'
import chr2 from '../assets/panther2.png'
import chr3 from '../assets/panther3.png'
import chr4 from '../assets/panther4.png'
import chr5 from '../assets/panther5.png'

import irn1 from '../assets/ironman1.png'
import irn2 from '../assets/ironman2.png'
import irn3 from '../assets/ironman3.png'
import irn4 from '../assets/ironman4.png'
import irn5 from '../assets/ironman5.png'

import spd1 from '../assets/spider1.png'
import spd2 from '../assets/spider2.png'
import spd3 from '../assets/spider3.png'
import spd4 from '../assets/spider4.png'
import spd5 from '../assets/spider5.png'

import mnk1 from '../assets/moonknight1.png'
import mnk2 from '../assets/moonknight2.png'
import mnk3 from '../assets/moonknight3.png'
import mnk4 from '../assets/moonknight4.png'
import mnk5 from '../assets/moonknight5.png'
import { MdDashboard } from 'react-icons/md';


function Background() {

    const [step, setStep] = useState(true)
    const [darkMode, setDarkMode] = useState(false)
    const [characterChange, setCharacterChange] = useState(false)
    const characters = [
        {
            id: 1,
            mainImg: blackPanther,
            name: 'BLACK PANTHER',
            headline: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate.',
            img1: chr1,
            img2: chr2,
            img3: chr4,
            img4: chr3,
            img5: chr5,
        },
        {
            id: 2,
            mainImg: ironman,
            name: 'IRONMAN',
            headline: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate.',
            img1: irn1,
            img2: irn3,
            img3: irn2,
            img4: irn4,
            img5: irn5,
        },
        {
            id: 3,
            mainImg: spider,
            name: 'SPIDERMAN',
            headline: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate.',
            img1: spd2,
            img2: spd3,
            img3: spd1,
            img4: spd4,
            img5: spd5,
        },
        {
            id: 4,
            mainImg: moonknight,
            name: 'MOONKNIGHT',
            headline: 'Lorem ipsum dolor sit amet consectetur adipisicing',
            details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio consequatur nulla temporibus odit, numquam atque fugiat voluptatibus quae, maxime id qui tempore fuga vel pariatur. Non voluptas vitae iusto voluptate.',
            img1: mnk2,
            img2: mnk4,
            img3: mnk5,
            img4: mnk1,
            img5: mnk3,
        },
    ]
    const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
    const [mobSlider, setMobSlider] = useState(false);
    const [charForward, setCharForward] = useState()

    useEffect(() => {
        if (darkMode) {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    const [count, setCount] = useState(1)

    const handleForward = () => {
        if (count < 4) {
            setCount(prev => prev + 1)
            setSelectedCharacter(characters[count])
        } else if (count === 4) {
            setCount(1)
            setSelectedCharacter(characters[0])
        }
    };

    const handleBackward = () => {
        if (count > 1) {
            setCount(prev => prev - 1)
            setSelectedCharacter(characters[count - 2])
        } else if (count === 1) {
            setCount(4)
            setSelectedCharacter(characters[3])
        }
    }

  return (
    <div className='w-[100vw] h-[100vh] bg-slate-50 dark:bg-gray-900 dark:text-white overflow-hidden relative'>
        {/* FOREGROUND */}
        <div className='foreground absolute w-full h-full flex justify-center items-center overflow-hidden'>
            <h1 className=' font-black text-8xl md:text-[220px] opacity-[.1]'>{selectedCharacter.name}</h1>
        </div>
        {/* HEADER */}
        <div className=' w-full flex justify-between items-center p-5 relative z-[100]'>
            {/* NAME */}
            <div className=' absolute w-full h-full flex justify-center items-center z-[-1]'>
                <h1 className='name '>{selectedCharacter.name}</h1>
            </div>
            <div className=' flex items-center gap-5'>
                <h1 className=' uppercase font-black font-sans text-xl sm:text-5xl'>logo</h1>
                <MdDashboard className=' cursor-pointer text-[20px] md:hidden' onClick={() => setMobSlider(!mobSlider)} />
            </div>
            <div className=' block md:hidden'>
                <div className=' flex gap-3 items-center'>
                <h2 className=' p-3 rounded-full cursor-pointer dark:text-white' onClick={() => setDarkMode(!darkMode)}>{ darkMode ? <LuSun /> : <IoMdMoon />}</h2>
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
        {/* MOBILE VIEW SLIDERS */}
        { mobSlider == true &&
        <>
        <div className='absolute w-full p-5 backdrop-blur-sm z-[999]'>
            <div className='flex mx-auto w-[90%] sm:w-[80%] justify-between gap-4 sm:gap-8 flex-wrap'>
                <img src={bkg1} className='w-[45%] sm:w-[200px] h-auto cursor-pointer' onClick={() => setSelectedCharacter(characters[0])} /> 
                <img src={bkg2} className='w-[45%] sm:w-[200px] h-auto cursor-pointer' onClick={() => setSelectedCharacter(characters[1])} />
                <img src={bkg3} className='w-[45%] sm:w-[200px] h-auto cursor-pointer' onClick={() => setSelectedCharacter(characters[2])} />
                <img src={bkg4} className='w-[45%] sm:w-[200px] h-auto cursor-pointer' onClick={() => setSelectedCharacter(characters[3])} />
            </div>
        </div>
        </>
         }

        { step == true &&
        <>
        {/* MAIN IMAGE */}
        <div className=' absolute w-full h-[90vh]'>
            <div className=' text-center'>
                <h1>{selectedCharacter.headline}</h1>
                <span className=' border border-black py-2 px-3 top-5 relative dark:border-white cursor-pointer'>Learn More</span>
            </div>
            <img src={selectedCharacter.mainImg} className=' md:h-[79vh] bottom-0 absolute left-[50%] -translate-x-[50%]' />
        </div>
        </>
        }
        { step == false && 
        <>
            <div className='character w-full h-[90vh] absolute'>
                {/* 1ST */}
                <img src={selectedCharacter.img1} className={` h-[60vh] md:h-[80vh] bottom-[170px] md:bottom-20 absolute ${selectedCharacter.id == 4 ? ' left-[10%] md:left-[25%]' : ' left-[15%] md:left-[32%]'} -translate-x-[50%] z-30`} />
                {/* 2ND */}
                <img src={selectedCharacter.img2} className={` h-[65vh] md:h-[83vh] bottom-[120px] md:bottom-10 absolute ${selectedCharacter.id == 4 ? ' left-[25%] md:left-[35%]' : ' left-[30%] md:left-[40%]'} -translate-x-[50%] z-40`} />
                {/* CENTER */}
                <img src={selectedCharacter.img3} className={`h-[70vh] ${selectedCharacter.id == 3 ? ' h-[700px] md:h-[100vh]' : 'md:h-[85vh]'} bottom-[80px] md:bottom-0 absolute left-[50%] -translate-x-[50%] z-50`} />
                {/* 4TH */}
                <img src={selectedCharacter.img4} className={` h-[65vh] md:h-[83vh] bottom-[120px] md:bottom-10 absolute left-[70%] md:left-[60%] -translate-x-[50%] z-40`} />
                {/* 5TH */}
                <img src={selectedCharacter.img5} className={` h-[60vh] md:h-[80vh] bottom-[170px] md:bottom-20 absolute ${selectedCharacter.id == 4 ? ' left-[90%] md:left-[73%]' : ' left-[85%] md:left-[70%]'} -translate-x-[50%] z-30`} />
            </div>
        </> }
        <div className=' w-full h-full flex'>
            <div className={` w-full md:w-[50%] ${step == false && 'hidden sm:block'} relative md:left-12 left-1/2 -translate-x-1/2 md:-translate-x-0 top-[10%] md:top-[15%]`}>
                <div className=' w-[90vw] md:w-[300px] rounded-xl p-5 backdrop-blur-sm flex flex-col gap-5 shadow-md'>
                    <h1 className=' uppercase font-black text-gray-700 dark:text-white font-mono flex gap-3 items-center'><FaStar />{selectedCharacter.name}</h1>
                    <p className=' text-sm text-gray-500 dark:text-white'>{selectedCharacter.details}</p>
                    <span className=' py-2 px-6 border-black border cursor-pointer w-max bg-black text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white'>Learn More</span>
                </div>
            </div>
            <div className=' w-[50%] relative flex justify-end'>
                <div className={` ${characterChange ? 'right-[-55%]' : 'right-[50%] md:right-0'} w-[500px] h-fit backdrop-blur-sm relative top-[45%] overflow-hidden z-[1000]`}>
                    <div className='slider back md:flex gap-5 p-5 overflow-x-scroll relative hidden'>
                        <div className='flex justify-center bg-black dark:bg-white dark:text-black text-white px-3 items-center cursor-pointer' onClick={() => setCharacterChange(!characterChange)}>{characterChange ? <FaArrowLeft /> : <FaArrowRight />}</div>
                        <img src={bkg1} onClick={() => setSelectedCharacter(characters[0])} />
                        <img src={bkg2} onClick={() => setSelectedCharacter(characters[1])} />
                        <img src={bkg3} onClick={() => setSelectedCharacter(characters[2])} />
                        <img src={bkg4} onClick={() => setSelectedCharacter(characters[3])} />
                    </div>
                </div>
            </div>
        </div>
        <div className=' absolute bottom-0 left-0 flex justify-between md:justify-normal  w-full gap-5 p-2 items-center'>
            <span className=' font-mono backdrop-blur-md cursor-pointer border bg-black text-white border-black px-6 py-3 flex justify-center items-center gap-3 dark:bg-white dark:text-black' onClick={() => setStep(!step)}><FaPlay /> { step == true ? 'AVATAR' : 'BACK'}</span>
            <div className=' flex gap-3'>
                <span className=' text-3xl border rounded-full w-[80px] h-[80px] flex justify-center items-center hover:bg-black hover:text-white dark:border-white dark:hover:bg-white dark:hover:text-black border-black cursor-pointer backdrop-blur-sm' onClick={handleBackward}>&larr;</span>
                <span className=' text-3xl border rounded-full w-[80px] h-[80px] flex justify-center items-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white border-black cursor-pointer backdrop-blur-sm' onClick={handleForward}>&rarr;</span>
            </div>
        </div>
    </div>
  )
}

export default Background

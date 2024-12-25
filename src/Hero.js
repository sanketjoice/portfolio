import React from "react";
import heroImg from "./assets/wewewewewe.png";
import lightTheme from "./assets/icons8-light-mode-50.png";
import linkedin from "./assets/linkedin-light.svg";
import github from "./assets/github-light.svg";
import instagram from "./assets/icons8-instagram-30.png";
import darkTheme from "./assets/moon.svg";
import linkDark from "./assets/linkedin-dark.svg";
import darkgit from "./assets/github-dark.svg";
import darkInsta from "./assets/download.png";
import { useTheme } from "./Themecontext";


export default function Hero(){
    const {darkMode, toggleDarkMode} = useTheme();

    return(  
        <section className={`pt-6 md:flex ${darkMode ? 'bg-[#222] text-white' : 'bg-white'} min-w-max min-h-lvh md:items-center justify-center lg:gap-44 md:gap-20`}>
          <div className="md:order-2 ">
            <div className="flex justify-center items-center">
            <div className="inline-block relative"> 
                <img src={darkMode ? darkTheme : lightTheme} className=" pl-1  hover:cursor-pointer w-10 absolute  right-0" onClick={toggleDarkMode} />
                <img src={heroImg} className=" pt-5  w-[200px] md:w-[350px] lg:w-[400px] mb-5 ml-5 rounded-full"/>
            </div></div></div>
            <div className="ml-3">
            <h1 className=" font-rubik text-center text-4xl md:font-[40px] lg:text-5xl dark:text-white mt-4">SANKET</h1>
            <h1 className=" font-rubik text-center text-4xl md:font-[40px] lg:text-5xl dark:text-white">JOICE</h1>
            <h2 className=" text-center my-5 font-roboto text-[20px] md:text-[24px] font-bold lg:text-3sxl dark:text-white">FRONTEND DEVELOPER</h2>
            <div className="flex align-middle justify-center">
            <a href="https://linkedin.com/in/sanketjoice">
                <img src={darkMode ? linkDark : linkedin} className=" w-8 mr-5" />
            </a>
            <a href="https://github.com/sanketjoice">
                <img src={darkMode ? darkgit : github } className=" mr-5 w-8" />
            </a>
            <a href="https://www.instagram.com/sanket_joice">
                <img src={darkMode ? darkInsta : instagram} className=" w-8" />
            </a>
            </div>
            <p className={`font-roboto text-[15px] md:text-[20px] w-72 m-auto text-center my-5 lg:text-xl ${darkMode ? 'text-white' : 'text-gray-500'}`}>With a passion for developing modern React web apps for commercial businesses.</p>
            <div className="flex justify-center items-center ">
            <a href="https://drive.google.com/file/d/1YvK1Vq7C__vLkRkaCuhGrwZ_zr8tIFnC/view?usp=drive_link">
             <button className={` rounded-[20px] md:w-[119px] w-[126px] h-[50px] text-[20px] font-semibold ${darkMode ? 'bg-white text-black': 'bg-[#0987f2] text-white'}`}>Resume</button>
            </a>
            </div>
           
          </div>
        </section>
    );
};

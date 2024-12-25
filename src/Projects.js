import React from "react";
import estateLogo from "./assets/logo.jpg";
import reactData from "./assets/logoloo.jpg";
import typingTest from "./assets/logologo.jpg"
import bookMS from "./assets/bmslogo.jpg";
import { useTheme } from "./Themecontext";

export default function Projects(){
  
  const {darkMode, toggleDarkMode} = useTheme();

    return(
            <div className={`${darkMode ? 'bg-[#222]' : 'bg-white'}  min-h-lvh pt-52 pb-52 min-w-max`}>
            <h1 className={`font-rubik text-center text-[32px]  md:text-[40px] lg:text-5xl ${darkMode ? 'text-white' : 'text-black'}   uppercase `}>projects</h1>
            <div>
                <div className="md:flex items-center justify-center mt-6 lg:mt-20 gap-8  ">
                    <a href="https://sanketjoice.github.io/estate-react" className="transition-transform duration-200 ease-in-out hover:scale-105">
                    <div className="flex flex-col items-center ">
                        <img src={estateLogo} className="w-[250px] rounded-3xl" />
                        <h3 className={`dark:text-white font-roboto font-semibold text-[20px] lg:text-[24px] ${darkMode ? 'text-white' : 'text-black'} mt-1`}>HomeLand</h3>
                        <h2 className={`dark:text-white text-[16px] font-roboto lg:text-[20px] ${darkMode ? 'text-white' : 'text-black'}`}>Real Estate App</h2>
                    </div>
                    </a>
                    <a href="https://sanketjoice.github.io/data-react" className="transition-transform duration-200 ease-in-out hover:scale-105">
                    <div className="flex flex-col items-center mt-8 md:mt-0">
                        <img src={reactData} className="w-[250px] rounded-3xl" />
                        <h3 className={`${darkMode ? 'text-white' : 'text-black'}  font-roboto font-semibold text-[20px] mt-1 lg:text-[24px]`}>React Data</h3>
                        <h2 className={`${darkMode ? 'text-white' : 'text-black'} text-[16px] font-roboto lg:text-[20px]`}>Data Analytics</h2>
                    </div>
                    </a>
                    <a href="https://sanketjoice.github.io/typingtest-react" className="transition-transform duration-200 ease-in-out hover:scale-105">
                    <div className="flex flex-col items-center mt-8 md:mt-0">
                        <img src={typingTest} className="w-[250px] rounded-3xl" />
                        <h3 className={`${darkMode ? 'text-white' : 'text-black'}  font-roboto font-semibold text-[20px] mt-1 lg:text-[24px]`}>Typerr</h3>
                        <h2 className={`${darkMode ? 'text-white' : 'text-black'} text-[16px] font-roboto lg:text-[20px]`}>Typing Test App</h2>
                    </div>
                    </a>
                    <a href="https://sanketjoice.github.io/bookms-react/" className="transition-transform duration-200 ease-in-out hover:scale-105">
                    <div className="flex flex-col items-center mt-8 md:mt-0">
                        <img src={bookMS} className="w-[250px] rounded-3xl" />
                        <h3 className={`${darkMode ? 'text-white' : 'text-black'}  font-roboto font-semibold text-[20px]  lg:text-[24px]  mt-1`}>BookMS</h3>
                        <h2 className={`${darkMode ? 'text-white' : 'text-black'} text-[16px] lg:text-[20px] font-roboto`}>BookMyShow Clone</h2>
                    </div>
                    </a>
                </div>
            </div>
            </div>
    )
}
import React from "react";
import lightTick from "./assets/checkmark-dark.svg";
import SkillList from "./SkillList";
import { useTheme } from "./Themecontext";
import darkTick from "./assets/checkmark-light.svg";

export default function Skills(){
  const {darkMode, toggleDarkMode} = useTheme();
    return(
        <div className={`flex flex-col text-center min-w-full  pb-40 ${darkMode ? 'bg-[#222] text-white' : 'bg-white text-gray-500'} `}>
          <h1 className={`font-rubik text-center text-[32px] ${darkMode ? 'text-white' : 'text-black'}  md:text-[40px] lg:text-5xl  uppercase mb-8 md:mb-14 lg:mb-20`}>skills</h1>
          <div className="flex justify-evenly flex-wrap gap-[40px] max-w-[26ch] md:max-w-max self-center ">
          <SkillList src={darkMode ? lightTick : darkTick} skill="HTML" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="CSS" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="JavaScript" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="React" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="TailwindCSS" />
          </div>
          <hr className={`w-[100px] h-[1px] border-none ${darkMode ? 'bg-white' : 'bg-black'} m-[30px] self-center md:w-[300px]`} />
          <div className="flex justify-evenly flex-wrap gap-[40px] max-w-[26ch] self-center md:max-w-max">
          <SkillList src={darkMode ? lightTick : darkTick} skill="SASS/SCSS" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="Material UI" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="PHP" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="Python" />
          </div>
          <hr className={`w-[100px] h-[1px] border-none ${darkMode ? 'bg-white' : 'bg-black'} m-[30px] self-center md:w-[300px]`} />
          <div className="flex justify-evenly flex-wrap gap-[40px] max-w-[26ch] self-center md:max-w-max">
          <SkillList src={darkMode ? lightTick : darkTick} skill="Git" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="Github" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="NPM" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="figma" />
          <SkillList src={darkMode ? lightTick : darkTick} skill="VS Code" />
          </div>
        </div>  
        
    )
}
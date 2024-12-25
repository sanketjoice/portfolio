import { useTheme } from "./Themecontext";

export default function Footer(){
    const {darkMode, toggleDarkMode} = useTheme();
    return(
        <div className={`p-44 text-center  pb-10 ${darkMode ? 'bg-[#222]' : 'bg-white'}`}>
                  <p className={`text-[16px] ${darkMode ? 'text-gray-300 ': 'text-gray-500'} font-roboto`}>© 2024 Sanket Joice.</p>
                  <p className={`text-[16px] ${darkMode ? 'text-gray-300' : 'text-gray-500'} font-roboto`}>All rights reserved.</p>
        </div>
    )
}
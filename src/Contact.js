import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTheme } from './Themecontext';

export default function Contact(){  
  const {darkMode, toggleDarkMode} = useTheme();
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_e15dt7g', 'template_h6ryr5f', form.current, {
        publicKey: 'DdNJg2eWG2W3aAT_N',
      })
      .then(
        alert("Message Sent!")
      );
  };
  return (
    <div className={`flex justify-center items-center min-h-screen min-w-full ${darkMode ? 'bg-[#222]' : 'bg-white'}`}>
      <form className={`flex flex-col items-center ${darkMode ? 'bg-[#222]' : 'bg-white'} p-6 self-center`}
      ref={form} onSubmit={sendEmail}>
      <h1 className={`font-rubik text-center text-[32px] md:mb-24  md:text-[40px] lg:text-5xl ${darkMode ? 'text-white' : 'text-black'} dark: uppercase mb-8 `}>Contact</h1>
        <div className="mb-8">
          <label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2">
          
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={`w-[250px] px-4 py-2 text-sm md:text-xl border border-gray-500 rounded-[20px] md:w-[600px] lg:w-[800px] focus:outline-none focus:ring-2  h-[50px] placeholder:text-xl  ${darkMode ? 'bg-[#222] placeholder:text-white focus:ring-white' : 'bg-white placeholder:text-gray-500 focus:ring-gray-600'}`}
            placeholder="Name"
            required
          />
        </div>
        <div className="mb-8">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2">
            
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`w-[250px] text-xl h-[50px] px-4 py-2 border border-gray-500 rounded-[20px] md:w-[600px]  lg:w-[800px] focus:outline-none focus:ring-2  placeholder:text-xl  mb-0 ${darkMode ? 'bg-[#222] placeholder:text-white focus:ring-white' : 'bg-white placeholder:text-gray-500 focus:ring-gray-600'}`}
            placeholder="Email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={`w-[250px] h-[250px] text-xl px-4 py-2 border border-gray-500 rounded-[20px] focus:outline-none md:w-[600px] lg:h-[250px] focus:ring-2 lg:w-[800px] focus:ring-gray-600 placeholder:text-gray-500 placeholder:text-xl placeholder:font-roboto ${darkMode ? 'bg-[#222] placeholder:text-white focus:ring-white' : 'bg-white placeholder:text-gray-500 focus:ring-gray-600'}`}
            placeholder="Message"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            value="Send"
            className={`mt-7 ${darkMode ? 'bg-white text-black': 'bg-[#0987f2] text-white'} rounded-[20px] md:w-[119px] w-[126px] h-[50px] text-[20px] font-semibold`}
      >
            Submit
          </button>
          
        </div>
      </form>
    </div>
  );
};

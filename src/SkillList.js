import React from "react";

export default function SkillList({src, skill}){
    return(
        <span className="flex items-center gap-1">
            <img src={src} className="w-[20px]" />
            <p className=" md:text-[20px]">{skill}</p>
        </span>
    )
}
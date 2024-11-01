import React, { useEffect, useState } from 'react'
import lightImg from "../../assets/light-mode-button.png";
import darkImg from "../../assets/dark-mode-button.png";

const DarkMode = () => {
    const [theme , setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    useEffect(()=>{
    if(theme === "dark") {
        element.classList.add("dark");
        element.classList.remove("light");
        localStorage.setItem("theme" , "dark");
    } else {
        element.classList.add("light");
        element.classList.remove("dark");
        localStorage.setItem("theme" , "light");
    }
    } , [theme])
  return (
    <div>
    {theme === "light" ? (
        <img onClick={()=>setTheme("dark")} 
        src= {lightImg}  
        alt="lightImg" 
        className=' cursor-pointer w-14 shadow-lg ms-20 lg:ms-0  ' />
    )  :(
        <img onClick={()=>setTheme("light")}
         src= {darkImg}  
         alt="lightImg" 
         className=' cursor-pointer w-14 shadow-lg ms-20 lg:ms-0  ' />
    )  } 
    </div>
  )
}

export default DarkMode

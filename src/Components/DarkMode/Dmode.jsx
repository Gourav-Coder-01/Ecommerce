import React, { useState } from 'react'
import DarkImg from "../../assets/website/dark-mode-button.png"
import LightImg from "../../assets/website/light-mode-button.png"

const Dmode = () => {
 
 const [theme,setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")  // --> if theme value in browser local exist then get it other wise set it to light

 const element = document.documentElement;
  
React.useEffect(()=>{
  if(theme === "dark"){
    element.classList.add("dark");
    localStorage.setItem("theme","dark");
  }else{
    element.classList.remove("dark");
    localStorage.setItem("theme","light");
  }
},[theme])
 
  
 

  return (
    <div className='relative w-[40px] -translate-y-2'>
      <img src={LightImg} alt="" onClick={()=>
       setTheme(theme === "light"?"dark":"light")
      }
       className={`${theme==="dark"?"opacity-0":"opacity-100"} absolute duration-200 transition-all cursor-pointer`} />
      <img src={DarkImg} alt="" onClick={()=>
       setTheme(theme === "light"?"dark":"light")
      } className={`${theme==="light"?"opacity-0":"opacity-100"} absolute duration-200 transition-all cursor-pointer`} />
    </div>
  )
}

export default Dmode

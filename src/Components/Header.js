import React from "react";
import logo from '../assests/logo.png'

const Header=()=>{
    return(
        <div className="flex justify-between h-16 border-0 border-red-500">
            <div>
                <img src={logo} className="w-24 ml-12" alt="" />
            </div>
            <div className="mr-8 mt-4">
                <button className="rounded bg-blue-700 text-cyan-50 px-4 py-1 ">LOGIN</button>
            </div>
        </div>
    )
}

export default Header;
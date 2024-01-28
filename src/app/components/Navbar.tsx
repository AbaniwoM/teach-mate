'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 w-full h-[80px] flex justify-center gap-9 items-center bg-white">
      <div className="flex">
        <Image src="" alt="" />
        <h3 className="text-black">TeachMateAI</h3>
      </div>
      
      <div>
      <form className="relative flex items-centers justify-center">
                  {/* Input Field */}
     <input type="text" id="search" placeholder="Enter your search here" className="border-0 focus:ring-0 focus:outline-0 w-[70%] bg-slate-600 rounded-l-lg pl-4 text-sm text-slate-200" />
                    {/* Submit Button */}
       <button className="ring-4 ring-slate-600 ring-offset-[0.45rem] shadow-transparent ring-offset-slate-800 hover:ring-offset-rose-500  hover:bg-rose-500 bg-transparent rounded-[50%] active:scale-95 cursor-pointer">
         <h2 className="rounded-full border-4 border-rose-500 w-11 h-11  text-rose-500 text-2xl text-center justify-center flex items-center font-semibold hover:border-slate-600 hover:text-slate-600">
            <Image src="/search.svg" alt="search-icon" width={30} height={30} />
         </h2>
      </button>   
     </form>
     </div>
     {/* <BasicModal /> */}
      <Link to="/addForm" className="btn btn-danger px-4 py-3 rounded md:ml-40 flex-shrink-0 text-sm font-bond text-white uppercase transition-all duration-150 ease-linear bg-rose-500 hover:bg-rose-400">
        Add Task +
      </Link>
    </div>
  )
}

export default Navbar
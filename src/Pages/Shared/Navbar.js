import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";


const Navbar = ({children}) => {

    const menuItem = <>

        <li><Link className='rounded-lg' to='/about'>About</Link></li>
        <li  class="dropdown  dropdown-hover hover:overflow-visible "><Link className='rounded-lg' to='/research'>Research</Link>
            <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                 <li><Link className='rounded-lg' to='/people'>People</Link></li>
                 <li><Link className='rounded-lg' to='/publications'>Publications</Link></li>
            </ul>
        </li>

        <li><Link className='rounded-lg' to='/people'>People</Link></li>
        <li><Link className='rounded-lg' to='/publications'>Publications</Link></li>
        <li><Link className='rounded-lg' to='/resource'>Resources</Link></li>
        <li><Link className='rounded-lg' to='/more'>More</Link></li>
  
    </>


    return (
        <div class="drawer drawer-end ">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" /> 
            <div class="drawer-content flex flex-col">
                
                 <div className='flex  w-full shadow-lg justify-between items-center px-20'>
                    <div className='flex items-center text-sm '>
                        <div className='flex justify-center items-center gap-2'>
                           <FaMobileAlt />  <p> +880-170000000</p>
                        </div>
                        <div class="divider divider-horizontal"></div>
                        <div className='flex justify-center items-center gap-2'>
                           <MdOutlineLocationOn />  <p>House- 22, 6th Floor, Road- 08, Sector- 09, Uttara, Dhaka</p>
                        </div>
                    </div>

                    <div className='flex '>
                         <div class="divider divider-horizontal  m-0 p-0 w-0"></div>

                        <div className='w-7 h-7 flex justify-center items-center hover:bg-primary'><Link to='/'><FaFacebookF /></Link></div>

                        <div class="divider divider-horizontal  m-0 p-0 w-0"></div>

                        <div className='w-7 h-7 flex justify-center items-center hover:bg-primary'><Link to='/'><FaLinkedinIn /></Link></div>

                        <div class="divider divider-horizontal  m-0 p-0 w-0"></div>

                        <div className='w-7 h-7 flex justify-center items-center hover:bg-primary'><Link to='/'><AiOutlineYoutube /></Link></div> 

                        <div class="divider m-0 p-0 w-0 divider-horizontal"></div>                      
                    </div>
                </div>
              
             <div class="w-full navbar lg:px-20 shadow-md ">
                <div class="flex-1 text-2xl px-2 mx-2"><Link to='/'>Research Foundatoin</Link></div>
                 <div class="flex-none lg:hidden">
                    <label for="my-drawer-3" class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                 </div> 
                
                <div class="flex-none hidden lg:block">
                    <ul class="menu menu-horizontal">
                        { menuItem }
                    </ul>
                </div>
                </div>
             
               { children }
            </div> 
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label> 
                <ul class="menu menu-varticle p-4 overflow-y-auto w-60 bg-base-100">
                    { menuItem }
                </ul>
                
            </div>
        </div>
    );
};

export default Navbar;
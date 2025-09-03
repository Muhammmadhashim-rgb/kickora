import React, { Component } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default class Navbar extends Component {
   constructor(props) {
      super(props);
      this.state = {
         menOpen: false,
         woOpen: false
      }
   }

   toggleDropdown = () => {
      this.setState({ menOpen: !this.state.menOpen });
   };
   toggleDropdownWO = () => {
      this.setState({ woOpen: !this.state.woOpen });
   };

   render() {
      return (
         <div>
            <div className="flex w-auto p-7 my-10 justify-between items-center rounded-2xl bg-[#FAFAFA]">
               {/* Left Menu */}
               <ul className="flex gap-2 items-center">
                  <li>
                     <a
                        className="text-[#232321] font-semibold font-rubik"
                        href="#"
                     >
                        New Drops 🔥
                     </a>
                  </li>

                  {/* Dropdown Menu */}
                  <li className="relative">
                     <button
                        onClick={this.toggleDropdown}
                        className="inline-flex items-center gap-x-1.5 rounded-md  px-3 py-2 text-[#232321] font-semibold font-rubik  "
                     >
                        Men
                        <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                     </button>

                     {this.state.menOpen && (
                        <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5">
                           <div className="py-1">
                              <a
                                 href="#"
                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                 T-Shirts
                              </a>
                              <a
                                 href="#"
                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                 Shoes
                              </a>
                              <a
                                 href="#"
                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                 Accessories
                              </a>
                           </div>
                        </div>
                     )}
                  </li>

                  <li className="relative">
                     <button
                        onClick={this.toggleDropdownWO}
                        className="inline-flex items-center gap-x-1.5 rounded-md  px-3 py-2 text-[#232321] font-semibold font-rubik  "
                     >
                        Women
                        <ChevronDownIcon className="w-5 h-5 text-gray-800" />
                     </button>

                     {this.state.woOpen && (
                        <div className="absolute left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black/5">
                           <div className="py-1">
                              <a
                                 href="#"
                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                 T-Shirts
                              </a>
                              <a
                                 href="#"
                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                 Shoes
                              </a>
                              <a
                                 href="#"
                                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              >
                                 Accessories
                              </a>
                           </div>
                        </div>
                     )}
                  </li>
               </ul>

               {/* Logo */}
               <img className="cursor-pointer" src="/Images/Logo.svg" alt="Logo" />

               {/* Right Icons */}
               <ul className="flex gap-10 items-center">
                  {/* Search Icon */}
                  <li className="cursor-pointer">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                     >
                        <path
                           fill="currentColor"
                           fillRule="evenodd"
                           d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004"
                           clipRule="evenodd"
                        />
                     </svg>
                  </li>

                  {/* User Icon */}
                  <li className="cursor-pointer">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                     >
                        <path
                           fill="currentColor"
                           d="M12 3.75a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5m-4 9.5A3.75 3.75 0 0 0 4.25 17v1.188c0 .754.546 1.396 1.29 1.517c4.278.699 8.642.699 12.92 0a1.54 1.54 0 0 0 1.29-1.517V17A3.75 3.75 0 0 0 16 13.25h-.34q-.28.001-.544.086l-.866.283a7.25 7.25 0 0 1-4.5 0l-.866-.283a1.8 1.8 0 0 0-.543-.086z"
                        />
                     </svg>
                  </li>

                  {/* Cart Icon */}
                  <li className="cursor-pointer">
                     <div className="flex w-8 h-8 p-2.5 justify-center items-center rounded-full bg-[#FFA52F] text-black font-semibold font-rubik">
                        0
                     </div>
                  </li>
               </ul>
            </div>
         </div>
      );
   }
}

import React,{useState} from "react";

import {
FaPhoneAlt
} from 'react-icons/fa'

import {
    MdLocationOn
  } from "react-icons/md"

import Logo from '../../../images/cotijas-taco-shop-logo-noBG-square-250x-no-subtitle.png';


const S1Hero4 = (props) => {
    const [show, setShow] = useState(false)
    return(
        <>
        <section id="s1Hero4" className="w-full h-full bg-center bg-cover md:bg-top animate-fade-in-fwd heroBG"
                style={{
                    backgroundImage: `url(${props.bgImage})`}}>
                                    <div className="w-full xl:w-3/4 2xl:w-4/5">
                <div className="bg-white">
                    <div className="relative items-center justify-between p-3 mt-8 border border-gray-100 rounded shadow md:mt-8 sm:p-5 2xl:flex">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img className="w-20 h-20 rounded-full shadow" src={Logo} />
                                <div className="ml-3">
                                    <p className="pb-2 text-2xl font-semibold leading-none text-gray-800">Cotijas Taco Shop</p>
                                    <div className="flex flex-row ">
                                    <MdLocationOn size="1.5rem" color="red" />
                                    <p className="mt-2 text-xs leading-3 text-gray-500">3695 Fairmount Ave San Diego, CA 92105</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="items-center mt-4 sm:flex lg:items-start xl:items-center 2xl:mt-0">
                            <div className="items-center md:flex">
                                <div className="items-center sm:flex">
                                    <div className="w-48 p-3 text-xs font-medium leading-4 text-gray-600 bg-gray-100 rounded whitespace-nowrap sm:w-auto md:text-sm">Email: cotijas@gmail.com</div>
                                    <div className="w-48 p-3 mt-4 text-xs font-medium leading-4 text-gray-600 bg-gray-100 rounded sm:w-auto md:text-sm sm:ml-4 sm:mt-0">Phone: 619-521-1974</div>
                                </div>
                                <div className="flex flex-col items-start mt-4 sm:flex-row sm:items-center md:mt-0">
                                    <div className="w-48 p-3 text-xs font-medium leading-4 text-gray-600 bg-gray-100 rounded md:text-sm md:ml-4 sm:w-auto">Location: 3695 Fairmount Ave San Diego, CA 92105 </div>

                                </div>
                            </div>
                         {/*   <div className="absolute top-0 right-0 mt-3 mr-3 xl:relative xl:ml-4">
                                <button className="mt-1 focus:outline-none" onClick={()=>setShow(!show)}>
                                    <svg className="dropbtn" width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.16667 10.8332C4.62691 10.8332 5 10.4601 5 9.99984C5 9.5396 4.62691 9.1665 4.16667 9.1665C3.70643 9.1665 3.33334 9.5396 3.33334 9.99984C3.33334 10.4601 3.70643 10.8332 4.16667 10.8332Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 10.8332C10.4602 10.8332 10.8333 10.4601 10.8333 9.99984C10.8333 9.5396 10.4602 9.1665 10 9.1665C9.53976 9.1665 9.16666 9.5396 9.16666 9.99984C9.16666 10.4601 9.53976 10.8332 10 10.8332Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M15.8333 10.8332C16.2936 10.8332 16.6667 10.4601 16.6667 9.99984C16.6667 9.5396 16.2936 9.1665 15.8333 9.1665C15.3731 9.1665 15 9.5396 15 9.99984C15 10.4601 15.3731 10.8332 15.8333 10.8332Z" stroke="#A1A1AA" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                </button>*/}
                             {/*  {show &&  <div className="absolute right-0 z-30 w-24 mr-6 -ml-16 bg-white shadow dropdown-content lg:-ml-10 xl:ml-0">
                                    <div className="w-full px-4 py-4 text-xs cursor-pointer hover:bg-indigo-700 hover:text-white">
                                        <p>Edit</p>
                                    </div>
                                    <div className="w-full px-4 py-4 text-xs cursor-pointer hover:bg-indigo-700 hover:text-white">
                                        <p>Delete</p>
                                    </div>
                </div>}
                            </div> */}

                        </div>
                        <button className="w-full px-6 py-4 mt-4 text-lg font-medium leading-none text-white bg-green-700 rounded focus:outline-none md:text-sm hover:opacity-80 sm:mt-0 sm:ml-4 sm:w-auto">See Menu &amp; Order</button>
                    </div>
                </div>
            </div>
                        

        </section>
        </>
    )
}

export default S1Hero4
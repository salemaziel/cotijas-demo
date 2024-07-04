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
                                    <div className="w-full px-0">
                <div className="bg-white">
                    <div className="relative items-center justify-center p-3 mt-8 text-center border border-gray-100 rounded shadow md:mt-8 sm:p-5 2xl:flex">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img className="w-20 h-20 rounded-full shadow" src={Logo} />
                                <div className="ml-3">
                                    <p className="pb-2 text-2xl font-semibold leading-none text-left text-gray-800">Cotijas Taco Shop</p>
                                    <div className="flex flex-row ">
                                    <MdLocationOn size="1.5rem" color="red" />
                                    <p className="mt-2 text-sm leading-3 text-gray-500">3695 Fairmount Ave San Diego, CA 92105</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="items-center mt-4 sm:flex lg:items-start xl:items-center 2xl:mt-0">
                            <div className="flex flex-col items-center md:flex-auto">
                                <div className="items-center sm:flex">
                                    <div className="w-48 p-3 text-sm font-medium leading-4 text-gray-600 bg-gray-100 rounded whitespace-nowrap sm:w-auto md:text-sm">cotijas@gmail.com</div>
                                    <div className="w-48 p-3 mt-2 text-sm font-medium leading-4 text-gray-600 bg-gray-100 rounded md:mt-4 sm:w-auto md:text-sm sm:ml-4 sm:mt-0"><a href="tel:619-521-1974" className="mt-1 font-bold">619-521-1974</a></div>
                                </div>
                                {/*<div className="flex flex-col items-start mt-2 md:mt-4 sm:flex-row sm:items-center">
                                    <div className="w-48 p-3 text-sm font-medium leading-4 text-gray-600 bg-gray-100 rounded md:text-sm md:ml-4 sm:w-auto">
                                    3695 Fairmount Ave San Diego, CA 92105 </div>

                                </div>*/}
                            </div>
                        </div>
                        <button className="justify-center inline-block w-full px-6 py-4 mx-auto mt-4 text-lg font-medium leading-none text-center text-white bg-green-700 rounded focus:outline-none md:text-sm hover:opacity-80 sm:mt-0 sm:ml-4 sm:w-auto whitespace-nowrap">See Menu &amp; Order</button>
                    </div>
                </div>
            </div>
                        

        </section>
        </>
    )
}

export default S1Hero4
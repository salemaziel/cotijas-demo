import React from 'react';

import Fade from "react-reveal/Fade"

import {
  MdLocationOn
} from "react-icons/md"

import {
  FaLocationArrow,
  FaPhoneAlt
} from "react-icons/fa"

const S2BizDetailsCard = () => {
return(
    <>
<div className="w-full md:max-w-2xl lg:max-w-3xl relative w-full h-full px-4 mx-auto my-20">
  <Fade bottom>
  <div className="w-full md:max-w-2xl lg:max-w-3xl flex flex-col text-gray-800 bg-white border border-gray-200 rounded-lg shadow-xl md:flex-row rounded-xl">

    <div className="w-full mx-auto">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2048.2222241727227!2d-117.10182485206931!3d32.74575493125262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9541492b869ab%3A0x88e5ef22dc35c99c!2sCotija&#39;s%20Mex%20Grill%20and%20Seafood!5e0!3m2!1sen!2sus!4v1691640682123!5m2!1sen!2sus" width="100%" height="100%" className="w-full h-64 mb-8 rounded-t-xl md:rounded-tl-xl md:rounded-bl-xl md:rounded-r-none md:h-full" loading="lazy" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} title="That Mexican Place Map Location" />


    </div>
    <div id="hours" className="w-full">
    <div id="location" className="" >
      <h2 className="mb-8 text-2xl font-bold text-center sm:text-xl md:text-2xl md:mt-5">Hours</h2>
      <div className="justify-center table w-full ">
        <table className="w-full mx-auto mb-16 table-auto">
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700 ">  Sunday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 11:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Monday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Tuesday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Wednesday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Thursday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 10:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Friday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 11:00pm </span>  
              </td>
            </tr>
          </tbody>     
          <tbody className="text-center">
            <tr className="relative py-1 text-xs transform scale-100 cursor-default">
              <td className="h-10 pl-8 whitespace-no-wrap">
                <span className="text-xl text-red-700">  Saturday :</span>  
              </td>
              <td className="pr-8 whitespace-no-wrap">
                <span className="text-xl"> 8:00am - 11:00pm </span>  
              </td>
            </tr>
          </tbody>     
        </table>
      </div>
      <div className="px-5 pt-5 mx-auto mb-10 text-2xl text-left md:pl-10 lg:pl-32">
        
        <span className="block pb-5 mx-auto text-4xl text-center">Location</span>
        <div className="flex justify-center mx-auto lg:px-3">
        <MdLocationOn size="3rem" className="mr-3" />
        <a href="https://www.google.com/maps/dir//That+Mexican+Place,+200+W+El+Norte+Pkwy,+Escondido,+CA+92026/@33.1398241,-117.0937007,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dbf4b028a9c805:0x2f75747a6e44876c!2m2!1d-117.091512!2d33.1398241" className="text-left text-red-700 underline "> 3695 Fairmount Ave <br />
        San Diego, CA 92105 </a>
        </div>
        <span className="block py-5 mx-auto text-4xl text-center">Phone</span>
        <div className="flex justify-center mx-auto lg:px-3">
          <FaPhoneAlt size="2rem"  className="mr-3" />
        <a href="tel:760743-3783" className="text-left text-red-700 underline lg:px-5"> 619-521-1974 </a>
        </div>
      </div>
    </div>
    </div>
  </div>
  </Fade>
</div>


    </>
)
}

export default S2BizDetailsCard;

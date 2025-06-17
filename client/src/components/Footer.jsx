import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className="flex flex-col text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 bg-[#F6F9FC]">
        <div className="flex flex-row items-center justify-between gap-12 md:gap-6">

         <div className="flex flex-col max-w-80 items-start">
            <img src={assets.logo} alt="logo" className="invert mb-4 h-8 md:h-9 opacity-80"/>
            <p className="text-sm">Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.</p>
            <div className="flex flex-row mt-4 gap-3 mb-3">
             <img src={assets.instagramIcon} alt="instagram-icon" className="w-6"/>
             <img src={assets.facebookIcon} alt="facebook-icon" className="w-6"/>
             <img src={assets.twitterIcon} alt="twitter-icon" className="w-6"/>
             <img src={assets.linkendinIcon} alt="linkedin-icon" className="w-6"/>
            </div>
         </div>
        
         <div className="flex flex-col">
          <p className="text-lg text-gray-800 font-playfair">COMPANY</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Partners</a></li>
          </ul>
         </div>

         <div className="flex flex-col">
            <p className="text-lg text-gray-800 font-playfair">SUPPORT</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">SafetyInformation</a></li>
                <li><a href="#">Cancellation Options</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Accessibility</a></li>
            </ul>
         </div>

        <div className="max-w-80">
            <p className="font-playfair text-lg text-gray-800">STAY UPDATED</p>
            <p className="mt-4 text-sm">Subscribe to our newsletter for travel inspiration and special offers.</p>
            <div className="flex items-center mt-4">
                <input type="text" className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none" placeholder='Your email'/>
                <button className='flex items-center justify-center bg-black h-9 w-9 aspect-square rounded-r'>
                <img src={assets.arrowIcon} alt="arrow-icon" className="invert w-3.5"/>
                </button>
            </div>
        </div>
        </div>
        <div>
        </div>
      <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Bisaath. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Sitemap</a></li>
                </ul>
            </div>
    </div>
  )
}

export default Footer
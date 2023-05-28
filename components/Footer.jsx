"use client";

import {FaFacebook, FaInstagram, FaYoutube} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
export default function Footer() {
  return (
    <div className="w-full bg-black flex text-white flex-col">
        <div className="flex w-full sm:flex-row flex-col justify-around p-10">
      <div>
        <p className="text-2xl pt-5 font-semibold">Unicus Mobility</p>
      </div>
      <div>
        <div>
          <h1 className="font-semibold my-4 text-2xl">Shop</h1>
        </div>
        <div>
          <ul>
            <li className="my-1 cursor-pointer">Ebikes</li>
            <li className="my-1 cursor-pointer">Accessories</li>
            <li className="my-1 cursor-pointer">Replacement Parts</li>
            <li className="my-1 cursor-pointer">Gift Cards</li>
            <li className="my-1 cursor-pointer">Sales & Deals</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-semibold my-4 text-2xl">Electric Bikes</h1>
        </div>
        <div>
          <ul>
            <li className="my-1 cursor-pointer">All Electric Bikes</li>
            <li className="my-1 cursor-pointer">Commuting EBikes</li>
            <li className="my-1 cursor-pointer">Fat Tire EBike</li>
            <li className="my-1 cursor-pointer">Folding EBikes</li>
            <li className="my-1 cursor-pointer">Road EBikes</li>
            <li className="my-1 cursor-pointer">Step Through EBikes</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-semibold my-4 text-2xl">Community</h1>
        </div>
        <div>
          <ul>
            <li className="my-1 cursor-pointer">Electric Bike Safety</li>
            <li className="my-1 cursor-pointer">Beyond The Bike</li>
            <li className="my-1 cursor-pointer">Videos</li>
            <li className="my-1 cursor-pointer">Reviews</li>
            <li className="my-1 cursor-pointer">Blog</li>
            <li className="my-1 cursor-pointer">Press</li>
          </ul>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-semibold my-4 text-2xl">Company</h1>
        </div>
        <div>
          <ul>
            <li className="my-1 cursor-pointer">About Us</li>
            <li className="my-1 cursor-pointer">Affiliate Program</li>
            <li className="my-1 cursor-pointer">Become a Dealer</li>
            <li className="my-1 cursor-pointer">Career</li>
            <li className="my-1 cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>
      </div>
      <div className="px-6 mb-8 flex sm:flex-row flex-col justify-between">
        <div>
          <p>© 2023 Unicus Mobility Inc., All Rights Reserved.</p>
          <div>
            <ul className="flex sm:flex-nowrap flex-wrap mt-2">
              <li className="cursor-pointer">Terms of Purchase |&nbsp;</li>
              <li className="cursor-pointer">Terms of Use |&nbsp;</li>
              <li className="cursor-pointer">Warrenty |&nbsp;</li>
              <li className="cursor-pointer">Returns |&nbsp;</li>
              <li className="cursor-pointer">Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className='my-5'>
          <div>
            <p className='font-semibold'>Follow Us</p>
          </div>
          <div className='flex my-2'>
            <div className='mx-2 cursor-pointer'><FaFacebook/></div>
            <div className='mx-2 cursor-pointer'><FaInstagram/></div>
            <div className='mx-2 cursor-pointer'><AiFillTwitterCircle/></div>
            <div className='mx-2 cursor-pointer'><FaYoutube/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

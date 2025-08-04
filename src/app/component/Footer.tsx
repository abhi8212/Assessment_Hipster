import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { FaInstagram, FaTwitter, FaFacebook, FaSkype } from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <footer className=" bg-zinc-900 text-white py-12">
        <div className=" flex flex-wrap justify-center mx-8">
          <div className="w-full md:w-1/4 mb-12 px-3">
          <Image
  src="/images/company.png"
  alt="Company Logo"
  width={120} // specify as needed
  height={40} // specify as needed
  className="w-auto mb-4"
/>
            {/* <Image src='/images/company.png' alt="Company Logo" className="w-auto mb-4" /> */}
            <p className='text-white'>Come visit The Kindori Kindergarten for yourself so you can tour the rooms and meet some of our educators. We offer high Quality early education.</p>
            <div className="flex justify-around my-4 ">
              <Link href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-orange-600">
                <FaInstagram className="text-4xl p-2 text-white" />
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-green-600">
                <FaTwitter className="text-white text-4xl p-2" />
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-yellow-600">
                <FaFacebook className="text-4xl p-2 text-white" />
              </Link>
              <Link href="/" target="_blank" rel="noopener noreferrer" className="rounded-full w-auto bg-red-600">
                <FaSkype className="text-4xl p-2 text-white" />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 pr-4 mb-12">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 w-3" />
              <span>123-456-7890</span>
            </div>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 w-3" />
              <span>example@example.com</span>
            </div>
            <div className="flex items-center mb-2 ">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 w-3" />
              <span>123 Address St, City, State, Zip Code</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faClock} className="mr-2 w-3" />
              <span>Mon - Fri: 9am - 6pm</span>
            </div>
          </div>
          <div className="w-full md:w-1/4 mb-12">
            <h3 className="text-lg font-bold mb-4">Activity</h3>
            <Link href="#" className="block mb-2 hover:text-gray-400">Creative Activity</Link>
            <Link href="#" className="block mb-2 hover:text-gray-400">Sports Activity</Link>
            <Link href="#" className="block mb-2 hover:text-gray-400">Water Activity</Link>
            <Link href="#" className="block mb-2 hover:text-gray-400">Play Activity</Link>
            <Link href="#" className="block hover:text-gray-400">Water</Link>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className='text-white mb-4'>Subscribe to our Newsletter right now to be updated.</p>
            <input type="email" placeholder="Enter your email" className="w-full bg-gray-700 text-white px-4 py-2 mb-2 rounded-md" />
            <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md">Subscribe</button>
          </div>
        </div>
      </footer>
      <div className="flex justify-between items-center bg-black text-white w-full py-6">
        <div className="text-left px-4">
          © 2022 Kindori, All Rights Reserved.
        </div>
        <div className="text-right px-5 ">
          With love by CMSSuperHeroes.
        </div>
      </div>
    </div>
  );
};

export default Footer;

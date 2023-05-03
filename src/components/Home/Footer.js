import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, } from '@fortawesome/free-brands-svg-icons';
import {  faInstagramSquare , } from '@fortawesome/free-brands-svg-icons';
import {  faTwitterSquare , } from '@fortawesome/free-brands-svg-icons';
import {  faRedditSquare , } from '@fortawesome/free-brands-svg-icons';

export default function Footer() { 
    return (
        <footer className="bg-gray-900 relative">
            <div className="h-8 w-full absolute bottom-60 overflow-hidden">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
                <path d="M-1.80,81.08 C149.12,202.54 348.90,-46.45 501.02,81.08 L500.00,150.00 L0.00,150.00 Z" style={{stroke: 'none', fill: '#9caf88'}}></path>
                </svg>
            </div>
            <div class="footer-line"></div>
            <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div className="col-span-1 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Marketing</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Analytics</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Commerce</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Insights</a></li>
            </ul>
        </div>
          <div className="col-span-1 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Documentation</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Guides</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">API Status</a></li>
            </ul>
          </div>

          <div className="col-span-1 mb-4 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="list-none">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Partners</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div className="col-span-1 mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold text-white mb-4">Let's stay connected</h3>
          <div className="text-white">Enter your email to get notifications</div>
          
          <div className="flex items-center py-3 relative">
            <input
                className="appearance-none bg-transparent border-b-2 border-gray-400 w-full mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Your Email"
            />
            <button
                className="absolute bottom-5 right-4    border-transparent text-sm text-white py-1 px-2"
                type="button"
            >
                Submit
            </button>
        </div>
                <div>
                    <p className="text-white">Follow Us</p>
                </div>    
                    <div className='flex mt-3 text-2xl'>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faFacebookSquare} className=" text-[#7D7D7D] pr-3" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faInstagramSquare} className=" text-[#7D7D7D] pr-3" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faTwitterSquare} className=" text-[#7D7D7D] pr-3" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white">
                            <FontAwesomeIcon icon={faRedditSquare} className=" text-[#7D7D7D] pr-3" />
                        </a>
                </div>
            </div>
        </div>
        </div>
        </footer>
    );
}

      
          
            
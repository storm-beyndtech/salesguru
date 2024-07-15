import { AiFillGithub } from 'react-icons/ai';
import { RiMailFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
  
  export default function Footer() {
    return (
      <section className="bg-black text-white">
        <div className="flex w-full flex-col px-3 py-20 max-ctn">
          <div className="flex flex-col lg:flex-row lg:justify-between">
            <div className="lg:mr-20">
              <Link to="/" className="mb-12 inline-block max-w-full font-bold text-[#1353fe]">
                <img className="h-9 w-auto" src={logo} alt="logo" />
              </Link>
              <div className="flex flex-col">
                <form action="" className="mb-10 mt-5 max-w-[421px]">
                  <div className="relative">
                    <label htmlFor="email" className="font-inter font-medium">
                      Subscribe To Newsletter
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      className="font-inter relative mt-4 w-full rounded-md border border-black bg-[#0e0e0e] px-6 py-4 text-base"
                    />
                    <button type="submit" className="absolute right-[15px] top-[55px]">
                    <RiMailFill size={30} color={'#ffffff4e'}/>
                    </button>
                  </div>
                </form>
                <div>
                  <h3 className="font-inter mb-4 mt-8 font-medium">
                    EMAIL US
                  </h3>
                  <p className="font-inter text-base">support@salesgurucommunity.com</p>
                </div>
              </div>
            </div>
  
            <div className="mt-7 max-w-[700px] grow lg:flex lg:flex-row">
              {/* Other content */}
              <div className="flex grow flex-row flex-wrap lg:flex-nowrap lg:items-start">
                {/* PRODUCTS */}
                <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:my-0">
                  <h2 className="font-inter font-medium">PRODUCTS</h2>
                  <a href="#" className="font-inter font-light text-gray-500">
                    Accessories
                  </a>
                  <a href="#" className="font-inter font-light text-gray-500">
                    Tech Gadgets
                  </a>
                  <a href="#" className="font-inter font-light text-gray-500">
                    Cloths
                  </a>
                  <a href="#" className="font-inter font-light text-gray-500">
                    Automobiles
                  </a>
                </div>
  
                {/* SUPPORT */}
                <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:my-0">
                  <h2 className="font-inter font-medium">SUPPORT</h2>
                  <a href="#" className="font-inter font-light text-gray-500">
                    Pricing
                  </a>
                  <a href="/more/conditions" className="font-inter font-light text-gray-500">
                    Company
                  </a>
                  <a href="/more/spreads" className="font-inter font-light text-gray-500">
                    Interest
                  </a>
                  <a href="/more/hours" className="font-inter font-light text-gray-500">
                    Trading Hours
                  </a>
                </div>
  
                {/* COMPANY */}
                <div className="my-5 mr-8 flex max-w-[500px] grow basis-[100px] flex-col space-y-5 lg:my-0 lg:mr-0">
                  <h2 className="font-inter font-medium">COMPANY</h2>
                  <a href="/about" className="font-inter font-light text-gray-500">
                    About Us
                  </a>
                  <a href="/about" className="font-inter font-light text-gray-500">
                    Regulations
                  </a>
                  <a href="/about" className="font-inter font-light text-gray-500">
                    Servers
                  </a>
                  <a href="/about" className="font-inter font-light text-gray-500">
                    Privacy & Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-20 lg:flex lg:flex-row-reverse lg:justify-between">
            <div className="mb-8 mt-6 flex flex-row lg:mb-0 lg:mt-0 items-center">
              <a href="/" className="mr-4 transition hover:text-gray-400">
              <RiMailFill size={26}/>
              </a>
              <a href="/" className="mx-4 transition hover:text-gray-400">
                <AiFillGithub size={24} />
              </a>
            </div>
            <p className="font-inter text-sm text-gray-500 lg:mt-0">
              © Copyright 2021. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
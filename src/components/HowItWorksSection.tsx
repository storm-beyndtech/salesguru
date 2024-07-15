import React from 'react';
import { Transition } from '@headlessui/react';
import textBg from "../assets/textBg.png"

const HowItWorksSection: React.FC = () => {
  return (
    <section>
      <div className="max-w-7xl px-5 py-16 md:px-10 md:py-16 lg:py-24 mx-auto">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <p className="uppercase text-[#1353fe]">3 easy steps</p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              How it{' '}
              <span className="bg-cover bg-center bg-no-repeat px-4 text-white" style={{ backgroundImage: `url(${textBg})`, backgroundSize: "90%" }}>
                works
              </span>
            </h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">
                Unveiling the Mechanism: A Comprehensive Guide to Its Inner Workings
              </p>
            </div>
          </div>
        </div>
        <Transition
          appear
          show
          enter="transition-opacity duration-900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="mx-auto grid grid-cols-1 gap-4 sm:justify-items-stretch md:grid-cols-3 lg:gap-8">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5">
                <p className="text-xl font-bold">1</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Find Top Selling Products</p>
              <p className="text-sm text-[#636262]">
              We enable you select high-demand products to purchase and resell from wide range categories sourced from global dropshipping suppliers.
              </p>
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639833af1925275b6f0b43e1_Vector%2032.svg"
                alt=""
                className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[18%] md:inline-block lg:left-auto"
              />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5">
                <p className="text-xl font-bold">2</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Buy And Resell Effortlessly</p>
              <p className="text-sm text-[#636262]">
              Order products directly from your dashboard with just a few clicks and seamlessly list them for resale.
              </p>
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639834731925279c5e0b4ee5_Vector%2033.svg"
                alt=""
                className="absolute bottom-[-33%] left-0 right-auto top-auto -z-10 hidden w-96 md:bottom-auto md:left-[136px] md:right-[-50%] md:top-[10%] md:inline-block lg:left-auto"
              />
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <div className="mb-5 flex max-w-[400px] flex-col items-center justify-center rounded-xl border border-solid border-black bg-white px-8 py-5">
                <p className="text-xl font-bold">3</p>
              </div>
              <p className="mb-2 text-xl font-semibold">Earn Profits Efficiently</p>
              <p className="text-sm text-[#636262]">
                Your sales will be concluded within a maximum of 15 business days, and your portfolio will be automatically updated.
              </p>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default HowItWorksSection;

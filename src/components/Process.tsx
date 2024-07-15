import { Transition } from '@headlessui/react';
import processImg1 from '../assets/process/dropshipping-1.webp';
import processImg2 from '../assets/process/dropshipping-2.webp';
import processImg3 from '../assets/process/dropshipping-3.webp';
import processImg4 from '../assets/process/dropshipping-4.webp';
import arrow from '../assets/process/arrow-step.svg';

export default function Process() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl px-5 py-16 md:px-10 md:py-16 lg:py-24 mx-auto">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <p className="text-[#1353fe]">The Process</p>
            <h2 className="text-3xl font-semibold md:text-5xl">
              What Is <span className="text-[#2d313b] block">Dropshipping?</span>
            </h2>
          </div>
        </div>

        <Transition
          appear
          show
          enter="transition-opacity duration-900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
        >
          <div className="pt-16 mx-auto grid grid-cols-1 gap-5 items-center sm:justify-items-stretch md:grid-cols-4 relative">
            {/* Step 1 */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <img
                className="w-32"
                src={processImg1}
                alt="dropshipping process"
              />
              <p>Customer purchases products from your online store</p>
              <img
                className="w-10 sm:absolute sm:top-[45%] sm:-right-[10%] max-sm:rotate-90 translate-x-[50%] max-sm:pt-10"
                src={arrow}
                alt="arrow"
              />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <img
                className="w-32"
                src={processImg2}
                alt="dropshipping process"
              />
              <p>Their order goes directly to your suppliers</p>
              <img
                className="w-10 sm:absolute sm:top-[45%] sm:-right-[10%] max-sm:rotate-90 translate-x-[50%] max-sm:pt-10"
                src={arrow}
                alt="arrow"
              />
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <img
                className="w-32"
                src={processImg3}
                alt="dropshipping process"
              />
              <p>Your suppliers ship the product to your customer</p>
              <img
                className="w-10 sm:absolute sm:top-[45%] sm:-right-[10%] max-sm:rotate-90 translate-x-[50%] max-sm:pt-10"
                src={arrow}
                alt="arrow"
              />
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col items-center gap-4 p-8 text-center">
              <img
                className="w-32"
                src={processImg4}
                alt="dropshipping process"
              />
              <p>You keep the profit from the retail price</p>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
}

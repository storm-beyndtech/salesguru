import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPoint = 200; // Adjust this value based on when you want the animation to trigger

    if (scrollY > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const features = [
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">Easy</span> Setup
        </p>
      ),
      description:
        'Smooth and hassle-free account setup process that encourages users to interact more with the website.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-[#0085FF]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672Zm-7.518-.267A8.25 8.25 0 1 1 20.25 10.5M8.288 14.212A5.25 5.25 0 1 1 17.25 10.5"
          />
        </svg>
      ),
    },
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">All in </span> one
        </p>
      ),
      description:
        'Sales Guru takes care of everything from ordering, managing inventory, reselling and payments to secure transactions and shipping.',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-[#0085FF]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
          />
        </svg>
      ),
    },
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">A safe and </span> efficient platform
        </p>
      ),
      description:
        'Millions of people trust Sales Guru to carry out productarbitrage',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-12 text-[#0085FF]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto text-center">
          <h2 className="hd-text">
            <span className="text-[#12006C]">Key</span> Features
          </h2>
          <p className="desc text-[#636262] mx-auto">
            Make every step user-centric
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, i) => (
            <Transition
              key={i}
              show={isVisible}
              enter="transition-opacity transform duration-1000 ease-in-out"
              enterFrom="opacity-0 translate-y-8"
              enterTo="opacity-100 translate-y-0"
            >
              <div className="grid gap-8 border border-solid border-[#dfdfdf] p-8 md:p-10">
                {feature.icon}
                {feature.title}
                <p className="text-sm text-[#636262]">{feature.description}</p>
              </div>
            </Transition>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

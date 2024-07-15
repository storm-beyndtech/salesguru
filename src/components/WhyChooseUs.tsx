import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { SiSoundcharts } from "react-icons/si";
import { IoSpeedometer } from "react-icons/io5";
import { IoCash } from "react-icons/io5";

const WhyChooseUs: React.FC = () => {
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
          <span className="text-[#12006C]">High </span> Returns
        </p>
      ),
      description:
        "With strategic buying and selling, it's possible to achieve over 300% return on investment (ROI).",
      icon: (
        <SiSoundcharts className="size-12 text-[#0085FF]"/>
      ),
    },
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">Minimal </span>Effort
        </p>
      ),
      description:
        'After creating an account and place your automatic orders, the platform handles the rest. Eliminating the need to constantly monitor the market or manage logistics.',
      icon: (
        <IoSpeedometer  className="size-12 text-[#0085FF]"/>
      ),
    },
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">Low Entry </span>Barrier
        </p>
      ),
      description:
        'With just $1, anyone can start investing and potentially see significant returns.',
      icon: (
        <IoCash  className="size-12 text-[#0085FF]"/>
      ),
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto text-center">
          <h2 className="hd-text">
            <span className="text-[#12006C]">Why Choose </span> <br />
            Sales Guru Community
          </h2>
          <p className="desc text-[#636262] mx-auto">
            Exceeding Users Expectations 
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

export default WhyChooseUs;

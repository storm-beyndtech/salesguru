import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiUsers } from 'react-icons/hi2';
import { BiSolidBank } from "react-icons/bi";
import { RiTokenSwapFill } from "react-icons/ri";
import { SiSoundcharts } from "react-icons/si";


const Process: React.FC = () => {
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
          <span className="text-[#12006C]">Open an </span>Account
        </p>
      ),
      description:
        "Start by creating an account on the Sales Guru Community platform. It's simple and quick.",
      icon: <HiUsers className="size-12 text-[#0085FF]" />,
    },
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">Deposit </span>Funds
        </p>
      ),
      description:
        'Deposit a minimum of $1 to get started. This small initial investment allows you to participate without significant financial risk.',
      icon: (
        <BiSolidBank className="size-12 text-[#0085FF]"/>
      ),
    },
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">Automate Your </span> Orders
        </p>
      ),
      description:
        'Place an automatic buy and resell order on the platform. The system will handle the purchasing and selling of products for you.',
      icon: (
        <RiTokenSwapFill className="size-12 text-[#0085FF]"/>
      ),
    },
    {
      title: (
        <p className="text-xl font-semibold">
          <span className="text-[#12006C]">Watch Your </span>Investment Grow
        </p>
      ),
      description: 'Let the system work for you and monitor your returns.',
      icon: (
        <SiSoundcharts className="size-12 text-[#0085FF]"/>
      ),
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-5xl px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto text-center">
          <h2 className="hd-text mb-14">
            <span className="text-[#12006C]">Product Arbitrage</span> <br />{' '}
            Simplified
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
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

export default Process;

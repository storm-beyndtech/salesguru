import { heroAvatarLinks } from '@/lib/utils';
import phoneBg from '../assets/phoneBg.png';
import { Link } from 'react-router-dom';
import customBg from '../assets/heroCustom.png';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-no-repeat bg-center" id="heroSection">
      <div className="max-ctn pad-y px-5 max-md:pt-40 grid grid-cols-1 items-center gap-12 sm:gap-20 md:grid-cols-2">
        <div className="max-w-[900px]">
          <h1 className="hd-text max-md:!text-3xl text-white mb-4 md:mb-8">
            Global {' '}
            <span className="text-[#0085FF]">Product Arbitrage </span> Solutions.
          </h1>
          <p className="text-[#636262] mb-[30px] text-base max-md:!text-lg">
          Discover, Source, and Profit from Worldwide Product Opportunities.
          </p>
          <Link to="/login" className="primaryBtn mb-6">
            Get Started <span className="ml-6">&rarr;</span>
          </Link>
          <div className="relative mb-4 flex w-full max-w-xs items-center">
            {heroAvatarLinks.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="avatar"
                className={`relative avatar ${
                  i > 0 ? '-ml-5' : ''
                } [box-shadow:#172439_0px_6px]`}
                style={{ top: 'auto', left: `0px` }}
              />
            ))}
            <div className="relative left-[-40px] top-auto z-[1] rounded-[30px] bg-gray-900 py-2 pl-12 pr-3 text-center text-white [box-shadow:#172439_0px_6px]">
              <p className="text-[10px] leading-normal font-semibold">
                <span className="font-bold">2000k+ </span>
                <br />
                Clients
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${phoneBg})` }}
        >
          <img className="w-[520px] m-auto" src={customBg} alt="trade" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

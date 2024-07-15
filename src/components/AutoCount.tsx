import { useEffect, useState } from 'react';

const AutoCount = () => {
  const [startCount, setStartCount] = useState(false);
  const [regulated, setRegulated] = useState(0);
  const [offices, setOffices] = useState(0);
  const [instruments, setInstruments] = useState(0);

  const handleScroll = () => {
    const element = document.getElementById('counterSection');
    if (
      element &&
      window.scrollY > element.offsetTop - window.innerHeight / 2 &&
      window.scrollY < element.offsetTop + element.offsetHeight
    ) {
      setStartCount(true);
      window.removeEventListener('scroll', handleScroll);
    } else {
      setStartCount(false);
      setRegulated(0);
    }
  };

  const startCountAnimation = () => {
    let counter1 = 0;
    const intervalId2 = setInterval(() => {
      counter1 += 1;
      setRegulated(counter1 > 14 ? 14 : counter1);
      if (counter1 >= 14) clearInterval(intervalId2);
    }, 500);

    let counter2 = 0;
    const intervalId3 = setInterval(() => {
      counter2 += 1;
      setOffices(counter2 > 30 ? 30 : counter2);
      if (counter2 >= 30) clearInterval(intervalId3);
    }, 500);

    let counter3 = 0;
    const intervalId4 = setInterval(() => {
      counter3 += 100;
      setInstruments(counter3 > 2500 ? 2500 : counter3);
      if (counter3 >= 2500) clearInterval(intervalId4);
    }, 350);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (startCount) startCountAnimation();
  }, [startCount]);

  return (
    <section id='counterSection' className='flex flex-wrap items-center justify-center gap-20 py-20 sm:px-6 sm:py-24 lg:px-8 bg-[#ececec81]'>
      <div className="flex flex-col items-center w-full max-w-[200px]">
        <p className="text-base mb-5 text-gray-400 font-semibold">Most Regulated</p>
        <h2 className="text-8xl font-medium text-gray-600">
          {regulated}
          <span className='text-3xl mb-6 text-gray-500'>+</span>
        </h2>
      </div>
      <div className="flex flex-col items-center w-full max-w-[200px]">
        <p className="text-base mb-5 text-gray-400 font-semibold">Offices & Branches</p>
        <h2 className="text-8xl font-medium text-gray-600">
          {offices}
          <span className='text-3xl mb-6 text-gray-500'>+</span>
        </h2>
      </div>
      <div className="flex flex-col items-center w-full max-w-[200px]">
        <p className="text-base mb-5 text-gray-400 font-semibold">Products</p>
        <h2 className="text-8xl font-medium text-gray-600">
          {instruments}
          <span className='text-3xl mb-6 text-gray-500'>+</span>
        </h2>
      </div>
    </section>
  );
};

export default AutoCount;

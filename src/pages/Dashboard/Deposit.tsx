import { FaStripe } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BsBank, BsWechat } from 'react-icons/bs';
import { FaPaypal } from 'react-icons/fa';
import { useState } from 'react';
import { TbInfoSquareRoundedFilled } from 'react-icons/tb';
import { Link } from 'react-router-dom';

export default function Deposit() {
  const [showNotAvailable, setShowNotAvailable] = useState(false);

  const notAvailable = () => {
    setShowNotAvailable(true);
    setTimeout(() => {
      setShowNotAvailable(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-sm mx-auto mt-5 p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Funding Method
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-3">
        Connect with one of our available payment providers.
      </p>

      {showNotAvailable && (
        <div className="flex items-center p-4 mb-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-100 dark:bg-gray-800 dark:text-yellow-400 dark:border-yellow-400">
          <TbInfoSquareRoundedFilled className="flex-shrink-0 inline w-4 h-4 me-3" />
          <p>Payment method not available</p>
        </div>
      )}
      <ul className="my-4 space-y-3 font-palanquin">
        <li>
          <a
            href="#"
            onClick={notAvailable}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            <FcGoogle className="text-3xl" />
            <span className="flex-1 ms-3">Google Pay </span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={notAvailable}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            <FaStripe className="text-3xl text-purple-600" />
            <span className="flex-1 ms-3">Stripe Payments</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={notAvailable}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            <FaPaypal className="text-3xl text-blue-600" />
            <span className="flex-1 ms-3">PayPal</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            onClick={notAvailable}
            className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
          >
            <BsWechat className="text-3xl text-lime-400" />
            <span className="flex-1 ms-3">WeChat Pay</span>
          </a>
        </li>

        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Exclusive For Users In Africa
        </p>
        <Link
          to="/dashboard/deposit/bankTransfer"
          className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white"
        >
          <BsBank className="text-3xl text-gray-400" />
          <span className="flex-1 ms-3 whitespace-nowrap">Direct Bank Transfer</span>
        </Link>
      </ul>
    </div>
  );
}

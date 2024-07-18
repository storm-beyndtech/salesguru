import { contextData } from '@/context/AuthContext';
import { useEffect, useRef, useState } from 'react';
import s from '../pages/login/Login.module.css';
import PageLoader from './PageLoader';
import { TbInfoSquareRounded } from 'react-icons/tb';
import { BiSolidCopy } from 'react-icons/bi';

export default function DepositForm() {
  const [rate, setRate] = useState(1650);
  const [virtualAccount, setVirtualAccount] = useState({
    accountName: '',
    accountNumber: '',
    bankName: '',
  });
  const [amountInNaira, setAmountInNaira] = useState(0);
  const [amount, setAmount] = useState(1);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const { user } = contextData();
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const form = useRef<HTMLFormElement>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setAmountInNaira(Number(e.target.value) * rate);
  };

  const fetchUtils = async () => {
    setFetching(true);

    try {
      const res = await fetch(`${url}/utils`);
      const data = await res.json();

      if (res.ok) {
        setRate(data.rate);
        setAmountInNaira(data.rate);
        setVirtualAccount(data.virtualAccount);
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      setError('Error Fetching Rate');
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchUtils();
  }, []);

  const sendDeposit = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (amount < 1) return setError('The minimum transfer amount is $1');

    try {
      setLoading(true);
      const res = await fetch(`${url}/deposits`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user._id, amount, amountInNaira }),
      });

      const data = await res.json();

      if (res.ok) setSuccess(data.message);
      else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipBoard = async (copyMe: string) => {
    await navigator.clipboard.writeText(copyMe);
    setCopySuccess(true);
    setTimeout(() => {
      setCopySuccess(false);
    }, 3000);
  };

  if (fetching) return <PageLoader />;

  return (
    <section className="mx-auto max-w-4xl mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
      <form
        ref={form}
        className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
        onSubmit={sendDeposit}
      >
        <h2 className="text-xl w-fit mb-10 mx-auto font-medium font-krub text-gray-900 dark:text-white">
          Bank Deposit
        </h2>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="amount" className="dbFormLabel">
              Amount In USD
            </label>
            <input
              type="number"
              id="amount"
              className="dbFormInput"
              placeholder="1"
              required
              onChange={handleAmountChange}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="amountInNaira" className="dbFormLabel">
              Amount In Naira
            </label>
            <input
              type="text"
              id="amountInNaira"
              className="dbFormInput"
              value={amountInNaira}
              readOnly
            />
          </div>
        </div>

        <h2 className="text-xl flex items-center w-fit my-10 mx-auto font-medium font-krub text-gray-900 dark:text-white">
          Virtual Account Details
          <BiSolidCopy
            className={`size-4 ml-3 ${
              copySuccess ? 'text-blue-500' : 'text-gray-300 dark:text-gray-700'
            }`}
          />
        </h2>

        <div className="mb-6 grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="accountName" className="dbFormLabel">
              Account Name
            </label>
            <input
              type="text"
              id="accountName"
              readOnly
              value={virtualAccount.accountName}
              onClick={() => copyToClipBoard(virtualAccount.accountName)}
              className="dbFormInput"
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label htmlFor="accountNumber" className="dbFormLabel">
              Account Number
            </label>

            <input
              type="text"
              id="accountNumber"
              readOnly
              value={virtualAccount.accountNumber}
              onClick={() => copyToClipBoard(virtualAccount.accountNumber)}
              className="dbFormInput"
            />
          </div>

          <div className="col-span-2">
            <label htmlFor="bankName" className="dbFormLabel">
              Name Of Bank
            </label>
            <input
              type="text"
              id="bankName"
              readOnly
              value={virtualAccount.bankName}
              onClick={() => copyToClipBoard(virtualAccount.bankName)}
              className="dbFormInput"
            />
          </div>
        </div>

        <div className="flex items-center my-8 text-sm text-gray-400">
          <TbInfoSquareRounded className="flex-shrink-0 inline w-6 h-6 me-3" />
          <p>
            The name used while funding must correspond with your profile. Only
            click on 'Deposit Now' after funding.
          </p>
        </div>

        <button
          type="submit"
          className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
        >
          {loading ? 'Submitting...' : 'Deposit now'}
        </button>
        {error && <p className={s.formError}>{error}</p>}
        {success && <p className={s.formSuccess}>{success}</p>}
      </form>
    </section>
  );
}

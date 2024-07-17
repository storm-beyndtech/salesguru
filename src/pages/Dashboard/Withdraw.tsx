import { contextData } from '@/context/AuthContext';
import { useEffect, useRef, useState } from 'react';
import s from '../login/Login.module.css';
import PageLoader from '@/components/PageLoader';


export default function Withdraw() {
  const [rate, setRate] = useState(1650);
  const [amount, setAmount] = useState(0);
  const [amountInNaira, setAmountInNaira] = useState(1650);
  const [fullName, setFullName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [bankName, setBankName] = useState('');
  const [fetching, setFetching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const { user } = contextData();
  const form = useRef<HTMLFormElement>(null);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
    setAmountInNaira(Number(e.target.value) * rate);
  };

  const fetchRate = async () => {
    setFetching(true);
    try {
      const res = await fetch(`${url}/utils`);
      const data = await res.json();

      if (res.ok) {
        setRate(data.rate);
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
    fetchRate();
  }, []);

  const sendWithdraw = async (e: any) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (amount < 50) return setError('Minimum amount is $50');
    if (fullName.length < 5)
      return setError('Full name must be at least 5 characters');
    if (accountNumber.length < 5)
      return setError('Account number must be at least 5 characters');
    if (bankName.length < 3) return setError('Invalid Bank Name');

    try {
      setLoading(true);
      const res = await fetch(`${url}/withdrawals`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: user._id,
          amount,
          amountInNaira,
          fullName,
          bankName,
          accountNumber,
        }),
      });

      const data = await res.json();

      if (res.ok) setSuccess(data.message);
      else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
      form.current?.reset()
    }
  };

  if (fetching) return <PageLoader />;

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        Bank Withdrawal
      </h2>

      <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
        <form
          ref={form}
          className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
          onSubmit={sendWithdraw}
        >
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Amount In USD
              </label>
              <input
                type="text"
                id="amount"
                className="dbFormInput"
                placeholder="50"
                required
                onChange={handleAmountChange}
                min={50}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="amountInNaira"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                {' '}
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

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                className="dbFormInput"
                placeholder="Bonnie Green"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="accountNumber"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Account Number
              </label>
              <input
                type="text"
                id="accountNumber"
                className="dbFormInput"
                placeholder="0061380431"
                required
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="bankName"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Name Of Bank
              </label>
              <input
                type="text"
                id="bankName"
                className="dbFormInput"
                placeholder="Moniepoint"
                required
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
          >
            {loading ? 'Submitting...' : 'Withdraw'}
          </button>
          {error && <p className={s.formError}>{error}</p>}
          {success && <p className={s.formSuccess}>{success}</p>}
        </form>
      </div>
    </div>
  );
}

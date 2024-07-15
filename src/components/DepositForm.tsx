import { contextData } from '@/context/AuthContext';
import { useEffect, useRef, useState } from 'react';
import s from '../pages/login/Login.module.css';

export default function DepositForm() {
  const [rate, setRate] = useState(1650);
  const [amountInNaira, setAmountInNaira] = useState(1650);
  const [cardNumber, setCardNumber] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { user } = contextData();
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const form = useRef<HTMLFormElement>(null);

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formattedValue = value
      .replace(/[^0-9]/g, '') // Remove non-numeric characters
      .slice(0, 4) // Limit to 4 characters
      .replace(/(\d{2})(\d{1,2})/, '$1/$2'); // Insert slash after the first two digits

    setCardExpiry(formattedValue);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    setAmountInNaira(Number(e.target.value) * rate);
  }

  const fetchRate = async () => {
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
    }
  };

  useEffect(() => {
    fetchRate();
  }, []);




  const submitCardDetails = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (amountInNaira < 0.1) return setError("Minimum amount is $1")
    if (cardNumber.length < 10) return setError("card number must be at least 10 characters")
    if (nameOnCard.length < 5) return setError("Invalid card name")
    if (cardExpiry.length < 5) return setError("Invalid card expiry date")
    if(cvv.length < 3) return setError("Invalid card cvv, 3 digits expected")

    const [month, year] = cardExpiry.split('/');

    const cardDetails = {
      amount: amountInNaira,
      name: nameOnCard,
      cardNumber,
      cvv,
      expiryMonth: month,
      expiryYear: year,
      id: user._id,
      rate
    };

    try {
      setLoading(true);
      const res = await fetch(`${url}/deposits`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardDetails),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
      } else {
        throw new Error(data.message);
      }
    } catch (error:any) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false)
      if(form.current) form.current.reset();
    }
  };

  return (
    <div className="mx-auto max-w-4xl">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
        Card Deposit
      </h2>

      <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
        <form
          ref={form}
          className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
          onSubmit={submitCardDetails}
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="1"
                required
                onChange={handleAmountChange}
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                value={amountInNaira}
                readOnly
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="full_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Full name (as displayed on card)
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Bonnie Green"
                required
                value={nameOnCard}
                onChange={(e) => setNameOnCard(e.target.value)}
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-number-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Card number
              </label>
              <input
                type="text"
                id="card-number-input"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="xxxx-xxxx-xxxx-xxxx"
                required
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="card-expiration-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                Card expiration
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                  <svg
                    className="h-4 w-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  datepicker-format="mm/yy"
                  id="card-expiration-input"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="12/23"
                  required
                  value={cardExpiry}
                  onChange={handleExpiryDateChange}
                  maxLength={5}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="cvv-input"
                className="relative mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                CVV
              </label>
              <input
                type="number"
                id="cvv-input"
                aria-describedby="helper-text-explanation"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="•••"
                required
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
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
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import s from '../login/Login.module.css';

export default function ManageProducts() {
  const [transactions, setTransactions] = useState<ITransaction[] | null>(null);
  const [btnLoadProcess, setBtnLoadProcess] = useState({
    loading: false,
    id: '',
    success: false,
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const tableTitle = [
    'User Email',
    'Product Name',
    'Quantity',
    'Buy Price',
    'Sell Price',
    'Date',
    'Action',
  ];

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${url}/products/`);
      const data = await res.json();

      if (res.ok) setTransactions(data);
      else throw new Error(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [success]);

  const getColumnWidth = (str: string, defaultWidth: number = 100) => {
    return str.length > 15 ? 200 : defaultWidth;
  };

  const resolveProduct = async (e: ITransaction) => {
    setError(null);

    try {
      setBtnLoadProcess({loading: true, success: false, id: e._id});
      const res = await fetch(`${url}/products/${e._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message)
        setBtnLoadProcess({loading: false, success: true, id: e._id});
      } else throw new Error(data.message);
    } catch (error: any) {
      setError(error.message);
      console.log(error);
    } finally {
      setTimeout(() => {
        setBtnLoadProcess({loading: false, success: false, id: e._id});
      }, 2000);
    }
  };

  return transactions ? (
    <div className="relative overflow-x-auto rounded-[6px]">
      {error && <p className={s.formError}>{error}</p>}
      {success && <p className={s.formSuccess}>{success}</p>}
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            {tableTitle.map((title) => (
              <th
                scope="col"
                className="px-6 py-3 whitespace-nowrap"
                style={{ minWidth: getColumnWidth(title) }}
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: ITransaction, i: number) => (
            <tr className="bg-white dark:bg-gray-800" key={i}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {transaction.user.email}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {transaction.productData.name}
              </th>
              <td className="px-6 py-4 max-sm:text-[10px] min-w-28">
                {transaction.productData.quantity}
              </td>
              <td className="px-6 py-4">
                ${transaction.productData.buyPrice.toFixed(2)}
              </td>
              <td className="px-6 py-4">
                ${transaction.productData.sellPrice.toFixed(2)}
              </td>
              <td className="px-6 py-4">
                {new Date(transaction.date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4">
                {transaction.status === 'pending' && (
                  <button
                    onClick={() => resolveProduct(transaction)}
                    className="font-medium text-blue-600 dark:text-blue-500"
                  >
                    {btnLoadProcess.id === transaction._id &&
                    btnLoadProcess.loading
                      ? 'loading...'
                      : btnLoadProcess.id === transaction._id &&
                          btnLoadProcess.success
                        ? 'Done'
                        : 'Close'}
                  </button>
                )}
                {transaction.status === 'success' && (
                  <button className="font-medium text-blue-600 dark:text-blue-500">
                    Closed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : (
    <p className="text-base font-semibold text-gray-900 dark:text-[#c7ffb3]">
      No products yet
    </p>
  );
}

interface User {
  id?: string;
  email?: string;
  name?: string;
}

interface ProductData {
  name: string;
  buyPrice: number;
  sellPrice: number;
  quantity: number;
}

interface ITransaction {
  _id: string;
  type: string;
  user: User;
  status: 'pending' | 'success' | 'failed';
  amount: number;
  date: string;
  productData: ProductData;
}

import { contextData } from "@/context/AuthContext";
import { useEffect, useState } from "react";

export default function Purchased() {
  const [transactions, setTransactions] = useState<ITransaction[] | null>(null);
  const { user } = contextData();
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;

  const fetchUserProducts = async () => {
    try {
      const res = await fetch(`${url}/products/user/${user._id}`);
      const data = await res.json();

      if (res.ok) setTransactions(data);
      else throw new Error(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserProducts();
  }, []);

  const getColumnWidth = (str: string, defaultWidth: number = 100) => {
    return str.length > 15 ? 200 : defaultWidth;
  };

  return (
    transactions ? 
    <div className="relative overflow-x-auto rounded-[6px]">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700">
        <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3" style={{ minWidth: getColumnWidth("Product Name") }}>
              Product Name
            </th>
            <th scope="col" className="px-6 py-3" style={{ minWidth: getColumnWidth("Quantity") }}>
              Quantity
            </th>
            <th scope="col" className="px-6 py-3" style={{ minWidth: getColumnWidth("Buy Price") }}>
              Buy Price
            </th>
            <th scope="col" className="px-6 py-3" style={{ minWidth: getColumnWidth("Sell Price") }}>
              Sell Price
            </th>
            <th scope="col" className="px-6 py-3" style={{ minWidth: getColumnWidth("Date") }}>
              Date
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction: ITransaction, i: number) => (
            <tr className="bg-white dark:bg-gray-800" key={i}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div> : 
    <p className="text-base font-semibold text-gray-900 dark:text-[#c7ffb3]">No products yet</p>
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
  type: string;
  user: User;
  status: 'pending' | 'success' | 'failed';
  amount: number;
  date: string; 
  productData: ProductData;
}

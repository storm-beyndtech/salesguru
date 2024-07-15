import { useState } from 'react';
import { HiMinusSmall, HiOutlinePlusSmall } from 'react-icons/hi2';
import { contextData } from "@/context/AuthContext";
import s from '../pages/login/Login.module.css'
import { useNavigate } from 'react-router-dom';

type ProductProps = {
  name: string;
  imgUrl: string;
  desc: string;
  buyPrice: number;
  sellPrice: number;
  quantity: number;
  showMore: boolean;
};

export default function Products({ products }: { products: ProductProps[] }) {
  const navigate = useNavigate()
  const url = import.meta.env.VITE_REACT_APP_SERVER_URL;
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [currentDesc, setCurrentDesc] = useState({})
  const { user } = contextData()
  const [productList, setProductList] = useState<ProductProps[]>(() =>
    products.map((product) => ({
      ...product,
      quantity: 10,
      buyPrice: product.buyPrice * 10,
      sellPrice: product.sellPrice * 10,
      showMore: false,
    }))
  );

  const handleToggleShowMore = (desc: string) => {
    setProductList((prevList) =>
      prevList.map((product) =>
        product.desc === desc
          ? { ...product, showMore: !product.showMore }
          : product
      )
    );
  };

  const handleQuantityChange = (desc: string, delta: number) => {
    setProductList((prevList) =>
      prevList.map((product) =>
        product.desc === desc
          ? {
              ...product,
              quantity: product.quantity + delta < 10 ? 10 : product.quantity + delta,
              buyPrice: product.buyPrice / product.quantity * (product.quantity + delta < 10 ? 10 : product.quantity + delta),
              sellPrice: product.sellPrice / product.quantity * (product.quantity + delta < 10 ? 10 : product.quantity + delta)
            }
          : product
      )
    );
  };

  const purchaseProduct = async (product: ProductProps) => {
    setCurrentDesc(product.desc);
    setError(null); setSuccess(null); setLoading(false);

    if(!user) return navigate("/login");

    if (user.balance < product.buyPrice) return setError('Insufficient balance');

    try {
      setLoading(true);
      const response = await fetch(`${url}/products/user/${user._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to purchase product');
      }

      setSuccess('Product purchased successfully');
    } catch (error: any) {
      setError(error.message);
    } finally { 
      setLoading(false);
     }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
      <div className="my-4 grid gap-4 max-sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {productList.map((product) => (
          <div
            key={product.desc}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="max-sm:h-auto w-full">
              <img
                className="mx-auto w-full h-full rounded-xl"
                src={product.imgUrl}
                alt={product.name}
              />
            </div>

            <div className="pt-6">
              <a
                href="#"
                className="text-base font-medium font-krub text-gray-900 hover:underline dark:text-white/70"
              >
                {product.name}
              </a>

              <div className="mt-4 flex items-center justify-between gap-1">
                <div>
                  <p className="text-xl font-medium font-rubik text-gray-900 dark:text-white">
                    ${product.buyPrice.toFixed(2)}
                  </p>
                  <p className="text-xs">Buy Price</p>
                </div>

                <div>
                  <p className="text-xl font-medium font-rubik text-gray-900 dark:text-white">
                    ${product.sellPrice.toFixed(2)}
                  </p>
                  <p className="text-xs">Sell Price</p>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <button
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 rounded-lg border border-gray-200 text-xs px-3 py-3 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-600"
                    onClick={() => handleToggleShowMore(product.desc)}
                  >
                    View More
                  </button>
                </div>

                <div>
                  <div className="relative flex items-center max-w-[8rem]">
                    <button
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-2 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      onClick={() => handleQuantityChange(product.desc, -1)}
                      disabled={product.quantity === 10}
                    >
                      <HiMinusSmall />
                    </button>

                    <input
                      className="bg-gray-50 border-x-0 border-y border-gray-300 h-10 text-center text-gray-900 text-sm block w-full py-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      min={10}
                      value={product.quantity}
                      readOnly
                    />
                    <button
                      type="button"
                      className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-2 h-10 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                      onClick={() => handleQuantityChange(product.desc, 1)}
                    >
                      <HiOutlinePlusSmall />
                    </button>
                  </div>
                </div>
              </div>

              {product.showMore && (
                <p className="font-rubik py-8">{product.desc}</p>
              )}

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4"
                onClick={() => purchaseProduct(product)}
              >
                {(loading && currentDesc === product.desc) ? 'Submitting...' : 'Buy And Resell'}
              </button>
              {(error && currentDesc === product.desc) && <p className={s.formError}>{error}</p>}
              {(success && currentDesc === product.desc) && <p className={s.formSuccess}>{success}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

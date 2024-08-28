import { Link } from 'react-router-dom';
import miniLogo from '../assets/smallLogo.png';
import balBg from '../assets/balBg.png';
import { formatBalance } from '@/lib/utils';

interface BalanceProps {
  type: string;
  user: {
    balance: number;
    deposit: number;
    interest: number;
    bonus: number;
    card: string;
    username: string;
  };
}

export default function Balance({ type, user }: BalanceProps) {
  const handleCopy = async (textToCopy: string) => {
    try {
      await navigator.clipboard.writeText(
        `https://www.salesgurucommunity.com/register/${textToCopy}`,
      );
      alert('Text copied to clipboard');
    } catch (err) {
      console.log('Failed to copy text: ', err);
    }
  };

  return (
    <div className="p-2 bg-gray-900/10 dark:bg-gray-800 rounded-3xl w-[360px] max-sm:w-full">
      <div className='bg-gray-800 rounded-3xl w-full'>
        <div className="w-full bg-contain p-5 flex flex-col" style={{ backgroundImage: `url(${balBg})` }}>
          <div className='flex justify-between items-center'>
            <p className="text-gray-400 font-semibold font-krub text-sm">
              Balance
            </p>

            <img className="w-11" src={miniLogo} alt="logo" />
          </div>
          

            <h1 className="text-4xl font-krub font-[600] text-white my-4">
              <span className="text-xl text-gray-400 font-[Courier]">$</span>
              {type === 'balance'
                ? formatBalance(user.balance)
                : type === 'bonus'
                  ? formatBalance(user?.bonus)
                  : 0}
            </h1>



          <div className="flex justify-between">
            
            <Link
              to="/dashboard/withdrawal"
              className="bg-red-500/5 py-1.5 px-3 text-red-600 font-krub font-semibold rounded-full text-xs"
            >
              Withdraw
            </Link>

            {type === 'bonus' ? (
              <div className="bg-blue-500/5 py-1.5 px-3 backdrop-blur-lg text-blue-600 font-krub font-semibold rounded-full text-xs" onClick={() => handleCopy(user.username)}>
                Copy Referral Code
              </div>
            ) : (
              <Link
                to="/dashboard/deposit"
                className="bg-blue-500/5 py-1.5 px-3 backdrop-blur-lg text-blue-600 font-krub font-semibold rounded-full text-xs"
              >
                + Add Money
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

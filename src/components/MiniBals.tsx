import { contextData } from '@/context/AuthContext';
import { formatBalance } from '@/lib/utils';

export default function MiniBals() {
  const { user } = contextData();

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex flex-col gap-2 sm:gap-17 p-5 !rounded-3xl bg-gray-50 dark:bg-gray-800 border-l border-l-lime-300">
        <p className="text-base font-medium text-gray-400 dark:text-gray-500">
          Deposit
        </p>

        <h2 className="text-2xl sm:text-4xl font-medium text-gray-700 dark:text-[#f0fff8]">
          <span className="font-[Courier] font-normal text-lg">$</span>
          {formatBalance(user?.deposit)}
        </h2>
      </div>

      <div className="flex flex-col gap-2 sm:gap-17 p-5 !rounded-3xl bg-gray-50 dark:bg-gray-800 border-l border-l-sky-300">
        <p className="text-base font-medium text-gray-400 dark:text-gray-500">
          Interest
        </p>

        <h2 className="text-2xl sm:text-4xl font-medium text-gray-700 dark:text-[#f0fff8]">
          <span className="font-[Courier] font-normal text-lg">$</span>
          {formatBalance(user?.interest)}
        </h2>
      </div>
    </div>
  );
}

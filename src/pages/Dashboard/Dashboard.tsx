import Balance from "@/components/balance/Balance";
import ChartOne from "@/components/ChartOne";
import ChartThree from "@/components/ChartThree";
import MiniBals from "@/components/MiniBals";
import NoDepositAlert from "@/components/NoDepositAlert";
import PageLoader from "@/components/PageLoader";
import Products from "@/components/Products";
import UsdChart from "@/components/UsdChart";
import { contextData } from "@/context/AuthContext";
import { products } from "@/lib/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = contextData()
  const navigate = useNavigate()
  const combinedBalance = user.deposit + user.trade + user.interest + user.bonus
  const balancePlusWithdraw = combinedBalance + user.withdraw

  useEffect(() => {
    if(!user) return navigate('/login')

    if(user && user.fullName === '') return navigate('/dashboard/updateProfile')
  }, [])

  if(!user) return <PageLoader />



  return (
    <>
      {balancePlusWithdraw === 0 && <NoDepositAlert />}

      <div className="w-full flex gap-5 my-5 max-[900px]:flex-col">
        <div className="flex-none">
          <Balance type="balance" user={user}/>
        </div>
        <div className="flex-auto shadow-1">
          <UsdChart />
        </div>
      </div>

      <div className="flex items-center justify-center mb-4 rounded-[15px] p-1 shadow-1 bg-gray-50 dark:bg-gray-800">
        <Products products={products} />
      </div>

      <div className="w-full flex gap-5 my-4 max-[1100px]:flex-col mb-4">
        <div className="flex-auto">
          <ChartOne />
        </div>
        <div className="flex-none">
          <ChartThree />
        </div>
      </div>

      <MiniBals />
  </>
  )
}
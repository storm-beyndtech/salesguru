import AdminDepositCards from "@/components/AdminDepositCards";
import AdminTradeCards from "@/components/AdminTradesCard";
import AdminUserCards from "@/components/AdminUserCards";
import AdminWithdrawalCards from "@/components/AdminWithdrawalCards";
import ChartFour from "@/components/ChartFour";
import ChartOne from "@/components/ChartOne";
import ChartThree from "@/components/ChartThree";
import ChartTwo from "@/components/ChartTwo";

export default function Admin() {
  return (
    <>
    <AdminUserCards />
    <AdminDepositCards />
    <AdminWithdrawalCards />
    <AdminTradeCards />

      <div className="w-full flex gap-5 my-4 max-[1100px]:flex-col mb-4">
        <div className="flex-auto">
          <ChartOne />
        </div>
        <div className="flex-none">
          <ChartThree />
        </div>
      </div>

      <div className="w-full flex gap-5 my-4 max-[1100px]:flex-col mb-4">
        <div className="flex-auto">
          <ChartTwo />
        </div>
        <div className="flex-none">
          <ChartFour />
        </div>
      </div>
    </>
  )
}

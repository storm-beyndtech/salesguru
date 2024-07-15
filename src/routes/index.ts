import Bonus from "@/pages/Dashboard/Bonus";
import CardPayment from "@/pages/Dashboard/CardPayment";
import Deposit from "@/pages/Dashboard/Deposit";
import KYC from "@/pages/Dashboard/KYC";
import MFA from "@/pages/Dashboard/MFA";
import Profile from "@/pages/Dashboard/Profile";
import Purchased from "@/pages/Dashboard/Purchased";
import Ranking from "@/pages/Dashboard/Ranking";
import Settings from "@/pages/Dashboard/Settings";
import Transactions from "@/pages/Dashboard/Transactions";
import Withdraw from "@/pages/Dashboard/Withdraw";

const coreRoutes = [
  {
    path: '/dashboard/products',
    title: 'Products',
    component: Purchased,
  },
  {
    path: '/dashboard/deposit/cardPayment',
    title: 'Card Payment',
    component: CardPayment,
  },
  {
    path: '/dashboard/deposit',
    title: 'Deposit',
    component: Deposit,
  },
  {
    path: '/dashboard/withdrawal',
    title: 'Withdrawal',
    component: Withdraw,
  },
  {
    path: '/dashboard/transactions',
    title: 'Transactions',
    component: Transactions,
  },
  {
    path: '/dashboard/profile',
    title: 'Profile',
    component: Profile,
  },
  {
    path: '/dashboard/ranking',
    title: 'Ranking',
    component: Ranking,
  },
  {
    path: '/dashboard/bonus',
    title: 'Bonus',
    component: Bonus,
  },
  {
    path: '/dashboard/2fa',
    title: '2FA',
    component: MFA,
  },
  {
    path: '/dashboard/kyc',
    title: 'KYC',
    component: KYC,
  },
  {
    path: '/dashboard/settings',
    title: 'Settings',
    component: Settings,
  },
];

const routes = [...coreRoutes];
export default routes;

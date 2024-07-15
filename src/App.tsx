import { Route, Routes, Navigate  } from 'react-router-dom';

//importing pages
import Home from './pages/Home';
import Contact from './pages/Contact';

import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PasswordReset from './pages/passwordReset/PasswordReset';
import PageLoader from './components/PageLoader';
import { contextData } from './context/AuthContext'
import UpdateProfile from './components/UpdateProfile';
import routes from './routes';
import Dashboard from './pages/Dashboard/Dashboard';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Admin from './pages/Admin/Admin';
import AdminLayout from './components/Layouts/AdminLayout';
import ActiveUsers from './pages/Admin/ActiveUsers';
import ManageTrades from './pages/Admin/ManageTrades';
import BannedUsers from './pages/Admin/BannedUsers';
import ApprovedDeposits from './pages/Admin/ApprovedDeposits';
import PendingDeposits from './pages/Admin/PendingDeposits';
import RejectedDeposits from './pages/Admin/RejectedDeposits';
import ApprovedWithdrawals from './pages/Admin/ApprovedWithdrawals';
import PendingWithdrawals from './pages/Admin/PendingWithdrawals';
import RejectedWithdrawals from './pages/Admin/RejectedWithdrawals';
import Settings from './pages/Admin/Settings';
import Kyc from './pages/Admin/Kyc';
import About from './pages/About';

function App() {
  const { fetching, user } = contextData();



  if (fetching) return ( <PageLoader /> )
  

  if (!fetching) return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/password-reset/:page" element={<PasswordReset />} />


        {user ? (
          <>
            {user.isAdmin ? (
              <>
              <Route path="/admin/" element={<AdminLayout />}>
                <Route index element={<Admin />} />
                <Route path="/admin/home" element={<Admin />} />
                <Route path="/admin/active-users" element={<ActiveUsers />} />
                <Route path="/admin/trades" element={<ManageTrades />} />
                <Route path="/admin/banned-users" element={<BannedUsers />} />
                <Route path="/admin/approved-deposits" element={<ApprovedDeposits />} />
                <Route path="/admin/pending-deposits" element={<PendingDeposits />} />
                <Route path="/admin/rejected-deposits" element={<RejectedDeposits />} />
                <Route path="/admin/approved-withdrawals" element={<ApprovedWithdrawals />} />
                <Route path="/admin/pending-withdrawals" element={<PendingWithdrawals />} />
                <Route path="/admin/rejected-withdrawals" element={<RejectedWithdrawals />} />
                <Route path="/admin/settings" element={<Settings />} />
                <Route path="/admin/kyc" element={<Kyc />} />
              </Route>

              <Route path="/login" element={<Navigate to="/admin/" />} />
              <Route path="/register" element={<Navigate to="/admin/" />} />
              <Route path="/register/:ref" element={<Navigate to="/admin/" />} />
              </>
            ) : (
              <Route path="/admin/*" element={<Navigate to="/dashboard/"/>}/>
            )}


            {!user.isAdmin ? (
              <>
                <Route path="/dashboard/" element={<DefaultLayout />}>
                  {user.fullName === "" ? (
                    <Route path="/dashboard/updateProfile" element={<UpdateProfile />} />
                  ) : (
                    <Route path="/dashboard/home" element={<Dashboard />} />
                  )}

                  <Route index element={<Dashboard />} />
                  <Route path="/dashboard/home" element={<Dashboard />} />
                  
                  {routes.map((route, i) => 
                    <Route key={i} path={route.path} element={<route.component />} />
                  )}
                </Route>

                <Route path="/login" element={<Navigate to="/dashboard/" />} />
                <Route path="/register" element={<Navigate to="/dashboard/" />} />
                <Route path="/register/:ref" element={<Navigate to="/dashboard/" />} />
              </>
            ) : (
              <Route path="/dashboard/*" element={<Navigate to="/admin/"/>}/>
            )}
          </>
        ): (
          <>
            <Route path="/dashboard/*" element={<Navigate to="/login" />} />
            <Route path="/admin/*" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/:ref" element={<Register />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/password-reset/:page" element={<PasswordReset />} />
          </>
        )}
  </Routes>
  )
}

export default App;
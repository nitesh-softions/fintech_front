import React from "react";
import { Navigate } from "react-router-dom";

// // Profile
import UserProfile from "../pages/Authentication/user-profile";

// // Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

// // Dashboard
import DashboardPage from "../pages/Dashboard/index";
import AddMoney from "../pages/dashboard/addmoney";
import GeoPayWallet from "../pages/Dashboard/geoPayWallet";
import ViewPayment from "../pages/Dashboard/viewPayment";
import ShowCode from "../pages/Dashboard/showCode";

import TransactionPage from "../pages/transactionPage";
import NotificationPage from "../pages/notificationPage";
import StatisticsPage from "../pages/statisticsPage";
import SettingsPage from "../pages/settingsPage";
import DirectPayCompanies from "../pages/Dashboard/directPayCompanies";
import TransferToMobileMoney from "../pages/Dashboard/transferToMobileMoney";
import InternationalAirtime from "../pages/Dashboard/internationalAirtime";
import TransferMoneyToBank from "../pages/Dashboard/transferMoneyToBank";
import AboutUs from "../pages/aboutUs";
import ContactUs from "../pages/contactUs";

const authProtectedRoutes = [
  // Dashboard
  { path: "/dashboard", component: <DashboardPage /> },
  { path: "/dashboard/add-money", component: <AddMoney /> },
  { path: "/dashboard/geopay-wallet", component: <GeoPayWallet /> },
  { path: "/dashboard/view-payment", component: <ViewPayment /> },
  { path: "/dashboard/show-code", component: <ShowCode /> },
  { path: "/dashboard/direct-pay-companies", component: <DirectPayCompanies /> },
  { path: "/dashboard/transfer-to-mobile-money", component: <TransferToMobileMoney /> },
  { path: "/dashboard/international-airtime", component: <InternationalAirtime /> },
  { path: "/dashboard/transfer-money-to-bank", component: <TransferMoneyToBank /> },



  { path: "/transaction", component: <TransactionPage /> },
  { path: "/notification", component: <NotificationPage /> },
  { path: "/statistics", component: <StatisticsPage /> },
  { path: "/settings", component: <SettingsPage /> },
  
  // About Us
  { path: "/aboutus", component: <AboutUs /> },

  // Contact Us
  { path: "/contactus", component: <ContactUs /> },
  
  //profile
  { path: "/profile", component: <UserProfile /> },

  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPwd /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };

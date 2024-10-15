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
import AddMoney from "../pages/Dashboard/addMoney";
import EziPayWallet from "../pages/Dashboard/eziPayWallet";
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
  { path: "/dashboard/addmoney", component: <AddMoney /> },
  { path: "/dashboard/ezipaywallet", component: <EziPayWallet /> },
  { path: "/dashboard/viewpayment", component: <ViewPayment /> },
  { path: "/dashboard/showcode", component: <ShowCode /> },
  { path: "/dashboard/directpaycompanies", component: <DirectPayCompanies /> },
  { path: "/dashboard/transfertomobilemoney", component: <TransferToMobileMoney /> },
  { path: "/dashboard/internationalairtime", component: <InternationalAirtime /> },
  { path: "/dashboard/transfermoneytobank", component: <TransferMoneyToBank /> },



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

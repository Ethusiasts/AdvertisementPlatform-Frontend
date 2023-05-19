import Home from "./pages/Home";
// import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/authentication/signIn";
import SignUp from "./pages/authentication/signUp";
import Detail from "./pages/detail_page/Detail";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyAccount from "./pages/myAccount";
import Advertisement from "./pages/advertisement/advertisement";
import Proposal from "./pages/proposal/proposal";
import ProfilePage from "./pages/profile/profilepage";
import CreateBillboard from "./pages/advertisement/createBillboard";
import CreateTvAd from "./pages/advertisement/createTvAd";
import CreateMagazineAd from "./pages/advertisement/createMagazineAd";
import CreateRadioAd from "./pages/advertisement/createRadioAd";
import AdminDashboard from "./pages/admin/adminDashboard";
import UserControl from "./pages/admin/userControl";
import HelpAndSupport from "./pages/admin/helpAndSupport";
import Contract from "./pages/contract/contract";
import ContactUs from "./pages/contactUs/contactUs";
import Landing from "./pages/Landing/Landing";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Landing",
    element: <Landing />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Myaccount",
    element: <MyAccount />,
  },

  {
    path: "/Advertisement",
    element: <Advertisement />,
    children: [
      {
        path: "CreateBillboard",
        element: <CreateBillboard />,
      },
      {
        path: "CreateTvAd",
        element: <CreateTvAd />,
      },
      {
        path: "CreateMagazineAd",
        element: <CreateMagazineAd />,
      },
      {
        path: "CreateRadioAd",
        element: <CreateRadioAd />,
      },
    ]
  },
  {
    path: "/Proposal",
    element: <Proposal />,
  },
  {
    path: "/Contract",
    element: <Contract />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
  {
    path: "/AdminDashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/UserControl",
    element: <UserControl />,
  },
  {
    path: "/HelpAndSupport",
    element: <HelpAndSupport />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

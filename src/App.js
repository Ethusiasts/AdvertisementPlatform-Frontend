import Home from "./pages/Home";
// import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/authentication/signIn";
import SignUp from "./pages/authentication/signUp";
import Detail from "./pages/detail_page/Detail";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyAccount from "./pages/myAccount";
import Advertisement from "./pages/advertisement/advertisement";
import Proposal from "./pages/proposal/userProposal";
import CreateBillboard from "./pages/advertisement/createBillboard";
import CreateTvAd from "./pages/advertisement/createTvAd";
import CreateMagazineAd from "./pages/advertisement/createMagazineAd";
import CreateRadioAd from "./pages/advertisement/createRadioAd";
import AdminDashboard from "./pages/admin/adminDashboard";
import UserControl from "./pages/admin/userControl";
import HelpAndSupport from "./pages/admin/helpAndSupport";
import Contract from "./pages/contract/userContract";
import ContactUs from "./pages/contactUs/contactUs";
import Landing from "./pages/Landing/Landing";
import EditProfilePage from "./pages/profile/editProfilePage";
import ProfilePage from "./pages/profile/profilePage";
import ForgotPassword from "./pages/authentication/forgotPassword";
import ResetPassword from "./pages/authentication/resetPassword";
import UserStepper from "./pages/profile/userStepper";
import MediaAgencyStepper from "./pages/profile/mediaAgencyStepper";
import Dashboard from "./pages/billboardDashboard";
import BillboardDashboard from "./pages/billboardDashboard";
import MediaDashboard from "./pages/mediaDashboard";
import UserProposal from "./pages/proposal/userProposal";
import UserContract from "./pages/contract/userContract";
import BillboardProposal from "./pages/proposal/billboardProposal";
import BillboardContract from "./pages/contract/billboardContract";
import MediaProposal from "./pages/proposal/mediaProposal";
import MediaContract from "./pages/contract/mediaContract";
import Media from "./pages/medias/media";
import Billboard from "./pages/billboards/billboard";
const router = createBrowserRouter([

  // Onboarding
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Landing",
    element: <Landing />,
  },


  // Authentication
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },

  {
    path: "/UserStepper",
    element: <UserStepper />,
  },
  {
    path: "/MediaAgencyStepper",
    element: <MediaAgencyStepper />,
  },


  // User
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
    path: "/UserProposal",
    element: <UserProposal />,
  },
  {
    path: "/UserContract",
    element: <UserContract />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },


  // Billboard User
  {
    path: "/BillboardDashboard",
    element: <BillboardDashboard />,
  },
  {
    path: "/BillboardProposal",
    element: <BillboardProposal />,
  },
  {
    path: "/BillboardContract",
    element: <BillboardContract />,
  },
  {
    path: "/Billboard",
    element: <Billboard />,
  },


  // Media Agency
  {
    path: "/MediaDashboard",
    element: <MediaDashboard />,
  },
  {
    path: "/MediaProposal",
    element: <MediaProposal />,
  },
  {
    path: "/MediaContract",
    element: <MediaContract />,
  },
  {
    path: "/Media",
    element: <Media />,
  },

  // Admin
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



  // Profile
  {
    path: "/Profile",
    element: <ProfilePage />,
  },
  {
    path: "/EditProfile",
    element: <EditProfilePage />,
  },


]);
export default function App() {
  return <RouterProvider router={router} />;
}

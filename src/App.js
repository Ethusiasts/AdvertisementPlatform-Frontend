import Home from "./pages/Home";
import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/authentication/signIn";
import SignUp from "./pages/authentication/signUp";
import Cart from "./components/cart";
import BillboardDetail from "./pages/detail_page/billboardDetailPage";
import MediaDetail from "./pages/detail_page/mediaDetailPage";
import LandlordsBillboardDetail from "./pages/agencies_detail_page/landlordsBillboardDetailPage";
import AgenciesMediaDetail from "./pages/agencies_detail_page/agenciesMediaDetailPage";

import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import MyAccount from "./pages/myAccount";
import Advertisement from "./pages/advertisement/advertisement";
import Proposal from "./pages/proposal/userProposal";
import CreateBillboardAd from "./pages/advertisement/createBillboardAd";
import CreateTvAd from "./pages/advertisement/createTvAd";
import CreateMagazineAd from "./pages/advertisement/createMagazineAd";
import CreateRadioAd from "./pages/advertisement/createRadioAd";
import AdminDashboard from "./pages/admin/adminDashboard";
import UserControl from "./pages/admin/userControl";
import HelpAndSupport from "./pages/admin/helpAndSupport";
import Contract from "./pages/contract/userContract";
import ContactUs from "./pages/contactUs/contactUs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
import CreateBillboard from "./pages/billboards/createBillboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import CreateContract from "./pages/contract/createContract";
import UserEditProfilePage from "./pages/profile/userEditProfilePage";
import MediaEditProfilePage from "./pages/profile/mediaEditProfilePage";
import UserProfilePage from "./pages/profile/userProfilePage";
import MediaProfilePage from "./pages/profile/mediaProfilePage";
import BillboardEditProfilePage from "./pages/profile/billboardEditProfilePage";
import BillboardProfilePage from "./pages/profile/billboardProfilePage";
import ContractDetail from "./pages/contract/contractDetail";
import UserContractDetail from "./pages/contract/userContractDetail";
import { Toaster } from "react-hot-toast";
import { getCookie } from "./utils";
import jwtDecode from "jwt-decode";
import ErrorPage from "./components/error";
import React, { useState } from "react";
// HOC for checking authentication and authorization
export const ImgContext = React.createContext();

const ProtectedRoute = ({ Component, roles, ...rest }) => {
  const token = getCookie("user");

  if (!token) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/SignIn" replace={true} />;
  }

  const { role } = jwtDecode(token); // Replace with your authentication library and access the user's authentication status and role
  if (roles && !roles.includes(role)) {
    // Redirect to a forbidden page if the user's role is not allowed

    const err = {
      status: "401",
      message: "User not authorised",
      header: "Unauthorized",
    };
    return <Navigate to="/error" state={err} replace={true} />;
  }

  // Render the component if authenticated and authorized
  return <Component {...rest} />;

  // return <Route {...rest} element={<Component />} />;
};

// Apply the withAuthentication HOC to secure the routes

const router = createBrowserRouter([
  // Onboarding
  {
    path: "/search",
    element: <Home />,
  },
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/billboards/:billboardId",
    element: <BillboardDetail />,
  },
  {
    path: "/medias/:mediaId",
    element: <MediaDetail />,
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
    path: "/MediaAgencyStepper",
    element: (
      <ProtectedRoute
        Component={MediaAgencyStepper}
        roles={["tv", "radio", "landowner", "customer"]}
      />
    ),
  },
  {
    path: "/cart",
    element: <Cart />,
  },

  // User

  {
    path: "/UserStepper",

    element: <ProtectedRoute Component={UserStepper} roles={["customer"]} />,
  },

  {
    path: "/Myaccount",
    element: (
      <ProtectedRoute Component={MyAccount} roles={["admin", "customer"]} />
    ),
  },

  {
    path: "/Advertisement",
    element: <ProtectedRoute Component={Advertisement} roles={["customer"]} />,
  },
  {
    path: "CreateBillboardAd",
    element: (
      <ProtectedRoute Component={CreateBillboardAd} roles={["landowner"]} />
    ),
  },
  {
    path: "CreateTvAd",
    element: <ProtectedRoute Component={CreateTvAd} roles={["tv"]} />,
  },
  {
    path: "CreateMagazineAd",
    element: <ProtectedRoute Component={CreateMagazineAd} roles={["gazeta"]} />,
  },
  {
    path: "CreateRadioAd",
    element: <ProtectedRoute Component={CreateRadioAd} roles={["radio"]} />,
  },
  {
    path: "/UserProposal",
    element: <UserProposal />,
  },
  {
    path: "/UserContract",
    element: <ProtectedRoute Component={UserContract} roles={["customer"]} />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },

  // Billboard User
  {
    path: "/BillboardDashboard",
    element: (
      <ProtectedRoute Component={BillboardDashboard} roles={["landowner"]} />
    ),
  },
  {
    path: "/BillboardProposal",
    element: (
      <ProtectedRoute Component={BillboardProposal} roles={["landowner"]} />
    ),
  },
  {
    path: "/BillboardContract",
    element: (
      <ProtectedRoute Component={BillboardContract} roles={["landowner"]} />
    ),
  },

  {
    path: "/Billboard",
    element: <ProtectedRoute Component={Billboard} roles={["landowner"]} />,
  },
  {
    path: "/CreateBillboard",
    element: (
      <ProtectedRoute Component={CreateBillboard} roles={["landowner"]} />
    ),
  },
  {
    path: "/CreateContract",
    element: (
      <ProtectedRoute Component={CreateContract} roles={["landowner"]} />
    ),
  },
  {
    path: "/ContractDetail/:contractId",
    element: (
      <ProtectedRoute Component={UserContractDetail} roles={["landowner"]} />
    ),
  },
  {
    path: "/user/:userId/billboards/:billboardId",
    element: (
      <ProtectedRoute
        Component={LandlordsBillboardDetail}
        roles={["landowner"]}
      />
    ),
  },
  // Media Agency
  {
    path: "/MediaDashboard",
    element: (
      <ProtectedRoute Component={MediaDashboard} roles={["tv", "radio"]} />
    ),
  },
  {
    path: "/MediaProposal",
    element: (
      <ProtectedRoute Component={MediaProposal} roles={["tv", "radio"]} />
    ),
  },
  {
    path: "/MediaContract",
    element: (
      <ProtectedRoute Component={MediaContract} roles={["tv", "radio"]} />
    ),
  },
  {
    path: "/Media",
    element: <ProtectedRoute Component={Media} roles={["tv", "radio"]} />,
  },
  {
    path: "/user/:userId/medias/:mediaId",
    element: (
      <ProtectedRoute Component={AgenciesMediaDetail} roles={["tv", "radio"]} />
    ),
  },

  // Admin
  {
    path: "/AdminDashboard",
    element: <ProtectedRoute Component={AdminDashboard} roles={["admin"]} />,
  },
  {
    path: "/UserControl",
    element: <ProtectedRoute Component={UserControl} roles={["admin"]} />,
  },
  {
    path: "/HelpAndSupport",
    element: <ProtectedRoute Component={HelpAndSupport} roles={["admin"]} />,
  },

  // Profile
  {
    path: "/UserProfile",
    element: (
      <ProtectedRoute
        Component={UserProfilePage}
        roles={["customer", "landowner"]}
      />
    ),
  },
  {
    path: "/MediaProfile",
    element: (
      <ProtectedRoute Component={MediaProfilePage} roles={["tv", "radio"]} />
    ),
  },
  {
    path: "/BillboardProfile",
    element: (
      <ProtectedRoute Component={BillboardProfilePage} roles={["landowner"]} />
    ),
  },
  {
    path: "/UserEditProfile",
    element: (
      <ProtectedRoute Component={UserEditProfilePage} roles={["customer"]} />
    ),
  },
  {
    path: "/MediaEditProfile",
    element: (
      <ProtectedRoute
        Component={MediaEditProfilePage}
        roles={["tv", "radio", "gazeta"]}
      />
    ),
  },
  {
    path: "/BillboardEditProfile",
    element: (
      <ProtectedRoute
        Component={BillboardEditProfilePage}
        roles={["landowner"]}
      />
    ),
  },

  //error

  {
    path: "/error",
    element: <ErrorPage />,
  },
]);

export default function App() {
  const client = new QueryClient();
  const [ImgUrl, setImgUrl] = useState();

  return (
    <ImgContext.Provider value={{ ImgUrl, setImgUrl }}>
      {" "}
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
        <QueryClientProvider client={client}>
          <Toaster position="top-center" reverseOrder={false} />
          {<RouterProvider router={router} />}
        </QueryClientProvider>
      </GoogleOAuthProvider>
    </ImgContext.Provider>
  );
}

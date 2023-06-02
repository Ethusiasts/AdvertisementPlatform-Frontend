import Home from "./pages/Home";
import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/authentication/signIn";
import SignUp from "./pages/authentication/signUp";
import BillboardDetail from "./pages/detail_page/billboardDetailPage";
import MediaDetail from "./pages/detail_page/mediaDetailPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
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

import CreateContract from "./pages/contract/createContract";
import UserEditProfilePage from "./pages/profile/userEditProfilePage";
import MediaEditProfilePage from "./pages/profile/mediaEditProfilePage";
import UserProfilePage from "./pages/profile/userProfilePage";
import MediaProfilePage from "./pages/profile/mediaProfilePage";
import BillboardEditProfilePage from "./pages/profile/billboardEditProfilePage";
import BillboardProfilePage from "./pages/profile/billboardProfilePage";

// HOC for checking authentication and authorization
const withAuthentication = (Component) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Replace with your authentication logic
  // Check if the user is authorized
  const isAuthorized = (role) => {
    // Implement your authorization logic here
    // Example: Check if the user has a specific role
    return role === "Admin";
  };

  // Usage example:
  if (isAuthenticated && isAuthorized("admin")) {
    // User is authenticated and has the 'admin' role
    // Render authorized content
  } else {
    // User is not authenticated or not authorized
    // Redirect to a login page or display an error message
  }
  return function AuthenticatedComponent(props) {
    if (isAuthenticated) {
      return <Component {...props} />;
    } else {
      // return <Redirect to="/SignIn" />; // Redirect to the sign-in page if not authenticated
    }
  };
};

// Apply the withAuthentication HOC to secure the routes
const SecuredProfilePage = withAuthentication(UserProfilePage);

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
    path: "/billboards/:billboardId",
    element: <BillboardDetail />,
  },
  {
    path: "/medias/:mediaId",
    element: <MediaDetail />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/Myaccount",
    element: <MyAccount />,
  },

  {
    path: "/Advertisement",
    element: <Advertisement />,
  },
  {
    path: "CreateBillboardAd",
    element: <CreateBillboardAd />,
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
  {
    path: "/CreateBillboard",
    element: <CreateBillboard />,
  },
  {
    path: "/CreateContract",
    element: <CreateContract />,
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
    path: "/UserProfile",
    element: <UserProfilePage />,
  },
  {
    path: "/MediaProfile",
    element: <MediaProfilePage />,
  },
  {
    path: "/BillboardProfile",
    element: <BillboardProfilePage />,
  },
  {
    path: "/UserEditProfile",
    element: <UserEditProfilePage />,
  },
  {
    path: "/MediaEditProfile",
    element: <MediaEditProfilePage />,
  },
  {
    path: "/BillboardEditProfile",
    element: <BillboardEditProfilePage />,
  },
]);

export default function App() {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      {<RouterProvider router={router} />}
    </QueryClientProvider>
  );
}

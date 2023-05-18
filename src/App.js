import Home from "./pages/Home";
// import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/auth/signIn";
import Detail from "./pages/detail_page/Detail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/landing",
  //   element: <Landing />,
  // },
  {
    path: "/details",
    element: <Detail />,
  },
  {
    path: "/signIn",
    element: <SignIn />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

import Home from "./pages/Home";
import Landing from "./pages/Landing/Landing";
import SignIn from "./pages/auth/signIn";
import Detail from "./pages/detail_page/Detail";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/landing",
    element: <Landing />,
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}

import { Link } from "react-router-dom";
import LogoDark from "../../images/logo-dark.svg";
import Logo from "../../images/logo.svg";
import SideComponent from "../../components/authentication/sideComponent";
import SignUpForm from "../../components/authentication/signUpForm";
export default function SignUp({ pageName }) {
  return (
    <div class="flex justify-center items-center p-12 h-screen">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <SideComponent />

          <SignUpForm />
        </div>
      </div>
    </div>
  );
}

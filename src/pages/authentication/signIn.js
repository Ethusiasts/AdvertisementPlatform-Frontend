import SideComponent from '../../components/authentication/sideComponent';
import SignInForm from '../../components/authentication/signInForm';

export default function SignIn({ pageName }) {
    return (
        <div class="flex justify-center items-center p-10 h-screen shadow-sm">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="flex flex-wrap items-center">
            <SideComponent/>
  
            <SignInForm/>
          </div>
        </div>
        </div>
        )}

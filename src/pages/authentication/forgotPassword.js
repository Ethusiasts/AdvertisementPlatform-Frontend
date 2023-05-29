import ForgotPasswordForm from '../../components/authentication/forgotPasswordForm';
import SideComponent from '../../components/authentication/sideComponent';

export default function ForgotPassword({ pageName }) {
    return (
        <div class="flex justify-center items-center p-10 h-screen shadow-sm">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="flex flex-wrap items-center">
            <SideComponent/>
  
            <ForgotPasswordForm/>
          </div>
        </div>
        </div>
        )}

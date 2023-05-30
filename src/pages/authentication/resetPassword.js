import ResetPasswordForm from '../../components/authentication/resetPasswordForm';
import SideComponent from '../../components/authentication/sideComponent';

export default function ResetPassword({ pageName }) {
    return (
        <div class="flex justify-center items-center p-10 h-screen shadow-sm">
        <div className="rounded-sm border border-stroke bg-white shadow-default">
          <div className="flex flex-wrap items-center">
            <SideComponent/>
  
            <ResetPasswordForm/>
          </div>
        </div>
        </div>
        )}

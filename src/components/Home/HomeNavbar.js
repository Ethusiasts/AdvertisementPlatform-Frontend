import Button from "./Button";
export default function HomeNavbar() {
    return (
        <div className="shadow-md w-full top-0 left-0">
            <div className="md:flex items-center justify-between bg-white py-4 md:pl-10 pl-7 pr-7">
                <div className="font-bold text-2xl  cursor-pointer flex items-center text-gray-800">
                    Advert
                </div>
                <ul className="md:flex md:items-center">
                    <li className="md:ml-8 text-xl">
                        <a href="/"><span className="md:mr-3 text-[#D0CFCE]">|</span>Login</a>
                    </li>
                    <Button text = "Register - It's free"/>
                </ul>
            </div>
      </div>
    );
  }
  
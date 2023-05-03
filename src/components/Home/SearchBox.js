import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
export default function SearchBox() { 
    return (
        <div className="mx-auto max-w-md text-center items-center bg-white rounded-full shadow-sm px-6 py-2 my-4">
            <FontAwesomeIcon icon={faSearch} className="text-[#2785AE] text-2xl" />
            <input
                className="bg-transparent ml-4 mr-11 outline-none placeholder-[#2785AE]"
                    type="text"
                    placeholder="Search Here"
            />
            <Button text="Find"/>
        </div>
    );
}
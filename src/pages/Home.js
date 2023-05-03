import '../styles/home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faThList } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../styles/assets/billboard1.jpg"
import Image2 from "../styles/assets/billboard2.jpg"
import Image3 from "../styles/assets/billboard3.jpg"
import Pagination from '../components/Home/Pagination';
import Footer from '../components/Home/Footer';
import Card from '../components/Home/BillboardCard';
import HomeNavbar from '../components/Home/HomeNavbar';
import BillboardFilterBar from '../components/Home/BillboardFilterBar';
import SearchBox from '../components/Home/SearchBox';
export default function Home() {
   
    return (
        
        <div> 
            <HomeNavbar />

            <div className="header2 py-11 pl-11"> 
                <a className="text-[#2785AE]" href="/"> Billboards</a> <span className="md:mr-3 text-[#D0CFCE]">|</span> <a className="" href="/"> Media Agencies</a>
            </div>
            <div className="font-bold text-3xl text-center">Connect MarketPlace</div>
            <div className="text-[#7D7D7D] text-center text-2xl">Find the best Places In One Place</div>

            <SearchBox />

            <div className="py-4 px-4 overflow-hidden ml-20 mr-7" >
                <div>
                    <BillboardFilterBar />
                </div>
                <div className="flex justify-between mb-11">
                    <div className="pl-4 font-bold text-lg">3 Results</div>
                    <div>
                        Sort by 
                        <span className="pl-2">
                            <FontAwesomeIcon icon={faSort} className="text-[#2785AE]"/>
                        </span>
                        
                    </div>
                    <div className="">
                        <div className="flex">
                            <div className="pr-6">
                                <FontAwesomeIcon icon={faThList} className="text-[#2785AE]" />
                            </div>
                            <div>
                                <FontAwesomeIcon icon={faList} className="text-[#2785AE]"/>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="bg-[#D9D9D9] flex flex-wrap pl-2 ">
                    <div className="">
                        <Card
                            status="Free"
                            place="Bole"
                            city="Addis Ababa"
                            width="20"
                            height="40"
                            location="6006 John F. Kennedy Blvd, West New York, NJ 07093, USA"
                            imageSrc={ Image1 }
                            alt="Card Image"
                            />
                    </div>
                    <div className="">
                        <Card
                            status="Occupied"
                            place="Bole"
                            city="Addis Ababa"
                            width="20"
                            height="40"
                            location="6006 John F. Kennedy Blvd, West New York, NJ 07093, USA"
                            imageSrc={ Image2 }
                            alt="Card Image"
                            />
                    </div>
                    <div className="">
                        <Card
                            status="Free"
                            place="Bole"
                            city="Addis Ababa"
                            width="20"
                            height="40"
                            location="6006 John F. Kennedy Blvd, West New York, NJ 07093, USA"
                            imageSrc={ Image3 }
                            alt="Card Image"
                            />
                    </div>
                </div>
                
            </div>

            <div className="text-3xl font-bold mt-8 mb-4 ml-20">Recommended</div>
            
            <Pagination />

            <div className="mt-20">
                <Footer />
            </div>

        </div>
    );
  }
  
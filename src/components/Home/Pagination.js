import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../../styles/assets/billboard1.jpg"
import Image2 from "../../styles/assets/billboard2.jpg"
import Image3 from "../../styles/assets/billboard3.jpg"
import RecommendedCard from "./RecommendedCard";
export default function Pagination() { 
    const imageData = [
        Image1, Image2, Image3, Image1
    ]
    const imagesPerPage = 2;
    const totalPages = 10;
    const imagePages = [];
    for (let i = 0; i < totalPages; i++) {
        const startIndex = i * imagesPerPage;
        const endIndex = startIndex + imagesPerPage;
        imagePages.push(imageData.slice(startIndex, endIndex));
    }
    
    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }
        
    return (
        <div>
            <div className="flex flex-wrap ml-20">
                    {imagePages[currentPage - 1].map((image) => (
                    <RecommendedCard location="Jemo, Addis Ababa " description="Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi"
                        imageSrc={image}
                        alt="Card Image"
                    />
                    ))}
                </div>

                <div className="flex justify-center mt-4">
                        <nav className="pagination">
                            <ul className="flex">
                            {currentPage > 1 && (
                                <li className=" rounded-lg px-6 inline-block float-right shadow-md mr-6 mt-4">
                                <button
                                    className="px-3 py-1 rounded-md bg-white text-gray-900"
                                            onClick={() => handlePageChange(currentPage - 1)}
                                        >
                                        <FontAwesomeIcon icon={faArrowLeft} className=" text-[#2785AE] pr-4" />
                                        Previous
                                        </button>
                                </li>
                            )}
                            {Array.from({ length: totalPages }, (_, i) => (
                                <li key={i}>
                                <button
                                    className={`px-3 py-1 rounded-md ${i + 1 === currentPage ? 'bg-gray-500 text-white' : 'bg-white text-gray-900'}`}
                                        onClick={() => handlePageChange(i + 1)}
                                >
                                    {i + 1}
                                </button>
                                </li>
                            ))}
                            {currentPage < totalPages && (
                                <li>
                                <button
                                    className="px-3 py-1 rounded-md bg-white text-gray-900"
                                            onClick={() => handlePageChange(currentPage + 1)}
                                >
                                            Next
                            <FontAwesomeIcon icon={faArrowRight} className=" text-[#2785AE] text-base pl-4" />
                                            
                                </button>
                                </li>
                            )}
                            </ul>
                        </nav>
                </div>
        </div>
        );
    
}
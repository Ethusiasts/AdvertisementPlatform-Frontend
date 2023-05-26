import React, {
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
} from "react";
import { useQuery } from "@tanstack/react-query";
import { getBillboards, searchBillboards } from "../../services/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image1 from "../../styles/assets/billboard1.jpg";
import Image2 from "../../styles/assets/billboard2.jpg";
import Image3 from "../../styles/assets/billboard3.jpg";
import Card from "./BillboardCard";
const Pagination = forwardRef(({ query, onChildStateChange }, ref) => {
  const { data, isLoading } = useQuery(["billboards"], () => {
    return getBillboards()
      .then((res) => res.data)
      .catch((error) => {
        console.log(error);
        return error;
      });
  });

  const [cardData, setCardData] = useState(null);
  useEffect(() => {
    if (query) {
      searchBillboards({ query })
        .then((res) => setCardData(res.data))
        .catch((error) => {
          return error;
        });
    } else {
      if (data) {
        setCardData(data);
        onChildStateChange(data.length);
      }
    }
  }, [data, query]);

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useImperativeHandle(ref, () => ({
    handleSort(property) {
      const sortedData = [...cardData].sort((a, b) => {
        if (property === "size") {
          let a_val = a["width"] * a["height"];
          let b_val = b["width"] * b["height"];
          if (a_val < b_val) {
            return -1;
          }
          if (a_val > b_val) {
            return 1;
          }
          return 0;
        }
        if (a[property] < b[property]) {
          return -1;
        }
        if (a[property] > b[property]) {
          return 1;
        }
        return 0;
      });
      setCardData(sortedData);
    },
  }));

  if (isLoading || !cardData) {
    return <div>Loading...</div>;
  }

  const imagesPerPage = 6;
  const totalPages = 10;
  const cardPages = [];
  for (let i = 0; i < totalPages; i++) {
    const startIndex = i * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    cardPages.push(cardData.slice(startIndex, endIndex));
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pl-11 ">
        {cardPages[currentPage - 1].map((card) => (
          <Card
            status={card.status}
            rate={card.rate}
            price={card.monthly_rate_per_sq}
            production={card.production}
            width={card.width}
            height={card.height}
            location={card.location}
            imageSrc={card.image}
            alt="Card Image"
          />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <nav className="pagination">
          <ul className="flex">
            {currentPage > 1 && (
              <li className=" rounded-lg px-6 inline-block float-right shadow-md mr-6">
                <button
                  className="px-3 py-1 rounded-md bg-white text-gray-900"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className=" text-[#2785AE] pr-4"
                  />
                  Previous
                </button>
              </li>
            )}
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i}>
                <button
                  className={`px-3 py-1 rounded-md ${
                    i + 1 === currentPage
                      ? "bg-gray-500 text-white"
                      : "bg-white text-gray-900"
                  }`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            {currentPage < totalPages && (
              <li className="rounded-lg px-6 inline-block shadow-md">
                <button
                  className="px-3 py-1 rounded-md bg-white text-gray-900"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className=" text-[#2785AE] text-base pl-4"
                  />
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
});

export default Pagination;

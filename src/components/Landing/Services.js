import React from "react";
import Service from "./Service";
import { GiTatteredBanner, GiGamepad } from "react-icons/gi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaSwatchbook, FaBullhorn } from "react-icons/fa";
import { MdNotificationAdd } from "react-icons/md";
function Services() {
  return (
    <div
      class="flex flex-col justify-center sm:w-full md:w-2/3  gap-y-10 mx-auto  font-Lato my-40"
      data-aos="zoom-in-up"
    >
      <div class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
        <div class="flex flex-col justify-center items-center border-r-2 border-b-2 border-blue-300 border-dashed ">
          <Service
            heading="Real-time Analytics Dashboard"
            description="Stay informed and make data-driven decisions with our real-time analytics dashboard."
            icon={
              <FaBullhorn
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-r-2 border-b-2 border-blue-300 border-dashed">
          <Service
            heading="Safe"
            description="AI Based Filtering"
            icon={
              <GiTatteredBanner
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-b-2 border-blue-300 border-dashed">
          <Service
            heading="Billboard Connection:"
            description="Unlock prime advertising spaces and maximize your reach with ease."
            icon={
              <AiOutlineVideoCameraAdd
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>

        <div class=" flex flex-col justify-center items-center border-r-2 border-blue-300 border-dashed">
          <Service
            heading="Revenue Optimization Services"
            description="Utilize our expertise in monetization strategies and tap into a network of advertisers eager to leverage your prime billboard spaces for their campaigns."
            icon={
              <FaSwatchbook
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-r-2 border-blue-300 border-dashed">
          <Service
            heading="Targeted Reach Solutions"
            description="Leverage advanced data analytics and audience segmentation to ensure your message resonates with the right people at the right time."
            icon={
              <MdNotificationAdd
                size={50}
                className="text-blue-200 hover:text-black"
              />
            }
          />
        </div>
        <div class=" flex flex-col justify-center items-center border-blue-300 border-dashed">
          <Service
            heading="Media Agency Collaboration"
            description="Benefit from the expertise and resources of experienced professionals who will amplify your advertising efforts for greater impact."
            icon={
              <GiGamepad size={50} className="text-blue-200 hover:text-black" />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Services;

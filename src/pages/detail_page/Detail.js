import "../../styles/detail.css";
import { getBillboardDetail } from "../../services/billboard_api";
import { useQuery } from "@tanstack/react-query";

import Navigation from "../../components/Landing/Navigation";
import ImageCard from "../../components/billboardDetails/imageCard";
import Description from "../../components/billboardDetails/description";
import MediaInfo from "../../components/billboardDetails/mediaInfo";
import Rating from "../../components/billboardDetails/rating";
import Comments from "../../components/billboardDetails/comments";
import Messages from "../../components/billboardDetails/messages";
import Nearby from "../../components/billboardDetails/nearby";
import Footer from "../../components/Landing/Footer";

export default function Detail() {
  const billboardId = 1;
  const { data: billboardDetail, isLoading } = useQuery(
    ["billboardDetail"],
    () => {
      return getBillboardDetail({ billboardId })
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          return error;
        });
    },
    { billboardId }
  );

  if (isLoading) {
    return (
      <div class="text-center">
        <div role="status">
          <svg
            aria-hidden="true"
            class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  if (billboardDetail) {
    return (
      // <body class="bg-gray-100">
      //   {/* Navigation */}
      //   <header class="bg-white">
      //     <nav class="flex justify-between items-center w-[98%] h-14 mx-auto">
      //       <div>
      //         <h1 className="text-2xl font-bold">Advert</h1>
      //       </div>
      //       <div class="">
      //         <ul className="flex items-center gap-4">
      //           <li className="mr-6">
      //             <a href="#" className=" hover:text-blue-800">
      //               Home
      //             </a>
      //           </li>
      //           <li className="mr-6">
      //             <a href="#" className=" hover:text-blue-800">
      //               About
      //             </a>
      //           </li>
      //           <li className="mr-6">
      //             <a href="#" className=" hover:text-blue-800">
      //               Services
      //             </a>
      //           </li>
      //           <li className="mr-6">
      //             <a href="#" className=" hover:text-blue-800">
      //               Contact
      //             </a>
      //           </li>
      //         </ul>
      //       </div>
      //       <div class="">
      //         <button className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-1 rounded-full">
      //           login
      //         </button>
      //       </div>
      //     </nav>
      //   </header>

      //   {/* Image */}
      //   <div class="relative">
      //     <img
      //       src="https://bookmybillboards.com/wp-content/uploads/2017/07/DEL03-1.jpg"
      //       alt=""
      //       class="w-full h-96 object-cover"
      //     />
      //     <span class="absolute top-5 left-[10%] p-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-1xl font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
      //       Available
      //     </span>

      //     <p class="absolute bottom-5 left-[10%] p-2 rounded-md text-2xl text-white">
      //       {" "}
      //       ROAD DND FLYWAY, DELHI{" "}
      //     </p>
      //     <button class="absolute bottom-5 right-[15%] p-2 rounded-md bg-red-500 text-white active:bg-red-600">
      //       <i class="fas fa-heart"></i>
      //     </button>
      //     <button class="absolute bottom-5 right-[9%] p-2 w-[5%] rounded-md bg-blue-400 text-white">
      //       Rent
      //     </button>
      //   </div>

      //   {/* Details */}
      //   <div class="grid grid-cols-5 gap-4 m-16 rounded">
      //     <div class="col-span-3 bg-white p-2">
      //       <div class="p-4 border-b mb-5">
      //         <h2 class="text-2xl font-bold">Media Info</h2>
      //       </div>

      //       <div class="bg-red-100 border border-red-800 grid grid-cols-2 gap-6 py-6 mx-5 px-3 mb-6">
      //         <div class="flex justify-between border-b pb-2">
      //           <h1 class="font-bold">Billboard-ID:</h1>
      //           <p class="">13354</p>
      //         </div>
      //         <div class="flex justify-between border-b pb-2">
      //           <h1 class="font-bold">Board Size:</h1>
      //           <p class="">800</p>
      //         </div>
      //         <div class="flex justify-between border-b">
      //           <h1 class="font-bold">Price:</h1>
      //           <p class="">Per Month 3,50,000/₹ Indian Rupees</p>
      //         </div>
      //         <div class="flex justify-between border-b">
      //           <h1 class="font-bold">Width:</h1>
      //           <p class="">40</p>
      //         </div>
      //         <div class="flex justify-between border-b">
      //           <h1 class="font-bold">Board Status:</h1>
      //           <p class="">Buy Available</p>
      //         </div>
      //         <div class="flex justify-between border-b pb-2">
      //           <h1 class="font-bold">Height:</h1>
      //           <p class="">20</p>
      //         </div>
      //       </div>
      //     </div>
      //     <div class="col-span-2 bg-white">
      //       <div class="p-4 border-b">
      //         <h2 class="text-1xl ">Map</h2>
      //       </div>
      //     </div>
      //   </div>

      //   {/* Reviews */}
      //   <div class="grid grid-rows-4 grid-flow-col  gap-4 m-16 rounded">
      //     <div class="row-span-3 col-span-12 bg-white p-2">
      //       <h1 class="text-2xl text-center font-medium">Reviews</h1>

      //       <div class="bg-white rounded-lg px-4 py-4">
      //         <div class="mb-1 tracking-wide px-4 py-4">
      //           <h2 class="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
      //           <div class="border-b -mx-8 px-8 pb-3">
      //             <div class="flex items-center mt-1">
      //               <div class=" w-1/5 text-indigo-500 tracking-tighter">
      //                 <span>5 star</span>
      //               </div>
      //               <div class="w-3/5">
      //                 <div class="bg-gray-300 w-full rounded-lg h-2">
      //                   <div class=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
      //                 </div>
      //               </div>
      //               <div class="w-1/5 text-gray-700 pl-3">
      //                 <span class="text-sm">51%</span>
      //               </div>
      //             </div>

      //             <div class="flex items-center mt-1">
      //               <div class="w-1/5 text-indigo-500 tracking-tighter">
      //                 <span>4 star</span>
      //               </div>
      //               <div class="w-3/5">
      //                 <div class="bg-gray-300 w-full rounded-lg h-2">
      //                   <div class="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
      //                 </div>
      //               </div>
      //               <div class="w-1/5 text-gray-700 pl-3">
      //                 <span class="text-sm">17%</span>
      //               </div>
      //             </div>

      //             <div class="flex items-center mt-1">
      //               <div class="w-1/5 text-indigo-500 tracking-tighter">
      //                 <span>3 star</span>
      //               </div>
      //               <div class="w-3/5">
      //                 <div class="bg-gray-300 w-full rounded-lg h-2">
      //                   <div class=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
      //                 </div>
      //               </div>
      //               <div class="w-1/5 text-gray-700 pl-3">
      //                 <span class="text-sm">19%</span>
      //               </div>
      //             </div>

      //             <div class="flex items-center mt-1">
      //               <div class=" w-1/5 text-indigo-500 tracking-tighter">
      //                 <span>2 star</span>
      //               </div>
      //               <div class="w-3/5">
      //                 <div class="bg-gray-300 w-full rounded-lg h-2">
      //                   <div class=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
      //                 </div>
      //               </div>
      //               <div class="w-1/5 text-gray-700 pl-3">
      //                 <span class="text-sm">8%</span>
      //               </div>
      //             </div>

      //             <div class="flex items-center mt-1">
      //               <div class="w-1/5 text-indigo-500 tracking-tighter">
      //                 <span>1 star</span>
      //               </div>
      //               <div class="w-3/5">
      //                 <div class="bg-gray-300 w-full rounded-lg h-2">
      //                   <div class=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
      //                 </div>
      //               </div>
      //               <div class="w-1/5 text-gray-700 pl-3">
      //                 <span class="text-sm">5%</span>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //         <div class="w-full px-4">
      //           <h3 class="font-medium tracking-tight">Check Reviews</h3>
      //           <p class="text-gray-700 text-sm py-1">
      //             see what others have to say about this.
      //           </p>
      //           <button class="bg-blue-500 border  px-3 py-1 rounded  text-white mt-2">
      //             See Reviews
      //           </button>
      //         </div>
      //       </div>
      //     </div>
      //     <div class="row-span-4  bg-white p-2">
      //       <form class="">
      //         <div class="space-y-12">
      //           <div class="border-b border-gray-900/10">
      //             <h2 class="text-base font-semibold leading-7 text-gray-900">
      //               Leave a Review
      //             </h2>
      //             <p class="mt-1 text-sm leading-6 text-gray-600">
      //               Use the permanent addresses where you can add your review
      //               mail.
      //             </p>

      //             <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      //               <div class="sm:col-span-full ">
      //                 <label
      //                   for="email"
      //                   class="block text-sm font-medium leading-6 text-gray-900"
      //                 >
      //                   Email address
      //                 </label>
      //                 <div class="mt-2">
      //                   <input
      //                     id="email"
      //                     name="email"
      //                     type="email"
      //                     autocomplete="email"
      //                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      //                   />
      //                 </div>
      //               </div>
      //               <div class="sm:col-span-3">
      //                 <label
      //                   for="title-name"
      //                   class="block text-sm font-medium leading-6 text-gray-900"
      //                 >
      //                   Title
      //                 </label>
      //                 <div class="mt-2">
      //                   <input
      //                     type="text"
      //                     name="title-name"
      //                     id="title-name"
      //                     autocomplete="given-name"
      //                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      //                   />
      //                 </div>
      //               </div>
      //               <div class="sm:col-span-3">
      //                 <label
      //                   for="country"
      //                   class="block text-sm font-medium leading-6 text-gray-900"
      //                 >
      //                   Rating
      //                 </label>
      //                 <div class="mt-2">
      //                   <select
      //                     id="rating"
      //                     name="rating"
      //                     autocomplete="rating-name"
      //                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      //                   >
      //                     <option>1</option>
      //                     <option>2</option>
      //                     <option>3</option>
      //                     <option>4</option>
      //                     <option>5</option>
      //                   </select>
      //                 </div>
      //               </div>
      //               <div class="col-span-full">
      //                 <label
      //                   for="about"
      //                   class="block text-sm font-medium leading-6 text-gray-900"
      //                 >
      //                   Message
      //                 </label>
      //                 <div class="mt-2">
      //                   <textarea
      //                     id="about"
      //                     name="about"
      //                     rows="3"
      //                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      //                   ></textarea>
      //                 </div>
      //                 <p class="mt-3 text-sm leading-6 text-gray-600">
      //                   Write a your review.
      //                 </p>
      //               </div>
      //             </div>
      //           </div>
      //         </div>

      //         <div class="mt-6 flex items-center justify-end">
      //           <button
      //             type="submit"
      //             class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      //           >
      //             Review
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>

      //   {/* Nearby Places */}
      //   <div class="bg-gray-100">
      //     <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      //       <div class="mx-auto max-w-2xl py-4 sm:py-4 lg:max-w-none lg:py-5">
      //         <h2 class="text-2xl font-bold text-gray-900">NearBy Places</h2>

      //         <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      //           <div class="group relative">
      //             <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
      //               <img
      //                 src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg"
      //                 alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
      //                 class="h-full w-full object-cover object-center"
      //               />
      //             </div>
      //             <h3 class="mt-6 text-sm text-gray-500">
      //               <a href="/">
      //                 <span class="absolute inset-0"></span>
      //                 BOPAL, AHMEDABAD
      //               </a>
      //             </h3>
      //             <p class="text-base font-semibold text-gray-900">
      //               Bopal, Ahmedabad, Gujarat, India
      //             </p>
      //           </div>
      //           <div class="group relative">
      //             <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
      //               <img
      //                 src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg"
      //                 alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant."
      //                 class="h-full w-full object-cover object-center"
      //               />
      //             </div>
      //             <h3 class="mt-6 text-sm text-gray-500">
      //               <a href="/">
      //                 <span class="absolute inset-0"></span>
      //                 Borough High Street, London
      //               </a>
      //             </h3>
      //             <p class="text-base font-semibold text-gray-900">
      //               Borough High St, London SE1, UK
      //             </p>
      //           </div>
      //           <div class="group relative">
      //             <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
      //               <img
      //                 src="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg"
      //                 alt="Collection of four insulated travel bottles on wooden shelf."
      //                 class="h-full w-full object-cover object-center"
      //               />
      //             </div>
      //             <h3 class="mt-6 text-sm text-gray-500">
      //               <a href="/hello">
      //                 <span class="absolute inset-0"></span>
      //                 GANDHI BRIDGE, AHMEDABAD
      //               </a>
      //             </h3>
      //             <p class="text-base font-semibold text-gray-900">
      //               Gandhi Bridge, Ahmedabad, Gujarat, India
      //             </p>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </div>

      //   {/* Footer */}
      //   <div class="relative isolate overflow-hidden bg-gray-900 mt-20 py-16 sm:py-24 lg:py-32">
      //     <div class="mx-auto max-w-7xl px-6 lg:px-8">
      //       <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      //         <div class="max-w-xl lg:max-w-lg">
      //           <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">
      //             Subscribe to our newsletter.
      //           </h2>
      //           <p class="mt-4 text-lg leading-8 text-gray-300">
      //             Nostrud amet eu ullamco nisi aute in ad minim nostrud
      //             adipisicing velit quis. Duis tempor incididunt dolore.
      //           </p>
      //           <div class="mt-6 flex max-w-md gap-x-4">
      //             <label for="email-address" class="sr-only">
      //               Email address
      //             </label>
      //             <input
      //               id="email-address"
      //               name="email"
      //               type="email"
      //               autocomplete="email"
      //               required
      //               class="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
      //               placeholder="Enter your email"
      //             />
      //             <button
      //               type="submit"
      //               class="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      //             >
      //               Subscribe
      //             </button>
      //           </div>
      //         </div>
      //         <dl class="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
      //           <div class="flex flex-col items-start">
      //             <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
      //               <svg
      //                 class="h-6 w-6 text-white"
      //                 fill="none"
      //                 viewBox="0 0 24 24"
      //                 stroke-width="1.5"
      //                 stroke="currentColor"
      //                 aria-hidden="true"
      //               >
      //                 <path
      //                   stroke-linecap="round"
      //                   stroke-linejoin="round"
      //                   d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
      //                 />
      //               </svg>
      //             </div>
      //             <dt class="mt-4 font-semibold text-white">Weekly articles</dt>
      //             <dd class="mt-2 leading-7 text-gray-400">
      //               Non laboris consequat cupidatat laborum magna. Eiusmod non
      //               irure cupidatat duis commodo amet.
      //             </dd>
      //           </div>
      //           <div class="flex flex-col items-start">
      //             <div class="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
      //               <svg
      //                 class="h-6 w-6 text-white"
      //                 fill="none"
      //                 viewBox="0 0 24 24"
      //                 stroke-width="1.5"
      //                 stroke="currentColor"
      //                 aria-hidden="true"
      //               >
      //                 <path
      //                   stroke-linecap="round"
      //                   stroke-linejoin="round"
      //                   d="M10.05 4.575a1.575 1.575 0 10-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 013.15 0v1.5m-3.15 0l.075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 013.15 0V15M6.9 7.575a1.575 1.575 0 10-3.15 0v8.175a6.75 6.75 0 006.75 6.75h2.018a5.25 5.25 0 003.712-1.538l1.732-1.732a5.25 5.25 0 001.538-3.712l.003-2.024a.668.668 0 01.198-.471 1.575 1.575 0 10-2.228-2.228 3.818 3.818 0 00-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0116.35 15m.002 0h-.002"
      //                 />
      //               </svg>
      //             </div>
      //             <dt class="mt-4 font-semibold text-white">No spam</dt>
      //             <dd class="mt-2 leading-7 text-gray-400">
      //               Officia excepteur ullamco ut sint duis proident non
      //               adipisicing. Voluptate incididunt anim.
      //             </dd>
      //           </div>
      //         </dl>
      //       </div>
      //     </div>
      //     <div
      //       class="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      //       aria-hidden="true"
      //     >
      //       <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"></div>
      //     </div>
      //   </div>
      // </body>
      <>
        <Navigation />
        {/* Images */}
        <ImageCard
          image={billboardDetail?.image}
          status={billboardDetail.status}
        />
        {/* Description */}
        <Description
          description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
    consectetur."
        />
        {/* Media Info */}
        <MediaInfo
          billboardId={billboardDetail.id}
          width={billboardDetail.width}
          height={billboardDetail.height}
          status={billboardDetail.status}
          price={billboardDetail.monthly_rate_per_sq}
          size={billboardDetail.height * billboardDetail.width}
          location={billboardDetail.location}
        />
        {/* Reviews */}
        <Rating />
        {/* Comments */}
        <Comments />
        {/* Message */}
        <Messages />
        {/* Nearby Places */}
        <Nearby />
        {/* Footer */}
        <Footer />

        {/* Replacable */}
        {/* <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-base font-semibold text-pink-600 tracking-wide uppercase">
            Pricing
          </h2>
          <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            The right price for you, whoever you are
          </p>
          <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            consectetur.{" "}
          </p>
        </div>
        <div class="mt-24 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900">Free</h3>
              <p class="mt-4 flex items-baseline text-gray-900">
                <span class="text-5xl font-extrabold tracking-tight">$0</span>
                <span class="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p class="mt-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, consectetur.
              </p>
            </div>
            <div class="mt-8"></div>
          </div>
          <div class="relative p-8 bg-white border border-gray-200 rounded-2xl shadow-sm flex flex-col">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-gray-900">Pro</h3>
              <p class="mt-4 flex items-baseline text-gray-900">
                <span class="text-5xl font-extrabold tracking-tight">$15</span>
                <span class="ml-1 text-xl font-semibold">/month</span>
              </p>
              <p class="mt-6 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, consectetur.
              </p>
            </div>
            <div class="mt-8"></div>
          </div>
        </div>
      </div> */}

        {/* Media Info */}
        {/* <div class="grid grid-cols-5 gap-4 m-16">
        <div class="col-span-3 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div class="bg-white overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 sm:px-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Media Info
              </h3>
              <p class="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and application.
              </p>
            </div>
            <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
              <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                <div class="sm:col-span-1">
                  <dt class="text-sm font-bold text-gray-500">Billboard-ID</dt>
                  <dd class="mt-1 text-sm text-gray-900">13354</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-bold text-gray-500">Board Size</dt>
                  <dd class="mt-1 text-sm text-gray-900">800</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-bold text-gray-500">Board Type</dt>
                  <dd class="mt-1 text-sm text-gray-900">Billboard</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-bold text-gray-500">
                    Board Location
                  </dt>
                  <dd class="mt-1 text-sm text-gray-900">Lagos</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-bold text-gray-500 ">Board Status</dt>
                  <dd class="mt-1 text-sm text-gray-900">Available</dd>
                </div>
                <div class="sm:col-span-1">
                  <dt class="text-sm font-bold text-gray-500">Board Owner</dt>
                  <dd class="mt-1 text-sm text-gray-900">Lagos State</dd>
                </div>
                <div class="sm:col-span-2">
                  <dt class="text-sm font-bold text-gray-500">Description</dt>
                  <dd class="mt-1 text-sm text-gray-900">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quas cupiditate laboriosam fugiat.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div> */}

        {/* Message */}
        {/* <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="px-10">
          <div class="bg-white max-w-xl rounded-2xl px-10 py-8 shadow-lg hover:shadow-2xl transition duration-500">
            <div class="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-white">
              LOGO
            </div>
            <div class="mt-4">
              <h1 class="text-lg text-gray-700 font-semibold hover:underline cursor-pointer">
                Product Review
              </h1>
              <div class="flex mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p class="mt-4 text-md text-gray-600">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happines.
              </p>
              <div class="flex justify-between items-center">
                <div class="mt-4 flex items-center space-x-4 py-6">
                  <div class="">
                    <img
                      class="w-12 h-12 rounded-full"
                      src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1036&q=80"
                      alt=""
                    />
                  </div>
                  <div class="text-sm font-semibold">
                    John Lucas • <span class="font-normal"> 5 minutes ago</span>
                  </div>
                </div>
                <div class="p-6 bg-yellow-400 rounded-full h-4 w-4 flex items-center justify-center text-2xl text-white mt-4 shadow-lg cursor-pointer">
                  +
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      </>
    );
  }
}

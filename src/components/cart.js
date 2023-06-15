import { useState, useEffect } from "react";
import { getCart, removeItem } from "../utils/cart";
import ButtonWithModal from "./billboardDetails/buttonWithModal";
import CreateCardProposal from "./createProposalCard";
import Navigation from "./Landing/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const [cartItems, setItems] = useState([]);

  const handleRemoveItem = (itemId) => {
    removeItem(itemId);
  };

  useEffect(() => {
    setItems(getCart());
  }, [cartItems.length]);

  const totalLandlord = cartItems.reduce((count, item) => {
    if (item?.daily_rate_per_sq) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  const totalAgencies = cartItems.reduce((count, item) => {
    if (item?.peak_hour) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);

  return (
    <>
      <Navigation />
      <ToastContainer />

      <div className="container mx-auto p-4">
        <div
          class="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
          id="checkout"
        >
          <div
            class="flex items-center lg:flex-row flex-col justify-center"
            id="cart"
          >
            <div
              class="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-whiteoverflow-y-hidden overflow-x-hidden lg:h-screen h-auto"
              id="scroll"
            >
              <p class="lg:text-4xl text-3xl font-black leading-10 text-gray-800 py-3">
                Cart Details
              </p>
              {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div class="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-40">
                      <div class="md:w-4/12 2xl:w-1/4 w-full">
                        <img
                          src={item.image}
                          alt="Black Leather Bag"
                          class="h-36 object-center object-cover md:block hidden"
                        />
                        <img
                          src={item.image}
                          alt="Black Leather Bag"
                          class="md:hidden w-full h-36 object-center object-cover"
                        />
                      </div>
                      <div class="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
                        <p class="text-xs leading-3 text-gray-800 md:pt-0 pt-4">
                          {item.id}
                        </p>
                        <div class="flex items-center justify-between w-full pt-1">
                          <p class="text-base font-black leading-none text-gray-800 ">
                            {item.description}
                          </p>
                          <button
                            className="flex items-center justify-center text-red-500 hover:text-red-600"
                            onClick={() => handleRemoveItem(item.id)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </button>
                        </div>
                        <p class="text-xs leading-3 text-gray-600  pt-2">
                          Height: {item.height}
                        </p>
                        <p class="text-xs leading-3 text-gray-600  py-4">
                          Width: {item.width}
                        </p>
                        <p class="w-96 text-xs leading-3 text-gray-600 ">
                          Status: {item.status}
                        </p>
                        <div class="flex  justify-end pt-5">
                          <p class="text-base font-black leading-none text-green-500 ">
                            ${item.daily_rate_per_sq}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>

            <div class="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900">
              <div class="flex flex-col h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between overflow-y-auto">
                <div>
                  <p class="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">
                    Summary
                  </p>
                  <div class="flex items-center justify-between pt-16">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Number of Items:
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      {cartItems.length}
                    </p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Number of Landlords:
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      {totalLandlord}
                    </p>
                  </div>
                  <div class="flex items-center justify-between pt-5">
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      Number of Agencies:
                    </p>
                    <p class="text-base leading-none text-gray-800 dark:text-white">
                      {totalAgencies}
                    </p>
                  </div>
                </div>
                <div>
                  <div class="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                    <p class="text-2xl leading-normal text-gray-800 dark:text-white">
                      Send Proposal For All
                    </p>
                  </div>

                  <ButtonWithModal
                    modalContent={
                      <div>
                        <CreateCardProposal cartItems={cartItems} />
                      </div>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

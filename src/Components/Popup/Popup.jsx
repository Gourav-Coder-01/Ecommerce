import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <div>
      {orderPopup && ( // agar value truthy hai to baaki code chale wrna nhi
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4  shadow-md rounded-2xl bg-white duration-200 w-[300px] max-sm:w-[200px]" data-aos="fade-down">
              {/* header section */}
              <div className="flex items-center justify-between" >
                <div>
                  <h1>order now</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              {/* Form section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  className=" outline-0 w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="outline-0 w-full rounded-full border border-gray-300 px-2 py-1 mb-4"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full outline-0 rounded-full border border-gray-300 px-2 py-1 mb-4"
                />
              </div>
              <button className="px-2 py-1 bg-orange-400 text-white rounded-2xl w-full cursor-pointer hover:scale-101">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;

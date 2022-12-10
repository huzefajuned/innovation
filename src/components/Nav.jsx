import React, { useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

const Nav = () => {
  const user = useUserAuth();
  console.log(user);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user);
  console.log(isUserLoggedIn);

  return (
    <>
      {isUserLoggedIn == null ? (
        <nav class="flex items-center justify-between flex-row bg-teal-500 p-4">
          <div class="flex items-center  text-white mr-6 bg-red-900 w-2/12">
            <span class="font-semibold font-mono text-center justify-center p-2 ">
              Innov
            </span>
          </div>
          <div class="w-full  flex-row lg:flex lg:items-center lg:w-auto">
            <div>
              <a class="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                lOGIN
              </a>
            </div>
          </div>
        </nav>
      ) : (
        <nav class="flex items-center justify-between flex-row bg-teal-500 p-4">
          {/* if isUserLoggedIn is true? */}
          <div class="flex items-center  text-white mr-6 bg-red-900 w-2/12">
            <span class="font-semibold font-mono text-center justify-center p-2 ">
              Innov
            </span>
          </div>
          <div class="w-full  flex-row lg:flex lg:items-center lg:w-auto">
            <div>
              <a class="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                User @ {user?.user?.email}
              </a>
            </div>
          </div>
          <div class="w-full  flex-row lg:flex lg:items-center lg:w-auto">
            <div>
              <a class="block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                Logout
              </a>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};

export default Nav;

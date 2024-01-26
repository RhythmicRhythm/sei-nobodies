import { useContext, useState } from "react";
import { UserContext } from "../App";

const Success = () => {
  const {
    userAuth: { displayName },
    setUserAuth,
  } = useContext(UserContext);

  
  return (
    <div>
      <div className="mx-auto flex max-w-[500px] justify-center items-center px-6">
        <div className="flex w-full flex-col items-center mt-20">
          <h1 className="text-[40px] sm:text-[70px] text-white">
            CONGRATULATIONS
          </h1>
          <p className="text-4xl text-white mb-8">{displayName}</p>

          <div className="">
            <svg
              className="w-[150px] text-rose-700"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
             
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
              />
            </svg>
          </div>
          <p className="text-4xl text-white mb-8 text-center">
            You have sucessfuly applied to join Nobodies Tohen waitlist
          </p>
          <button className="rounded-md bg-rose-600 px-7 py-3 text-xl sm:text-3xl font-bold text-white hover:bg-rose-400">
            Share on Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;

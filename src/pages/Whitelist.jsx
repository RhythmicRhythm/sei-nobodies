import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";

const Whitelist = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCoursesData() {
      const data = await axios.get("https://sei-nobodies-backend.onrender.com/");

      setCourses(data.data);
      console.log(data.data);
    }
    getCoursesData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className=" mt-24">
        <div className=" px-4">
          {/* component */}
          <div className="flex flex-col overflow-x-auto text-white font-sans">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                  <table className="min-w-full text-left text-sm font-light">
                    <thead className="border-b-2 font-bold dark:border-rose-900 text-lg">
                      <tr>
                        <th scope="col" className="px-6 py-4">
                          #
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Twitter Username
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Discord Username
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Sei Wallet Address
                        </th>
                        <th scope="col" className="px-6 py-4">
                          Heading
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {courses.map((item, index) => (
                        <tr
                          key={item._id}
                          className="border-b dark:border-rose-900"
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-bold text-lg">
                          {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">{item.twitter_username}</td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">{item.discord_username}</td>
                          <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">{item.sei_address}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitelist;

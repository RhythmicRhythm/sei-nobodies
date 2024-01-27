import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import {CSVLink} from "react-csv";

const Whitelist = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCoursesData() {
      axios
        .get("https://sei-nobodies-backend.onrender.com/")
        .then(({ data }) => {
          setLoading(false);
          console.log(data);
          setCourses(data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
    getCoursesData();
  }, []);

  const dataToCSV = [
    // Define header row for CSV
    ["#", "Twitter Username", "Discord Username", "Sei Wallet Address", "NFT collection ?", "Community Intrest", "First Sei Presale?"],
    // Map courses data to CSV rows
    ...courses.map((item, index) => [
      index + 1,
      item.twitter_username,
      item.discord_username,
      item.sei_address,
      item.sei_address_2,
      item.sei_intrest,
      item.sei_presale
    ]),
  ];

  return (
    <div>
      <Navbar />
      <div className=" mt-24">
        <div className=" px-4">

        <div className="mx-auto flex max-w-[700px] justify-center items-center px-2">
          <div className="flex w-full flex-col items-center mt-10">
            <h1 className="text-[30px] sm:text-[60px] text-white">NOBODIES</h1>
            <p className="text-4xl text-white mb-8">Admin Pannel</p>
            </div>
            </div>
          {/* component */}
          <div className="flex flex-col overflow-x-auto text-white font-sans">
            <div className="">
              <CSVLink className="rounded-md bg-rose-600 px-7 py-3 text-base font-bold text-white hover:bg-rose-400" data={dataToCSV} filename="whitelist.csv">
                Download CSV
              </CSVLink>
            </div>
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
                         NFT collection ?
                        </th>
                        <th scope="col" className="px-6 py-4">
                         Community Intrest
                        </th>
                        <th scope="col" className="px-6 py-4">
                         First Sei Presale?
                        </th>
                      </tr>
                    </thead>
                    {loading ? (
                      <div className="mt-16 px-16 left-10">
                        <h1 className="text-[20px] sm:text-[40px] text-white r_animate">
                          loading...
                        </h1>
                       
                      </div>
                    ) : (
                      <tbody>
                        {courses.map((item, index) => (
                          <tr
                            key={item._id}
                            className="border-b dark:border-rose-900"
                          >
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-lg">
                              {index + 1}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.twitter_username}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.discord_username}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.sei_address}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.sei_address_2}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.sei_intrest}
                            </td>
                            <td className="whitespace-nowrap px-6 py-4 font-bold text-gray-300">
                              {item.sei_presale}
                            </td>
                            
                          </tr>
                        ))}
                      </tbody>
                    )}
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

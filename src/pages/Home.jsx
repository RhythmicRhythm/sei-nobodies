import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />

     <div className="bg-blue-400 mx-auto flex max-w-[500px] justify-center items-center">
      <div className="flex flex-col items-center">
      <h1 className='text-[100px] text-white'>
      NOBODIES
      </h1>
      <p className="text-4xl text-white">
        On Sei
      </p>
      </div>
     </div>
    </div>
  )
}

export default Home
import React from 'react';
import Navbar from '../components/Navbar';
import { authentication } from '../firebase-config';
import {  signInWithPopup, TwitterAuthProvider } from "firebase/auth";


const Home = () => {

  const SigninTwitter = () => {
    const provider = new TwitterAuthProvider();
    signInWithPopup(authentication, provider)
    .then((re) => {
      console.log(re);
    })
    .catch((err) => {
      console.log(err);
    })

  }

  return (
    <div>
      <Navbar />

     <div className="mx-auto flex max-w-[500px] justify-center items-center">
      <div className="flex flex-col items-center">
      <h1 className='text-[100px] text-white'>
      NOBODIES
      </h1>
      <p className="text-4xl text-white mb-8">
        On Sei
      </p>
      <button onClick={SigninTwitter}
              
              className="rounded-md bg-rose-600 px-7 py-3 text-4xl font-bold text-white hover:bg-rose-400"
            >
              Connect Twitter
            </button>
      </div>
     </div>
    </div>
  )
}

export default Home
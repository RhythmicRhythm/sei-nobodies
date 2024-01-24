import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { authentication } from './firebase-config';
import {  signInWithPopup, TwitterAuthProvider } from "firebase/auth";


function App() {

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
    <>
   <div className="">
   <h1 className="text-3xl font-bold underline text-red-600">
      Hello world!
    </h1>
    hello
    <button onClick={SigninTwitter}>
      connect da twitter
    </button>
   </div>
    </>
  )
}

export default App

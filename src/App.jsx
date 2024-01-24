import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { authentication } from './firebase-config';
import {  signInWithPopup, TwitterAuthProvider } from "firebase/auth";
import Home from "./pages/Home";


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
<Routes>
      <Route path="/" element={<Home />}>
      
      </Route>
    </Routes>
  )
}

export default App

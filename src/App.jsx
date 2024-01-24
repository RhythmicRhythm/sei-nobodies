import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { authentication } from './firebase-config';
import { getAuth, signInWithPopup, TwitterAuthProvider } from "firebase/auth";


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
    hello
    <button onClick={SigninTwitter}>
      connect da twitter
    </button>
   </div>
    </>
  )
}

export default App

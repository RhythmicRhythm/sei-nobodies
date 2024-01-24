import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TwitterLogin from 'react-twitter-login';

function App() {
  const [count, setCount] = useState(0)
  const onSuccess = (response) => {
    console.log('Twitter login successful!', response);
    // Store the access token or user data, or redirect to dashboard
  };

  const onFailure = (error) => {
    console.error('Twitter login failed:', error);
  };

  return (
    <>
   <div className="">
    hello
      <TwitterLogin
      loginUrl="https://api.twitter.com/oauth/authenticate"
      onFailure={onFailure}
      onSuccess={onSuccess}
      clientId="cQqW1802wFZNg1xBnu745Hkzs"
      clientSecret="g8B9MiLOlZb7rMFP3nEhcf01cZWxBCHWlN5RBYigmT1IUqnO2b"
    >
      <button>Login with Twitter</button>
    </TwitterLogin>
   </div>
    </>
  )
}

export default App

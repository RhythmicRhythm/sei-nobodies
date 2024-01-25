import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { lookInSession } from "./common/session";

import Home from "./pages/Home";
import About from "./pages/About";

export const UserContext = createContext({});

function App() {
  const [userAuth, setUserAuth] = useState({});

    useEffect(() => {
      let userInSession = lookInSession("user");

      userInSession ? setUserAuth(JSON.parse(userInSession)) : setUserAuth({displayName: null})
  }, [])

  return (
    <UserContext.Provider value={{ userAuth, setUserAuth }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;

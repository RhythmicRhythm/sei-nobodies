import { createContext, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { lookInSession } from "./common/session";

import Home from "./pages/Home";
import About from "./pages/About";

export const UserContext = createContext({});


function App() {

  const [userAuth, setUserAuth] = useState({});


  return (
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
        
      
   
    </Routes>
  )
}

export default App

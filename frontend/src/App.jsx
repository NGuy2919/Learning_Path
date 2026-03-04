import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Page/Home";
import AboutUs from "./page/AboutUs";
import Login from "./Page/Login";

function App() {

  return (
    <>
      <Home />
      {/* <AboutUs /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;

// import { useEffect } from "react";
// import { getHealth } from "./api"

// function App() {

//   useEffect(()=>{
//     getHealth().then(console.log)
//   },[])

//   return <h1>React Frontend</h1>
// }

// export default App
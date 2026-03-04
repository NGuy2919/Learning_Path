import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Component/Navbar";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import Login from "./Page/Login";
import Profile from "./Page/Profile";
// add other pages as needed

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Home />} /> {/* or a dedicated Course page */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* add additional <Route> entries for other pages */}
      </Routes>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Login from "./Pages/LoginRegister/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/LoginRegister/Register";
import Course from "./Pages/Course/Course";
import CourseDetail from "./Pages/CourseDetail/CourseDetail";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

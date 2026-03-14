import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs/AboutUs"
import Login from "./pages/LoginRegister/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/LoginRegister/Register";
import Course from "./pages/Course/Course";
import CourseDetail from "./pages/CourseDetail/CourseDetail";

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

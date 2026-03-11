import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import Login from "./Page/Login";
import Profile from "./Page/Profile";
import Register from "./Page/Register";
import Course from "./Page/Course";
import CourseDetail from "./Page/CourseDetail";

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

import "./App.css";
import AuthProvider from "./context/AuthProvider";
import { Routes, Route } from "react-router-dom";
import Login from "./components/shared/Login/Login";
import Register from "./components/shared/Register/Register";
import Home from "./components/home/Home/Home";
import Courses from "./components/courses/Courses/Courses";
import Course from "./components/courses/Course/Course";
import PrivateOutlet from "./components/shared/PrivateOutlet/PrivateOutlet";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/*" element={<PrivateOutlet />}>
          <Route path="course/:courseId" element={<Course />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;

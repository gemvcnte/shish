import About from "./pages/About";
import Dashboard from "./pages/Admin/Dashboard";
import Admins from "./pages/Admin/Admins";
import Announcements from "./pages/Admin/Announcements";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/announcements" element={<Announcements />} />
        <Route path="/admin/admins" element={<Admins />} />
      </Routes>
    </>
  );
}

export default App;

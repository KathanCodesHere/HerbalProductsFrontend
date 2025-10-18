import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Products from "./components/pages/Products";
import Contact from "./components/pages/Contact";
import ParticularProducts from "./components/pages//ParticularProducts";
import Dashboard from "./components/pages/Dashboard";
import About from './components/pages/About'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Wrap routes inside the layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ParticularProducts />} />
          <Route path="/dashboard" element={<Dashboard />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("yummy-user");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("yummy-user");
    setIsLoggedIn(false);
  };

  return (
    <>
      {showLogin && (
        <Login
          setShowLogin={setShowLogin}
          onLoginSuccess={() => setIsLoggedIn(true)}
        />
      )}
      <div className="app">
        <Navbar
          setShowLogin={setShowLogin}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;

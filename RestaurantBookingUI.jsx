// File: RestaurantBookingApp.jsx
import React, { useState, useEffect } from "react";

const RestaurantBookingApp = () => {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    requests: "",
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) setUser(savedUser);
  }, []);

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
      }));
    }
  }, [user]);

  const handleLogin = (email, password) => {
    const mockUser = {
      firstName: "Jane",
      lastName: "Doe",
      phone: "1234567890",
      email,
    };
    setUser(mockUser);
    localStorage.setItem("user", JSON.stringify(mockUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-gray-900 text-white">
        <div className="font-bold">FineDine</div>
        <div className="space-x-4">
          <a href="#menu">Menu</a>
          <a href="#book">Book Table</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          {user ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <button onClick={() => handleLogin("test@example.com", "pass")}>Login / Signup</button>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-96 flex items-center justify-center text-white text-4xl" style={{ backgroundImage: 'url("/banner.jpg")' }}>
        Reserve your table today
      </section>

      {/* Menu Preview Section */}
      <section id="menu" className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Steak", "Salmon", "Risotto"].map((dish, i) => (
          <div key={i} className="border p-4 rounded shadow">{dish}</div>
        ))}
      </section>

      {/* About Section */}
      <section id="about" className="p-4 flex gap-4 items-center">
        <img src="/restaurant.jpg" className="w-1/2" alt="about" />
        <p className="text-lg">Welcome to FineDine, where ambiance meets culinary excellence.</p>
      </section>

      {/* Booking Form */}
      <section id="book" className="p-4">
        <h2 className="text-2xl mb-4">Book a Table</h2>
        <form className="grid gap-2">
          {Object.keys(formData).map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field}
              value={formData[field]}
              onChange={(e) =>
                setFormData({ ...formData, [field]: e.target.value })
              }
              className="p-2 border"
            />
          ))}
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <p>Contact us: 555-5555 | Open Daily: 5PM - 11PM</p>
        <div>
          <iframe
            title="map"
            src="https://maps.google.com/maps?q=restaurant&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-64 mt-2"
          ></iframe>
        </div>
      </footer>
    </div>
  );
};

export default RestaurantBookingApp;

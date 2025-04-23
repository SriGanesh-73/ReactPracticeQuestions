// RestaurantBookingUI.jsx
import React, { useState, useEffect } from "react";
import "./RestaurantBookingUI.css";

const RestaurantBookingUI = () => {
  const [user, setUser] = useState(null);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    firstName: "", lastName: "", email: "", phone: "", password: "", confirmPassword: ""
  });
  const [bookingForm, setBookingForm] = useState({
    firstName: "", lastName: "", phone: "", guests: "", date: "", time: "", requests: ""
  });

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
      setBookingForm((prev) => ({
        ...prev,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        phone: savedUser.phone,
      }));
    }
  }, []);

  const handleLogin = () => {
    const demoUser = { firstName: "John", lastName: "Doe", phone: "1234567890", ...loginForm };
    localStorage.setItem("user", JSON.stringify(demoUser));
    setUser(demoUser);
  };

  const handleSignup = () => {
    if (signupForm.password !== signupForm.confirmPassword) return alert("Passwords do not match!");
    localStorage.setItem("user", JSON.stringify(signupForm));
    setUser(signupForm);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  const handleBooking = () => alert("Table booked successfully!");

  return (
    <div>
      <nav>
        <span>Restaurant Logo</span>
        <div>
          <a href="#">Menu</a>
          <a href="#">Book Table</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
          {user ? <button onClick={handleLogout}>Logout</button> : <>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignup}>Signup</button>
          </>}
        </div>
      </nav>
      <section className="hero">Reserve your table today</section>
      <section><h2>Popular Dishes</h2><div className="card">Dish 1</div><div className="card">Dish 2</div></section>
      <section><h2>About Us</h2><p>Fine dining in luxury.</p></section>
      {user && <section><h2>Book a Table</h2>
        {Object.keys(bookingForm).map((k) => <input key={k} placeholder={k} value={bookingForm[k]} onChange={(e) => setBookingForm({ ...bookingForm, [k]: e.target.value })} />)}
        <button onClick={handleBooking}>Submit</button></section>}
      <footer><p>Contact us | Hours | Map</p></footer>
    </div>
  );
};

export default RestaurantBookingUI;

// File: JobApplicationPortal.jsx
import React, { useState } from "react";

const JobApplicationPortal = () => {
  const [user, setUser] = useState(null);
  const [jobApplied, setJobApplied] = useState(null);
  const jobs = [
    { id: 1, title: "Frontend Developer", company: "TechCorp", location: "NYC", salary: "$90k" },
    { id: 2, title: "Backend Developer", company: "DevHouse", location: "Remote", salary: "$100k" },
  ];

  const handleLogin = (email, password) => {
    setUser({ email });
  };

  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="flex justify-between p-4 bg-blue-800 text-white">
        <div className="font-bold">CareerHub</div>
        <div className="space-x-4">
          <a href="#">Home</a>
          <a href="#jobs">Jobs</a>
          <a href="#apply">Apply</a>
          <a href="#myapps">My Applications</a>
          <a href="#login">Login</a>
          <a href="#register">Register</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-cover bg-center h-80 flex items-center justify-center text-white text-4xl" style={{ backgroundImage: 'url("/job-banner.jpg")' }}>
        Find your dream job today
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <div key={job.id} className="border p-4">
            <h3 className="font-bold text-xl">{job.title}</h3>
            <p>{job.company}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
            <button onClick={() => setJobApplied(job)}>Apply Now</button>
          </div>
        ))}
      </section>

      {/* Application Form */}
      {jobApplied && (
        <section id="apply" className="p-4">
          <h2 className="text-xl mb-2">Apply for {jobApplied.title}</h2>
          <form className="grid gap-2">
            {['First Name', 'Last Name', 'Email', 'Phone'].map((field, i) => (
              <input key={i} placeholder={field} className="p-2 border" />
            ))}
            <input type="file" className="p-2 border" />
          </form>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white p-4">
        <p>Careers | FAQs | Contact Us | Privacy Policy</p>
      </footer>
    </div>
  );
};

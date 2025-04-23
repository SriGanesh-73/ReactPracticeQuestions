// JobApplicationPortal.jsx
import React, { useState } from "react";
import "./JobApplicationPortal.css";

const JobApplicationPortal = () => {
  const [applicant, setApplicant] = useState({ firstName: "", lastName: "", email: "", phone: "", resume: "" });
  const jobs = [{ id: 1, title: "Frontend Dev", company: "Tech Inc", location: "NY", salary: "$70k" }];

  return (
    <div>
      <nav><span>Job Portal</span><div><a href="#">Home</a><a href="#">Jobs</a></div></nav>
      <section><h1>Find your dream job</h1><button>Browse Jobs</button></section>
      <section>{jobs.map(job => <div className="card" key={job.id}><h3>{job.title}</h3><p>{job.company}</p><button>Apply</button></div>)}</section>
      <section><h2>Apply</h2>
        {["firstName", "lastName", "email", "phone"].map(k => <input key={k} placeholder={k} onChange={e => setApplicant({ ...applicant, [k]: e.target.value })} />)}
        <input type="file" onChange={e => setApplicant({ ...applicant, resume: e.target.files[0].name })} />
      </section>
      <footer><p>Careers | FAQs | Contact</p></footer>
    </div>
  );
};

export default JobApplicationPortal;

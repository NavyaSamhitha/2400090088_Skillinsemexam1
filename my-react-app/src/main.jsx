Here is the code you were looking for. It appears to be identical to the original code you provided, except I added the missing React script tag URL.


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Placement Interaction System</title>
    <!-- ✅ React, ReactDOM, and Babel -->
    <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/@babel/standalone/babel.min.js"
    ></script>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: Arial, sans-serif;
        background: #f4f7fb;
        margin: 0;
      }
      header {
        background: #2563eb;
        color: white;
        text-align: center;
        padding: 1rem;
        font-size: 1.8rem;
        font-weight: bold;
      }
      nav {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background: #1e3a8a;
      }
      nav button {
        background: white;
        color: #1e3a8a;
        border: none;
        margin: 0.5rem;
        padding: 0.6rem 1.2rem;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
      }
      nav button:hover {
        background: #dbeafe;
      }
      .container {
        padding: 2rem;
        max-width: 900px;
        margin: auto;
      }
      .card {
        background: white;
        padding: 1.5rem;
        border-radius: 10px;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 1.5rem;
      }
      h2 {
        color: #1e3a8a;
      }
      input,
      select {
        width: 100%;
        padding: 0.6rem;
        margin: 0.5rem 0;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
      button.submit {
        background: #2563eb;
        color: white;
        border: none;
        padding: 0.6rem 1.2rem;
        border-radius: 6px;
        cursor: pointer;
        margin-top: 0.5rem;
      }
      button.submit:hover {
        background: #1d4ed8;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 1rem;
      }
      th,
      td {
        padding: 0.8rem;
        border: 1px solid #ccc;
        text-align: left;
      }
      th {
        background: #2563eb;
        color: white;
      }
    </style>
  </head>
  <body>
    <header>Placement Interaction System</header>
    <div id="root"></div>
    <script type="text/babel">
      const AdminPanel = () => {
        const [users, setUsers] = React.useState([
          { id: 1, name: "Riya", role: "Student" },
          { id: 2, name: "TechCorp", role: "Employer" },
        ]);
        const [name, setName] = React.useState("");
        const [role, setRole] = React.useState("Student");
        const addUser = () => {
          if (name.trim()) {
            setUsers([...users, { id: users.length + 1, name, role }]);
            setName("");
          }
        };
        return (
          <div className="container">
            <h2>Admin Dashboard</h2>
            <div className="card">
              <h3>Add New User</h3>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option>Student</option>
                <option>Employer</option>
                <option>Placement Officer</option>
              </select>
              <button className="submit" onClick={addUser}>
                Add User
              </button>
              <h3>All Users</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td>{u.id}</td>
                      <td>{u.name}</td>
                      <td>{u.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      };
      const StudentPortal = () => {
        const [jobs] = React.useState([
          { id: 1, company: "TechCorp", title: "Software Engineer" },
          { id: 2, company: "DataWorks", title: "Data Analyst" },
        ]);
        const [applied, setApplied] = React.useState([]);
        const applyJob = (job) => {
          if (!applied.includes(job.id)) {
            setApplied([...applied, job.id]);
            alert(`Applied for ${job.title} at ${job.company}`);
          }
        };
        return (
          <div className="container">
            <h2>Student Portal</h2>
            <div className="card">
              <h3>Available Job Opportunities</h3>
              <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Title</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((job) => (
                    <tr key={job.id}>
                      <td>{job.company}</td>
                      <td>{job.title}</td>
                      <td>
                        <button
                          className="submit"
                          onClick={() => applyJob(job)}
                        >
                          {applied.includes(job.id) ? "Applied" : "Apply"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      };
      const EmployerPortal = () => {
        const [jobs, setJobs] = React.useState([]);
        const [company, setCompany] = React.useState("");
        const [title, setTitle] = React.useState("");
        const postJob = () => {
          if (company && title) {
            setJobs([...jobs, { id: jobs.length + 1, company, title }]);
            setCompany("");
            setTitle("");
          }
        };
        return (
          <div className="container">
            <h2>Employer Portal</h2>
            <div className="card">
              <h3>Post a Job</h3>
              <input
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
              <input
                placeholder="Job Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <button className="submit" onClick={postJob}>
                Post Job
              </button>
              <h3>Job Listings</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Company</th>
                    <th>Title</th>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map((j) => (
                    <tr key={j.id}>
                      <td>{j.id}</td>
                      <td>{j.company}</td>
                      <td>{j.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      };
      const PlacementOfficerPortal = () => {
        const [records, setRecords] = React.useState([
          { id: 1, student: "Riya", company: "TechCorp", status: "Placed" },
          { id: 2, student: "Arjun", company: "DataWorks", status: "Pending" },
        ]);
        return (
          <div className="container">
            <h2>Placement Officer Dashboard</h2>
            <div className="card">
              <h3>Placement Records</h3>
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Student</th>
                    <th>Company</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((r) => (
                    <tr key={r.id}>
                      <td>{r.id}</td>
                      <td>{r.student}</td>
                      <td>{r.company}</td>
                      <

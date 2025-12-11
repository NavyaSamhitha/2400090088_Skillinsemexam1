<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Placement Portal</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header>
    <h1>Placement Interaction System</h1>
    <nav>
      <button onclick="showSection('admin')">Admin</button>
      <button onclick="showSection('student')">Student</button>
      <button onclick="showSection('employer')">Employer</button>
      <button onclick="showSection('officer')">Placement Officer</button>
    </nav>
  </header>

  <main>
    <section id="admin" class="role-section">
      <h2>Admin Panel</h2>
      <button onclick="alert('Manage system settings')">System Settings</button>
      <button onclick="alert('Manage user roles')">User Roles</button>
      <button onclick="alert('View placement data')">Placement Data</button>
    </section>

    <section id="student" class="role-section">
      <h2>Student Dashboard</h2>
      <input type="text" placeholder="Search jobs..." />
      <button onclick="alert('Searching jobs')">Search</button>
      <button onclick="alert('Applied successfully')">Apply</button>
      <button onclick="alert('Tracking application status')">Track Status</button>
    </section>

    <section id="employer" class="role-section">
      <h2>Employer Portal</h2>
      <form>
        <input type="text" placeholder="Job Title" required />
        <textarea placeholder="Job Description" required></textarea>
        <button type="submit">Post Job</button>
      </form>
      <button onclick="alert('Reviewing applications')">Review Applications</button>
    </section>

    <section id="officer" class="role-section">
      <h2>Placement Officer</h2>
      <button onclick="alert('Tracking placement records')">Track Records</button>
      <button onclick="alert('Generating reports')">Generate Reports</button>
      <button onclick="alert('Facilitating interactions')">Facilitate Interactions</button>
    </section>
  </main>

  <script src="script.js"></script>
</body>
</html>
import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AuthContext from "./context/AuthProvider.jsx";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    const { employees, admin } = authData;
    const employeeUser = employees.find(
      (employee) => employee.email === email && employee.password === password
    );
    if (employeeUser) {
      setUser("user");
    } else if (admin.length > 0 && admin[0].email === email && admin[0].password === password) {
      setUser("admin");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen w-full dark:bg-zinc-900 dark:text-white p-4">
      <div>
        {!user && <Login handleLogin={handleLogin} />}
        {user === "user" && <EmployeeDashboard />}
        {user === "admin" && <AdminDashboard />}
      </div>
    </div>
  );
}

export default App;

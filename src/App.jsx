import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AuthContext from "./context/AuthProvider.jsx";

function App() {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  

  const handleLogin = (email, password) => {
    
    if (authData.admin.email === email && authData.admin.password === password) {
      setUser("admin");
    } else {
      const employee = authData.employees.find(
        (employee) => employee.email === email && employee.password === password
      );
      if (employee) {
        setUser("user");
      } else {
        alert("Invalid credentials");
      }
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

import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  const [user, setUser] = useState(null);
  // const data = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "admin") {
      setUser("admin");
    } else if (email === "user@me.com" && password === "user") {
      setUser("user");
    } else {
      console.log("Invalid credentials");
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

import { useState } from "react";
import Login from "./components/Auth/Login";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  const [user, setUser] = useState(null);
  const [isEmployee, setIsEmployee] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (email, password) => {
    const employee = employees.find(
      (employee) => employee.email === email && employee.password === password
    );
    const admin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );

    if (employee) {
      setUser(employee);
      setIsEmployee(true);
    } else if (admin) {
      setUser(admin);
      setIsAdmin(true);
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="dark:bg-zinc-900 dark:text-white w-full h-[1000px] m-0">
      {!user ? <Login /> : <EmployeeDashboard />}
      {/* <EmployeeDashboard />
      <AdminDashboard /> */}
    </div>
  );
}

export default App;

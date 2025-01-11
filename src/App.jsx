import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";

function App() {
  return (
    <>
      <div className="dark:bg-zinc-900 dark:text-white w-full h-[1000px] m-0">
        {/* <Login /> */}
        <EmployeeDashboard />
      </div>
    </>
  );
}

export default App;

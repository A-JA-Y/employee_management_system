const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
  },
];
employees.forEach((employee) => {
    employee.tasks = [
        {
            title: "Project Setup",
            description: "Initialize the project repository",
            date: "2023-10-01",
            category: "Setup",
            active: true,
            newTask: false,
            completed: false,
            failed: false,
        },
        {
            title: "Code Review",
            description: "Review pull requests from teammates",
            date: "2023-10-05",
            category: "Review",
            active: false,
            newTask: true,
            completed: false,
            failed: false,
        },
        {
            title: "Documentation",
            description: "Update the project's README file",
            date: "2023-10-10",
            category: "Docs",
            active: false,
            newTask: false,
            completed: false,
            failed: false,
        },
    ];
});
const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
    
}
export const getLocalStorage = () => {
  const employeesData = localStorage.getItem("employees");
  const adminData = localStorage.getItem("admin");
  const employees = employeesData ? JSON.parse(employeesData) : [];
  const admin = adminData ? JSON.parse(adminData) : [];
  return { employees, admin };
}






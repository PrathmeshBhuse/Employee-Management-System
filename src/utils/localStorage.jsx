const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "1234",
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Prepare Monthly Financial Report",
        description: "Compile and analyze financial data for the month.",
        date: "2024-12-11",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Review Budget Allocation",
        description: "Assess budget usage for different departments.",
        date: "2024-12-12",
        category: "Finance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "1234",
    taskNumbers: { active: 2, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Plan Team-Building Activities",
        description: "Organize engaging activities to boost team morale.",
        date: "2024-12-15",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update Employee Records",
        description: "Ensure all employee information is current.",
        date: "2024-12-13",
        category: "Admin",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Schedule Appraisal Meetings",
        description: "Plan performance reviews for all employees.",
        date: "2024-12-16",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Arjun",
    email: "employee3@example.com",
    password: "1234",
    taskNumbers: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Debug Website Issues",
        description: "Identify and resolve existing bugs on the company website.",
        date: "2024-12-12",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Implement New Login Feature",
        description: "Develop and integrate a secure login system.",
        date: "2024-12-14",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 4,
    firstName: "Ishaan",
    email: "employee4@example.com",
    password: "1234",
    taskNumbers: { active: 2, newTask: 2, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Draft Client Proposals",
        description: "Create detailed proposals for potential clients.",
        date: "2024-12-10",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Follow Up with Leads",
        description: "Contact prospective clients for feedback and next steps.",
        date: "2024-12-11",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Create Sales Presentation",
        description: "Design a compelling pitch deck for client meetings.",
        date: "2024-12-12",
        category: "Sales",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 5,
    firstName: "Reyansh",
    email: "employee5@example.com",
    password: "1234",
    taskNumbers: { active: 1, newTask: 1, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Design Social Media Campaign",
        description: "Develop visuals and copy for the holiday campaign.",
        date: "2024-12-11",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Launch Google Ads Campaign",
        description: "Set up and optimize the new Google Ads campaign.",
        date: "2024-12-13",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 6,
    firstName: "Kian",
    email: "employee6@example.com",
    password: "1234",
    taskNumbers: { active: 1, newTask: 0, completed: 1, failed: 0 },
    tasks: [
      {
        title: "Generate Weekly Analytics",
        description: "Prepare a report summarizing website analytics.",
        date: "2024-12-10",
        category: "Data Analysis",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Optimize Database Performance",
        description: "Improve query performance and reduce latency.",
        date: "2024-12-15",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    firstName: "Aditya",
    email: "admin@example.com",
    password: "1234"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees));
  localStorage.setItem('admin', JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'));
  const admin = JSON.parse(localStorage.getItem('admin'));

  return { employees, admin };
};

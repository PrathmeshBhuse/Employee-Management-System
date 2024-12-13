import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './contex/AuthProvider'

const App = () => {
 
  useEffect(() => {
    setLocalStorage()
    getLocalStorage()
  })

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(() => {
    try {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (loggedInUser) {
        setUser(loggedInUser.role);
        setLoggedInUserData(loggedInUser.data || null);
      } else {
        console.log("No loggedInUser found in localStorage.");
      }
    } catch (error) {
      console.error("Error parsing loggedInUser from localStorage:", error);
      // Clear corrupted data if any
      localStorage.removeItem("loggedInUser");
    }
  }, [userData]);
  
  

  

  const handleLogin = (email, password) => {
    console.log("Attempting login with:", email, password);
  
    // Check if the user is an admin
    if (email === 'admin@me.com' && password === '1234') {
      const admin = { firstname: "Admin", lastname: "User", email: "admin@me.com" };
      setUser('admin');
      setLoggedInUserData(admin);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin }));
      console.log("Admin Logged In:", admin);
      return; // Exit function as the admin is logged in
    }
  
    // Check if the user is an employee
    if (userData) {
      const employee = userData.find((e) => e.email === email && e.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
        console.log("Employee Logged In:", employee);
        return; // Exit function as the employee is logged in
      }
    }
  
    // If neither admin nor employee credentials match
    alert("Invalid credentials");
  };
  
  

 
  
  

  return (
   <>
   
   {
    !user ? <Login handleLogin={handleLogin}/> : ''
   }
   {
    user== 'admin'? <AdminDashboard changeUser={setUser}/> : (user === 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData}/>:null)
    
    }
    
   
   
   {/* <EmployeeDashboard/> */}
   {/* <AdminDashboard/> */}
   </>
  )
}

export default App

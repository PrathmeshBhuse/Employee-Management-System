import React, { useContext } from "react";
import { AuthContext } from "../../contex/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg mt-5 shadow-lg">
    {/* Header */}
    <div className="bg-gray-800 text-white mb-3 py-3 px-5 flex justify-between rounded-lg shadow-md">
        <h2 className="w-1/5 text-sm font-semibold text-center">Employee Name</h2>
        <h3 className="w-1/5 text-sm font-semibold text-center">New Task</h3>
        <h5 className="w-1/5 text-sm font-semibold text-center">Active Task</h5>
        <h5 className="w-1/5 text-sm font-semibold text-center">Completed</h5>
        <h5 className="w-1/5 text-sm font-semibold text-center">Failed</h5>
    </div>

    {/* Employee Rows */}
    <div>
        {userData.map((ele) => (
            <div 
                key={ele.firstName}
                className="bg-gray-700 text-white py-3 px-5 flex justify-between rounded-lg mb-3 shadow hover:bg-gray-600 transition duration-300"
            >
                <h2 className="w-1/5 text-sm text-center">{ele.firstName}</h2>
                <h3 className="w-1/5 text-sm text-center">{ele.taskNumbers.newTask}</h3>
                <h5 className="w-1/5 text-sm text-center">{ele.taskNumbers.active}</h5>
                <h5 className="w-1/5 text-sm text-center">{ele.taskNumbers.completed}</h5>
                <h5 className="w-1/5 text-sm text-center">{ele.taskNumbers.failed}</h5>
            </div>
        ))}
    </div>
</div>

  );
};

export default AllTask;

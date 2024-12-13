import React, { useContext, useState } from "react";
import { AuthContext } from "../../contex/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    data.forEach(function (ele) {
      if (assignTo == ele.firstName) {
        ele.tasks.push(newTask);
        ele.taskNumbers.newTask = ele.taskNumbers.newTask + 1;
      }
    });
    setUserData(data);
    console.log(data);

    setTaskTitle("");
    setAssignTo("");
    setCategory("");
    setTaskDate("");
    setTaskDescription("");
  };

  return (
    <div className="p-7 bg-gradient-to-br from-gray-800 via-gray-900 to-black mt-7 rounded shadow-xl">
      <form
        action=""
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between gap-6"
      >
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1 font-medium">Task Title</h3>
            <input
              type="text"
              value={taskTitle}
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              placeholder="Enter Your Task Title"
              className="text-sm py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-700 text-gray-100 border-[1px] border-gray-600 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1 font-medium">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="text-sm py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-700 text-gray-100 border-[1px] border-gray-600 focus:ring-2 focus:ring-blue-500"
              type="date"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1 font-medium">Assign To</h3>
            <input
              value={assignTo}
              onChange={(e) => {
                setAssignTo(e.target.value);
              }}
              className="text-sm py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-700 text-gray-100 border-[1px] border-gray-600 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div className="mb-4">
            <h3 className="text-sm text-gray-300 mb-1 font-medium">Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-2 px-4 w-full md:w-4/5 rounded-lg outline-none bg-gray-700 text-gray-100 border-[1px] border-gray-600 focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-full md:w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-1 font-medium">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-44 text-sm py-2 px-4 rounded-lg outline-none bg-gray-700 text-gray-100 border-[1px] border-gray-600 focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;

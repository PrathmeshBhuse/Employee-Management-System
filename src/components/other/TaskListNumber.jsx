import React from 'react';

const TaskListNumber = ({ data }) => {
  return (
    <div className='flex mt-10 justify-between flex-wrap gap-5'>
      <div className='px-8 py-6 rounded-xl w-full sm:w-[45%] bg-gradient-to-r from-red-400 to-red-300 shadow-lg transform hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{data.taskNumbers.newTask}</h2>
        <h3 className='text-lg font-medium text-white mt-2'>New Task</h3>
      </div>
      <div className='px-8 py-6 rounded-xl w-full sm:w-[45%] bg-gradient-to-r from-blue-700 to-[#074799] shadow-lg transform hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{data.taskNumbers.completed}</h2>
        <h3 className='text-lg font-medium text-white mt-2'>Completed Task</h3>
      </div>
      <div className='px-8 py-6 rounded-xl w-full sm:w-[45%] bg-gradient-to-r from-orange-500 to-[#F26B0F] shadow-lg transform hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{data.taskNumbers.active}</h2>
        <h3 className='text-lg font-medium text-white mt-2'>Active Task</h3>
      </div>
      <div className='px-8 py-6 rounded-xl w-full sm:w-[45%] bg-gradient-to-r from-green-700 to-[#1F4529] shadow-lg transform hover:scale-105 transition-transform duration-300'>
        <h2 className='text-4xl font-bold text-white'>{data.taskNumbers.failed}</h2>
        <h3 className='text-lg font-medium text-white mt-2'>Failed Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumber;

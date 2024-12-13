import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-[#F39F5A] rounded-xl ">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-400 text-sm px-3 py-1 rounded">{data.category}</h3>
            <h4  className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-3">{data.description}</p>

        <div className="mt-2">
            <button className="w-full bg-gray-300 text-black rounded">Completed</button>
          </div>
      </div>
  )
}

export default CompleteTask

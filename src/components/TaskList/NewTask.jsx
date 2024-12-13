import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-[#40534C] rounded-xl ">
        <div className="flex justify-between items-center">
            <h3 className="bg-red-400 text-sm px-3 py-1 rounded">{data.category}</h3>
            <h4  className="text-sm">{data.date}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
        <p className="text-sm mt-3">{data.description}</p>
        <div className='mt-4'>
            <button className='bg-red-400 py-1 px-2 text-sm rounded '>Accept Task</button>
        </div>
      </div>
  )
}

export default NewTask

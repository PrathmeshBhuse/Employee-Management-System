import React from 'react'

const AcceptList = ({data}) => {
  console.log(data)
  return (
    <div className="h-full w-[300px] flex-shrink-0 p-5 bg-[#921A40] rounded-xl ">
    <div className="flex justify-between items-center">
        <h3 className="bg-red-400 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4  className="text-sm">{data.date}</h4>
    </div>
    <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
    <p className="text-sm mt-3">{data.description}</p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-400 py-1 px-2 text-sm rounded' >Mark As Failed</button>
        <button className='bg-red-400 py-1 px-2 text-sm rounded '>Make As Completed</button>
    </div>
  </div>
  )
}

export default AcceptList

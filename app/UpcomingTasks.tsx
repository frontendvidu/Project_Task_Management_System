import React from 'react'
import TaskBox from './TaskBox'

const UpcomingTasks = () => {
  return (
    <div className='flex flex-col bg-white w-[688px] h-[704px] gap-5'>
        <h2 className='font-semibold text-2xl leading-normal text-blue-900 tracking-tight'>Upcoming Task</h2>
        <div className='w-[688px] flex justify-center gap-5 flex-wrap bg-white'>
            <TaskBox />
            <TaskBox />
            <TaskBox />
            <TaskBox />
        </div>
    </div>
  )
}

export default UpcomingTasks
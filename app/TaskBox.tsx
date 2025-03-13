import React from 'react'

const TaskBox = () => {
  return (
    <div className='w-[328px] h-[314px] rounded-lg bg-white flex flex-col content-center justify-between gap-4 p-4'>
        <img src="./BlogImage.png" alt="" />
        <span className='flex flex-col w-full bg-white'>
            <h3 className='font-semibold text-base task-heading'>Creating mobile app design</h3>
            <p className='font-medium text-xs letter-spacing-2 paraUIUX'>UI UX Design</p>
        </span>
        <h5 className='text-base font-medium letter-spacing-2 leading-normal text-black'>Progress</h5>
        {/* progress bar */}
        <p className='text-base font-medium letter-spacing-2 leading-normal text-black'>3 days left</p>
    </div>
  )
}

export default TaskBox
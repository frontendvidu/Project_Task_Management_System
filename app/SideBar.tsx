import { TabNav } from '@radix-ui/themes'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col justify-start content-center bg-white w-[252px] min-h-full'>
      <TabNav.Root className="flex flex-col space-y-2 bg-white">
        <TabNav.Link href='#'>LOGO</TabNav.Link>
        <TabNav.Link href='#'>Overview</TabNav.Link>
        <TabNav.Link href='#'>Tasks</TabNav.Link>
        <TabNav.Link href='#'>Mentors</TabNav.Link>
        <TabNav.Link href='#'>Message</TabNav.Link>
        <TabNav.Link href='#'>Settings</TabNav.Link>
      </TabNav.Root>
      <div>
        Help center
      </div>
    </div>
  )
}

export default SideBar
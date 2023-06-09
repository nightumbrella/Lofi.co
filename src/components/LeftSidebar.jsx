import React from 'react'
import {GiSettingsKnobs} from 'react-icons/gi'
import {IoIosColorFilter} from 'react-icons/io'
import {LuImage} from 'react-icons/lu'
import {TbLayoutGridAdd} from 'react-icons/tb'
const LeftSidebar = () => {
  return (
    <div className='absolute right-5 top-2/4 -translate-y-2/4 bg-black/[.8] backdrop-blur-md text-white px-3 py-8 flex gap-10 flex-col rounded-md'>
        <div>
            <GiSettingsKnobs className='text-xl cursor-pointer'/>
        </div>
        <div>
            <IoIosColorFilter className='text-xl cursor-pointer'/>
        </div>
        <div>
            <LuImage className='text-xl cursor-pointer'/>
        </div> 
        <div>
            <TbLayoutGridAdd className='text-xl cursor-pointer'/>
        </div>
        
    </div>
  )
}

export default LeftSidebar
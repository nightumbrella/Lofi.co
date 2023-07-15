import React from 'react'

const MenuList = ({icons,menuTitle}) => {
    return (
        <div className='mb-1'>
            <h2 className='flex items-center gap-1 hover:text-[#878787] duration-300 hover:translate-x-2'>
            {icons}
            {menuTitle}
            </h2>
        </div>
    )
}

export default MenuList
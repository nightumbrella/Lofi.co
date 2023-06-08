import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-[1800px] mx-auto'>
        {children}
    </div>
  )
}

export default Wrapper
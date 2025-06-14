import React from 'react'

export const Loading = () => {
  return (
    <div className='flex items-center justify-center h-70'>
      <div className='animate-spin border-4 w-[5vmax] h-[5vmax] border-t-transparent rounded-full'></div>
    </div>
  )
}
export default Loading
import React from 'react'

function Background() {
  return (
    <div className='fixed z-[2] w-full h-screen'>
        <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-200 text-xl font-thin'>Documents</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-zinc-200 text-[17vw] leading-none tracking-tighter' >Docs.</h1>
    </div>
  )
}

export default Background
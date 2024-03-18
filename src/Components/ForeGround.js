import React, { useRef } from 'react'
import Card from './Card'

function ForeGround() {

   const ref = useRef(null)

  const data =[
    {
      desc:"Organize files wisely; chaos breeds confusion, order fosters efficiency.",
      fileSize:"5mb",
      close:false,
      tag:{isOpen:true,tagText:"Download Now",tagColor:"green"}
    },
    {
      desc:"File systems mirror our mental landscapes; tidy them both.",
      fileSize:"12mb",
      close:true,
      tag:{isOpen:true,tagText:"Downloading",tagColor:"blue"}
    },
    {
      desc:"The devil's in the details; manage your files meticulously.",
      fileSize:".9mb",
      close:false,
      tag:{isOpen:false,tagText:"Download Now",tagColor:"green"}
    },
    {
      desc:"Digital clutter suffocates productivity; tidy files, clear mind",
      fileSize:"6.8mb",
      close:false,
      tag:{isOpen:true,tagText:"Download Now",tagColor:"green"}
    },
  ]

  return (
    <div ref={ref} className='fixed z-[3] w-full h-screen flex gap-10 flex-wrap p-5'>
       {data.map((item,idx)=>(
          <Card data={item} reference={ref} />
       ))}
    </div>
  )
}

export default ForeGround
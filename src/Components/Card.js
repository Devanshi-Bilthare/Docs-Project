import React from 'react'
import { motion } from "framer-motion"
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Card({data,reference}) {

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }} className='relative w-60 h-72 bg-zinc-300 rounded-[50px] py-10 px-5 overflow-hidden shrink-0'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 leading-5 tracking-tight'>
          {data.desc}
        </p>
        <div className='footer absolute left-0 bottom-0  w-full'>
          <div className='flex justify-between items-center py-3 px-8 mb-2'>
            <h5>{data.fileSize}</h5>
            {data.close ? <IoIosCloseCircleOutline/> : <MdOutlineFileDownload/>}  
          </div>

          {
            data.tag.isOpen && (
              <div className={`tag w-full ${data.tag.tagColor === 'blue' ? 'bg-blue-600' :'bg-green-600'} py-4 flex items-center justify-center`}>
              <h3 className='text-sm'>{data.tag.tagText}</h3>
              </div>
            )
          }
         
        </div>
    </motion.div>
  )
}

export default Card
import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data, reference }) {
  
  // Dynamic color mapping for Tailwind classes
  const colorMap = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    orange: "bg-orange-600",
    purple: "bg-purple-600",
    yellow: "bg-yellow-500",
    emerald: "bg-emerald-600",
    sky: "bg-sky-500",
    zinc: "bg-zinc-600",
  };

  return (
    <motion.div 
      drag 
      dragConstraints={reference} 
      whileDrag={{ scale: 1.1 }} 
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className='relative shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-zinc-100 px-8 py-10 overflow-hidden m-1'
    >
      <FaRegFileAlt />
      <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
      
      <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center justify-between mb-3 py-3 px-8'>
          <h5 className='text-sm'>{data.fileSize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center cursor-pointer'>
            {data.close ? <IoClose size=".8em" /> : <LuDownload size=".8em" color='#fff' />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${colorMap[data.tag.tagColor] || "bg-blue-600"} flex items-center justify-center cursor-pointer`}>
            <h5 className='font-semibold text-sm'>{data.tag.tagTitle}</h5>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default Card
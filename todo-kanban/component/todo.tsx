"use client"

import {motion} from "motion/react"

interface TodoProp {
    text:string;
    type?: 'backlog' | 'todo' | 'inprogress' | 'completed';
}


export function Todo(props:TodoProp){
    const {text,type} = props


    return(
        <motion.div 
        drag
        whileHover={{ scale: 1.1 }}
        transition={{duration:0.3}}
     

        className="flex items-center hover:cursor-grab active:cursor-grabbing gap-1 mt-3 p-4 bg-slate-700 rounded-xl ">
            {type== 'backlog' ? <div className="w-3 h-3 rounded-full bg-slate-500"></div> : <div></div>}
            {type== 'todo' ? <div className="w-3 h-3 rounded-full bg-red-500"></div> : <div></div>}
            {type == 'inprogress' ? <div className="w-3 h-3 rounded-full bg-yellow-500"></div> : <div></div>}
            {type == 'completed' ? <div className="w-3 h-3 rounded-full bg-green-500"></div>:<div></div>}
            {text}
        </motion.div>
    )
}



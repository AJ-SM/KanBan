"use client"

import { TodoProp } from "./todo";

interface ColProp{
    type:'backlog' | 'todo' | 'inprogress' | 'completed';
    items:TodoProp;


}


export function Columns(props:ColProp){

    const {type} = props
    let color = "";
   let title = "";
    
  switch (type) {
    case 'backlog':
      color = "text-slate-400";
      title = "BACKLOG";
      break;
    case 'todo':
      color = "text-red-500";
      title = "TODO";
      break;
    case 'inprogress':
      color = "text-yellow-300";
      title = "IN PROGRESS";
      break;
    case 'completed':
      color = "text-green-500";
      title = "COMPLETED";
      break;
  }

    return(
        <div className="w-80 h-auto bg-slate-800 p-7 rounded-xl">
        <div className= {`ml-18 ${color} felx justify-center items-center`}> {title}</div>
        
        </div>
    )
}
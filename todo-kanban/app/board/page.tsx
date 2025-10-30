
"use client"
import { Todo } from "@/component/todo"
import { Columns } from "@/component/columns"
import { useState } from "react"

export default function Board(){
    const DefaultItems = [
  {
    "id": 1,
    "text": "Brainstorm feature ideas",
    "type": "backlog"
  },
  {
    "id": 2,
    "text": "Design app wireframes",
    "type": "backlog"
  },
  {
    "id": 3,
    "text": "Set up React project structure",
    "type": "todo"
  },
  {
    "id": 4,
    "text": "Implement authentication flow",
    "type": "inprogress"
  },
  {
    "id": 5,
    "text": "Integrate Framer Motion animations",
    "type": "inprogress"
  },
  {
    "id": 6,
    "text": "Fix layout responsiveness",
    "type": "completed"
  },
  {
    "id": 7,
    "text": "Deploy to Vercel",
    "type": "completed"
  }
]
    const [items,setitems]=useState<object[]>(DefaultItems);


    return(
        <div className=" flex justify-center items-center w-screen h-screen bg-slate-900">
            <div className="flex gap-8">
                <Columns type="todo" items={items}/>
                <Columns type="backlog"/>
                <Columns type="inprogress"/>
                <Columns type="completed"/>
            </div>
            
        </div>
    )
}
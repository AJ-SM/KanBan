
import { Todo } from "@/component/todo"

export default function Board(){

    return(
        <div className=" flex justify-center items-center w-screen h-screen bg-slate-900">
            <div className="flex gap-8">
                <div className="w-80 h-auto bg-slate-800 p-7 rounded-xl">
                    <div className=" ml-18 text-slate-400 felx justify-center items-center" >BLACKLOG</div>

                </div>

                <div className="w-80 h-auto bg-slate-800 p-7 rounded-xl">
                    <div className="ml-18 text-red-500 felx justify-center items-center" >TODO</div>
                    <Todo text="Hellow nigger" type="completed"/>
                    <Todo text="Hellow nigger" type="inprogress"/>
                    <Todo text="Hellow nigger" type="backlog"/>
                    <Todo text="Hellow nigger" type="todo"/>
                    <Todo text="Hellow nigger"/>
                    <Todo text="Hellow nigger"/>

                </div>

                <div className="w-80 h-auto bg-slate-800 p-7 rounded-xl">
                    <div className="ml-18 text-yellow-300 felx justify-center items-center" >INPROGRESS</div>

                </div>

                <div className="w-80 h-auto bg-slate-800 p-7 rounded-xl">
                    <div className="ml-18 text-green-500 felx justify-center items-center" >COMPLETED</div>

                </div>

                

                

            </div>
            
        </div>
    )
}
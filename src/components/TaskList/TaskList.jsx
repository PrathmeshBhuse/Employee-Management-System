import React from "react";
import AcceptList from "./AcceptList";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className="h-[58%] p-5 overflow-x-auto  w-full flex items-center justify-start gap-5 flex-nowrap  mt-10 ">
 
      {
        data.tasks.map((ele ,idx)=>{
          if(ele.active){
            return <AcceptList key={idx} data={ele}/>
          }
          if(ele.newTask){
            return <NewTask key={idx} data={ele}/>
          }
          if(ele.completed){
            return <CompleteTask key={idx} data={ele}/>
          }
          if(ele.failed){
            return <FailedTask key={idx} data={ele}/>
          }
        })
      }
    </div>
  );
};

export default TaskList;

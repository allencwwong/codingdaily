import { useState } from "react";

export const Day6= () => {
  const INITIAL_LIST = {
    "Organize closet": [
      { "Donate old clothes and shoes": false },
      { "Buy new shelf": false },
      { "Put in shelf by color": false },
    ],
    "Finish homework": [
      { "Finish math homework": false },
      { "Finish science homework": false },
      { "Finish Reactjs homework": false },
    ],
    "Achieve nirvana": [
      { "Meditate a little": false },
      { "Gain some wisdom": false },
    ],
  };

  const [todoList,setToDoList] = useState(INITIAL_LIST)

  const handleToggleToDo = (key,todoIdx)=>{
    const todoKey = Object.keys(todoList[key][todoIdx])[0]
    const newList = Object.assign({},todoList)
    console.log(key,todoKey,newList[key][todoIdx][todoKey])

    newList[key][todoIdx][todoKey] = !newList[key][todoIdx][todoKey]
    console.log(newList)
    setToDoList(newList)
  }

  const ToDoList = ({todo,title})=>{
    
    const Clist = ()=>{
      return todo.map((task,idx)=>{
        const key = Object.keys(task)
        if(task[key]) return <p onClick={()=>handleToggleToDo(title,idx)}>{key}</p>
        return null
      })
    }

      const Ilist = ()=>{
        return todo.map((task,idx)=>{
          const key = Object.keys(task)
          if(!task[key]) return <p onClick={()=>handleToggleToDo(title,idx)}>{key}</p>
          return null
        })
      }

    return(
      <>
        <h2>{title}</h2>
        <div>
          <div>
            <h2>Completed</h2>
            <ul>
              <Clist/>
            </ul>
          </div>
          <div>
            <h2>Incompleted</h2>
            <ul>
              <Ilist/>
            </ul>
          </div>
        </div>
      </>
    )
  }

    return (
      <>
        {/* loop thru list */}
        {
          Object.keys(todoList).map(todoData=><ToDoList todo={todoList[todoData]} title={todoData} />)
        }
      </>
    );
}
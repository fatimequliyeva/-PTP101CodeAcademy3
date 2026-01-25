import { FaRegTrashAlt } from "react-icons/fa";

const TodoItem = ({ todo, handleDelete, setSelectedIds }) => {


  return (
    <div>
      <input type="checkbox" onChange={(e)=>{
        console.log(e.target.checked);

        if(e.target.checked){
          setSelectedIds((prev)=>[...prev, todo.id])
        }else{
          setSelectedIds((prev)=>prev.filter((q)=> q !== todo.id))
        }
        
      }}/>
      <span className="todo-text">{todo.text}</span>
      <button className="delete-btn" onClick={() => handleDelete(todo.id)}><FaRegTrashAlt /></button>
    </div>
  )
}

export default TodoItem

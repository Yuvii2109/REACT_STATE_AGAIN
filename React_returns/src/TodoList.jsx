// TodoList.jsx code

import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoList(){
    let [todos,setTodos] = useState([{task: "Sample task", id: uuidv4(), isDone: false}]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}];
        });
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }
    let markDone = (id) => {
        setTodos((prevTodos) => 
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {...todo, 
                        isDone: !todo.isDone
                    };
                }else{
                    return todo;
                }
            })
        );
    }
    let markAllDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {...todo, 
                    isDone: !todo.isDone
                };
            })
        );
    }
    return(
        <div>
            <input type="text" placeholder="Add a task" 
            value={newTodo} onChange={updateTodoValue}/>
            <button onClick={addNewTask}>Add</button>
            <br /> <br />
            <hr /> <hr />
            <h1><b><u><i>Todo List - </i></u></b></h1>
            <hr /> <hr />
            <br /> <br />
            <ul>
                {
                    todos.map((todo)=>(
                        <div>
                            <li key={todo.id}>
                                <span style={todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task} </span> &nbsp;
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>&nbsp;
                                <button onClick={() => markDone(todo.id)}>Done</button>
                            </li>
                            <br />
                        </div>
                    ))
                }
            </ul>
            <br /> <br />
            <button onClick={markAllDone}>Mark All Done</button>
        </div>
    )
}
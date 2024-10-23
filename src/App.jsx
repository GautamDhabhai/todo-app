import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { ToDoInput } from "./components/ToDoInput"
import { ToDoList } from "./components/ToDoList"

import { useState, useEffect } from "react"

function App() {
  // const todos = [
  //   {input:"Pehla Todo add krdo!", isComplete: true},
  //   {input:"Morning mein  7.00 pr uth jana", isComplete: true},
  //   {input:"1 hours ki coding kr lena", isComplete: false},
  //   {input:"Night mein 12.00 tak soo jana ", isComplete: false}
  // ]

  const [todos, setTodos] = useState([
    {input:"Pehla Todo add krdo!", isComplete: true}
  ]);

  const [activeTab, setActiveTab] = useState('Open');

  function handleTodoAdd(newTodo) {
    const newTodoList = [...todos, {input:newTodo, isComplete:false}]
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  function handleTodoEdit(index) {
    let newTodoList = [...todos];
    let completedTodo = todos[index];
    completedTodo['isComplete'] = true;
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
    handleSaveData(newTodoList);
    
  };

  function handleTodoDelete(index) {
    let newTodoList = todos.filter((val, valIndex)=>{
      return valIndex !== index;
    })
    setTodos(newTodoList);
    handleSaveData(newTodoList);
  };

  function handleSaveData(currentTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currentTodos }))
  }

  useEffect(()=>{
    if (!localStorage || !localStorage.getItem('todo-app')) {return}
    // console.log('here')
    let dataBase = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(dataBase.todos);
  }, [])


  return(
    <>
      <Header todos={todos} />

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} todos={todos} />

      <ToDoList handleTodoEdit={handleTodoEdit} todos={todos} activeTab={activeTab} handleTodoDelete={handleTodoDelete} />

      <ToDoInput handleTodoAdd={handleTodoAdd} />
    </>
  )
}

export default App

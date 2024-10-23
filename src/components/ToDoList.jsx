import { ToDoCard } from "./ToDoCard";

export function ToDoList(props) {
    const { todos, activeTab, } = props;

    const filterTodoList = activeTab === 'All' ?
    todos :
    activeTab === 'Completed' ?
    todos.filter(val => val.isComplete) :
    todos.filter(val => !val.isComplete)
    return(
        <>
            {
                filterTodoList.map((todo, todoIndex)=>{
                    return(
                        <ToDoCard 
                            key = {todoIndex}
                            // todoIndex = {todoIndex}
                            todoIndex={todos.findIndex(val => val.input == todo.input)}
                            {...props}
                            todo = {todo} />
                    )
                })
            }   
        </>
    )
}
export function ToDoCard(props) {
    const { todo, todoIndex, handleTodoEdit, handleTodoDelete,} = props;
    // const todo = todos[todoIndex];
    // console.log(todo);

    return(
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={()=>
                    {
                        handleTodoEdit(todoIndex);   
                    }} disabled={todo.isComplete}> 
                    <h6>Done</h6> 
                </button>

                <button onClick={()=>
                    {
                        handleTodoDelete(todoIndex)
                    }}> 
                    <h6>Delete</h6> 
                </button>
            </div>
        </div>
    )
}
//disbaled ky hota likh lena
//props likh lena
//map likh lena dono
//filter bhi dekh ke likh lena
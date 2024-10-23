export function Header(props) {
    const { todos } = props;
    const todosLength = todos.length;
    const isTaskPlural = todosLength != 1;

    // let isTaskPlural;
    // if(todosLength !=1){isTaskPlural = true}
    // else{isTaskPlural = false};

    const taskOrTasks = isTaskPlural ? 'tasks' : 'task'

    return(
        <header>
            <h1 className="text-gradient">You have {todosLength}  open {taskOrTasks}.</h1>
        </header>
    )
}
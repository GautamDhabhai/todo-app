import { useState } from "react";

export function ToDoInput(props) {
    const { handleTodoAdd } = props;
    const [inputVal, setInputVal] = useState('');
    // console.log(inputVal);
    return(
        <div className="input-container">
            <input value={inputVal} 
            onChange=
            {
                (e)=>{setInputVal(e.target.value)}
            } 
            type="text"
            placeholder="Add Task" />

            <button onClick=
                {
                    ()=>{
                        if(!inputVal) {return};
                        handleTodoAdd(inputVal);
                        setInputVal('');
                    }

                }>
                    
                <i className="fa-solid fa-plus"></i>
            </button>

        </div>
    )
}
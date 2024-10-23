export function Tabs(props) {
    const { todos, activeTab, setActiveTab } = props;
    const tabs = ['All', 'Open', 'Completed']
    return(
        <nav className="tab-container">
            {tabs.map((tab, tabIndex)=>
                {
                    const numberOfTasks = tab === 'All' ?
                    todos.length :
                    tab === 'Completed' ? 
                    todos.filter(val => val.isComplete).length :
                    todos.filter(val =>  !val.isComplete).length;
                    return(
                        <button key={tabIndex}
                        onClick={()=>{setActiveTab(tab)}}
                        className={"tab-button " + (tab === activeTab ? ' tab-selected' : ' ')}>
                            <h4>
                                {tab} <span>({numberOfTasks})</span>
                            </h4>
                        </button>
                    )
                })
            
            }
        <hr />
        </nav>
    )
}
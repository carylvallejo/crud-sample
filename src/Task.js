export const Task = (props) => {
    return ( 
    //need to put () => if syntax has () - line 8/9
        <div
            className="task"
            style={{ backgroundColor: props.completed ? "green" : "white"}}
        >
          <h1>{props.taskName}</h1>
          <button onClick={() => props.compleTask(props.id)}> Complete </button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    );
}
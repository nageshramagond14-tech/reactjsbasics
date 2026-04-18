import React from 'react'

function TodoItem({todo, index, deleteTodo}) {
    return(
        <div>
            <p>{todo}</p>
            <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
    )
}

export default TodoItem
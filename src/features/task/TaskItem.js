import React from 'react'
import { useDispatch } from 'react-redux'
import { completeTask, deleteTasks } from './taskSlice'

const TaskItem = ({ task }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <input type="checkbox" onClick={() => dispatch(completeTask(task))}
                defaultChecked={task.completeTask}></input>
            <span> {task.title} </span>
            <button onClick={() => dispatch(deleteTasks(task))}>削除</button>
        </div>
    )
}

export default TaskItem

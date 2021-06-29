import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newTask } from './taskSlice'

const TaskInput = () => {
    const dispatch = useDispatch();
    const [editTitle, setEditTitle] = useState("")
    const handleTitleChange = (e) => {
        setEditTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        //フォームの中のサブミットボタンが押されるとリフレッシュが走るため、それを防ぐ目的で
        // preventDefault()する
        e.preventDefault();
        dispatch(newTask(editTitle));
        setEditTitle("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type='text'
                value={editTitle}
                onChange={handleTitleChange}
                placeholder='やる事を記入'
            />
            <button>New Task</button>
        </form>

    );
}

export default TaskInput

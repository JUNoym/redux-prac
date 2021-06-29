import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    idCount: 3,
    tasks: [
        {
            id: 1,
            title: 'TaskA',
            completed: false
        },
        {
            id: 2,
            title: 'TaskB',
            completed: true
        },
        {
            id: 3,
            title: 'TaskB',
            completed: true
        },
    ]
};


export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        newTask: (state, action) => {
            state.idCount++;
            const newItem = {
                id: state.idCount,
                title: action.payload,
                completed: false
            };
            state.tasks = [...state.tasks, newItem]
        },
        completeTask: (state, action) => {
            const task = state.tasks.find((t) => t.id === action.payload.id)
            if (task) {
                task.completed = !task.completed
            }
        },
        deleteTasks: (state, action) => {
            state.tasks = state.tasks.filter((t) => t.id !== action.payload.id)
            // 削除ボタンを押した際にpayloadに押されたidを渡して、押されたid以外をstate.tasksに上書き保存する
            // payloadはactionの引数と考えるとわかりやすいかもしれない
        },
    },

});

export const { newTask, completeTask, deleteTasks } = taskSlice.actions;

export const selectTasks = (state) => state.task.tasks

export default taskSlice.reducer;

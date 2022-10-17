import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import APITodo from '../apis/todo.api';

const initialState = {
    todos: [],
    status: 'idle',
    error: null
};

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
    const res = await APITodo.getTodo()
    return res.data.todos
})

export const createTodos = createAsyncThunk("todos/createTodos", async (title) => {
    const res = await APITodo.createTodo(title)
    // console.log(res)
    return res.insert_todos.returning[0]
})

export const updateTodos = createAsyncThunk("todos/updateTodos", async (initialValue) => {
    const res = await APITodo.updateTodo(initialValue)
    return res.update_todos.returning[0];
    // return res.insert_todos.returning[0]
})

export const deleteTodos = createAsyncThunk("todos/deleteTodos", async (id) => {
    const res = await APITodo.deleteTodo(id)
    // console.log(res)
    return res.delete_todos.returning[0]
})

export const itemSlice = createSlice({
    name: "item",
    initialState,
    extraReducers(builder) {
        builder
            .addCase(getTodos.fulfilled, (state, action) => {
                state.status = "success"
                state.todos = action.payload
            })
            .addCase(createTodos.fulfilled, (state, action) => {
                // console.log(typeof action.payload)
                state.status = "success"
                state.todos.push(action.payload)
            })
            .addCase(updateTodos.fulfilled, (state, action) => {
                // console.log(action)
                const index = state.todos.findIndex(post => post.id === action.payload.id);
                state.todos[index] = {
                    ...state.todos[index],
                    ...action.payload,
                };
            })
            .addCase(deleteTodos.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.status = "success"
                state.todos = state.todos.filter(todo => {
                    return todo.id !== action.payload.id
                })
            })
    }
})

export const { hapusList, tambahList, handleCheck } = itemSlice.actions;
export default itemSlice.reducer 
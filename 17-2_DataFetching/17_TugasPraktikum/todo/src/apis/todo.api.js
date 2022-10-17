import axiosInstance from "../configs/axios/axiosInstance";

const APITodo = {
    async getTodo() {
        try {
            const response = await axiosInstance.get("/todoapps");
            return response;
        } catch (err) {
            const { message } = err.response.data;
            throw new Error(message);
        }
    },
    async createTodo(title) {
        try {
            const response = await axiosInstance.post("/todoapps", {
                "title": title
            });
            return response.data;
        } catch (err) {
            const { message } = err.response.data;
            throw new Error(message);
        }
    },
    async updateTodo(todos) {
        const newID = todos.id
        const newCompleted = !todos.completed
        try {
            const response = await axiosInstance.put(`/todoapps/${newID}`, {
                completed: newCompleted
            });
            // console.log(response)
            return response.data
        } catch (err) {
            const { message } = err.response.data;
            throw new Error(message);
        }
    },
    async deleteTodo(id) {
        try {
            const response = await axiosInstance.delete(`/todoapps/${id}`)
            return response.data;
        } catch (err) {
            const { message } = err.response.data;
            throw new Error(message);
        }
    },
};

export default APITodo;
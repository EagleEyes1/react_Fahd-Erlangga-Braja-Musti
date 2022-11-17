import ListItem from "./ListItem"
import styles from "../../assets/styles/Home.module.css"
import { useSelector, useDispatch } from "react-redux"
import { deleteTodos, updateTodos } from "../../store/itemSlice"
import { useEffect } from "react"
import { getTodos } from "../../store/itemSlice"

const ListTodo = (props) => {
    const items = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    // console.log(items)
    return (
        <div>
            <table className={styles.tabel}>
                <tbody>
                    {items.map((todo) =>
                        <ListItem
                            key={todo.id}
                            item={todo}
                            hapusList={() => {
                                dispatch(deleteTodos(todo.id))
                            }}
                            handleCheck={() => {
                                dispatch(updateTodos(todo))
                            }} />)}
                </tbody>
            </table>
        </div>
    )
}
export default ListTodo
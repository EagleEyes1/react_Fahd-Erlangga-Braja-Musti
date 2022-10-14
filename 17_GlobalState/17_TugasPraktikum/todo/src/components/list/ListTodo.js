import ListItem from "./ListItem"
import styles from "../../assets/styles/Home.module.css"
import { useSelector, useDispatch } from "react-redux"
import { handleCheck, hapusList } from "../../store/itemSlice"

const ListTodo = (props) => {
    const items = useSelector((state) => state.item.items)
    const dispatch = useDispatch()

    return (
        <div>
            <table className={styles.tabel}>
                <tbody>
                    {items.map((todo) =>
                        <ListItem
                            key={todo.id}
                            item={todo}
                            hapusList={() => {
                                dispatch(hapusList(todo.id))
                            }}
                            handleCheck={() => {
                                dispatch(handleCheck(todo.id))
                            }} />)}
                </tbody>
            </table>
        </div>
    )
}
export default ListTodo
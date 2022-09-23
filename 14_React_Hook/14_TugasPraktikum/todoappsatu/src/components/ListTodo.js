import ListItem from "./ListItem"
import styles from "./Home.module.css";

const ListTodo = (props) => {
    const { data, hapusList, handleCheck } = props

    return (
        <div>
            <table className={styles.tabel}>
                <tbody>
                    {data.map((todo) => <ListItem key={todo.id} item={todo} hapusList={hapusList} handleCheck={handleCheck} />)}
                </tbody>
            </table>
        </div>
    )
}
export default ListTodo
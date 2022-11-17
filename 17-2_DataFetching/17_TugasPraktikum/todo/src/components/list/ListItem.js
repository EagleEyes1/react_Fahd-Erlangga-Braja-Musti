import styles from "../../assets/styles/Home.module.css"

const ListItem = ({ item, hapusList, handleCheck }) => {
    return (
        <tr className={item.completed ? styles.completed : styles.notCompleted}>
            <td>
                <input
                    type="checkbox"
                    name="status"
                    onChange={() => {
                        handleCheck(item.id)
                    }}
                    checked={item.completed}
                />
            </td>
            <td>
                {item.title}
            </td>
            <td>
                <button className={styles.tombol} onClick={() => { hapusList(item.id) }}>Delete</button>
            </td>
        </tr >
    )
}

export default ListItem
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodos } from "../../store/itemSlice";

import styles from "../../assets/styles/Home.module.css"

function TodoInput(props) {
    const dispatch = useDispatch()

    const [data, setData] = useState("")
    const onChange = e => {
        setData(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createTodos(data))
        setData("")
    }

    return (
        <div className={styles.tengah}>
            <form className={styles.tambahtodo} onSubmit={() => { }}>
                <input className={styles.input} type="text" placeholder="Add todo..." value={data} name="title" onChange={onChange} required></input>
                <button className={styles.submit} onClick={handleSubmit}><b>Submit</b></button>
            </form>
        </div>
    )

}

export default TodoInput
import { useState } from "react";
import { useDispatch } from "react-redux";
import { tambahList } from "../../store/itemSlice";
import styles from "../../assets/styles/Home.module.css"

function TodoInput(props) {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        title: "",
        completed: false
    }
    )
    const onChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formIsNotEmpty = data.title
        if (formIsNotEmpty) {
            const newData = {
                title: data.title,
                completed: data.completed
            }
            dispatch(tambahList(newData))
            setData({
                title: "",
                completed: false
            })
        } else {
            alert("Data masih belum diisi")
        }

    }

    return (
        <div className={styles.tengah}>
            <form className={styles.tambahtodo} onSubmit={() => { }}>
                <input className={styles.input} type="text" placeholder="Add todo..." value={data.title} name="title" onChange={onChange}></input>
                <button className={styles.submit} onClick={handleSubmit}><b>Submit</b></button>
            </form>
        </div>
    )

}

export default TodoInput
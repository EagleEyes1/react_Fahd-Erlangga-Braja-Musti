import { Component } from "react";
import styles from "./Home.module.css";

class TodoInput extends Component {
    state = {
        title: "",
        completed: false
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const formIsNotEmpty = this.state.title
        if (formIsNotEmpty) {
            const newData = {
                title: this.state.title,
                completed: this.state.completed
            }
            this.props.tambahList(newData);
            this.setState({
                title: "",
                completed: false
            })
        } else {
            alert("Data masih belum diisi")
        }

    }

    render() {
        return (
            <div className={styles.tengah}>
                <form className={styles.tambahtodo} onSubmit={() => { }}>
                    <input className={styles.input} type="text" placeholder="Add todo..." value={this.state.title} name="title" onChange={this.onChange}></input>
                    <button className={styles.submit} onClick={this.handleSubmit}><b>Submit</b></button>
                </form>
            </div>
        )
    }
}

export default TodoInput
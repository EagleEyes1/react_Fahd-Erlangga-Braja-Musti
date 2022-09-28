import { Component } from 'react'
import Title from './Title'
import ListTodo from './ListTodo'
import TodoInput from './TodoInput'
import { v4 as uuidv4 } from "uuid";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {
                    id: uuidv4(),
                    title: "Mengerjakan Exercise",
                    completed: true
                },
                {
                    id: uuidv4(),
                    title: "Mengerjakan Assignment",
                    completed: false
                }
            ]
        }
    }

    hapusList = (id) => {
        const newListTodo = this.state.data.filter((item) => item.id !== id)

        this.setState({ data: newListTodo })
    }
    tambahList = (newTodo) => {
        const newList = { id: uuidv4(), ...newTodo }

        this.setState({ data: [...this.state.data, newList] })
    }

    handleCheck = (id) => {
        const index = this.state.data.findIndex((val) => val.id === id)
        const newItem = [...this.state.data]
        if (index >= 0) {
            newItem[index].completed = !newItem[index].completed
        }
        this.setState({ data: newItem })
    }



    render() {
        return (
            <div>
                <Title />
                <TodoInput tambahList={this.tambahList} />
                <ListTodo data={this.state.data} hapusList={this.hapusList} handleCheck={this.handleCheck} />
            </div>
        )
    }
}

export default Home
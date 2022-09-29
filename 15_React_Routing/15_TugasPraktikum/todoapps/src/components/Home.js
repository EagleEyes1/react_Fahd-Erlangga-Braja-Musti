// import Navbar from './Navbar';
import IconNav from './IconNav';
import ListTodo from './ListTodo'
import Title from './Title'
import TodoInput from './TodoInput'
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';

const initialValue = [
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

function Home() {
    const [data, setData] = useState(initialValue)

    const hapusList = (id) => {
        setData((oldData) => oldData.filter(item => {
            return item.id !== id;
        }))
    }
    const tambahList = (newTodo) => {
        const newList = {
            id: uuidv4(),
            ...newTodo
        }

        setData((oldData) => [...oldData, newList]
        )
    }

    const handleCheck = (id) => {
        const index = data.findIndex((val) => val.id === id)
        const newItem = [...data]
        if (index >= 0) {
            newItem[index].completed = !newItem[index].completed
        }
        setData((oldData) => [...oldData])

    }

    return (
        <div>
            <IconNav />
            <Title />
            <TodoInput tambahList={tambahList} />
            <ListTodo data={data} hapusList={hapusList} handleCheck={handleCheck} />
        </div>
    )

}

export default Home
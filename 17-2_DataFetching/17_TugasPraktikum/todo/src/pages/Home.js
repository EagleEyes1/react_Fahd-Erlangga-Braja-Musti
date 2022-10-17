import { useEffect } from 'react';
import IconNav from '../components/home/IconNav';
import ListTodo from '../components/list/ListTodo'
import Title from '../components/home/Title'
import TodoInput from '../components/home/TodoInput'

function Home() {
    return (
        <div>
            <IconNav />
            <Title />
            <TodoInput />
            <ListTodo />
        </div>
    )

}

export default Home
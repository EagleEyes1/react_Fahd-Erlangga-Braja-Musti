import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from '../components/Form/Form'

const SetupRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Form />} />
            </Routes>
        </BrowserRouter>
    )
}

export default SetupRouter
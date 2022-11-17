import React from 'react'
import NotFound from '../components/notfound/NotFound';
import AboutAuthor from '../components/about/AboutAuthor'
import AboutPage from '../pages/AboutPage';
import Home from '../pages/Home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store, persistor } from "../store/store"


const setupRouter = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about/about-app" element={<AboutPage />} />
                        <Route path="/about/about-author" element={<AboutAuthor />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}

export default setupRouter
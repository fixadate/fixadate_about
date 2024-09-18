import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Home } from './components/Home';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { TechStack } from './components/TechStack';

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path='/fixadate_about/' element={<Home />} />
                <Route path='/fixadate_about/tech-stack' element={<TechStack />}></Route>
            </Routes>

            <Footer />
        </BrowserRouter>
    );
};

export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.tsx';
import RoomPage from './pages/RoomPage.tsx';

function App() {
    return (
        <div id="app">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/room/:roomId" element={<RoomPage />} />
            </Routes>
        </div>
    );
}

export default App;

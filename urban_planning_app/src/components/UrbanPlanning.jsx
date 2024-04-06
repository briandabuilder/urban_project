import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage';
import UrbanGame from './UrbanGame'
import { Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'

function UrbanPlanning() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/game" element={<UrbanGame />} />
            </Routes>
        </Router>
    )
}

export default UrbanPlanning;
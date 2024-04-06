import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

function UrbanPlanning() {
    return (
        <Router>
            <HomePage />
        </Router>
    )
}

export default UrbanPlanning;
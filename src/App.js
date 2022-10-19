import React from "react";
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Dashboard from './DashBoard'
import HomePage from './HomePage'

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="/" element={<HomePage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
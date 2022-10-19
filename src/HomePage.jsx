import React from "react";
import { Link } from "react-router-dom";
import Header from './components/Header';

export default function HomePage(){
    return(
        <div style={{marginTop: '100px'}}>
            <Header/>
           <p>Hello this is my home page</p>
           <Link to="/dashboard">Go to DashBoard</Link>
        </div>
    )
}

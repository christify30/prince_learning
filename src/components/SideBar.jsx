import React from "react";
import './sidebar.css'

export default function SideBard(){
    return(
        <div className="side-bar">
            <div style={{display:'flex', justifyContent: 'center', padding: 20}}>
                <span style={{color:'#fff', textAlign:'center', fontSize: 24}}>App</span> 
            </div>
        </div>
    )
}
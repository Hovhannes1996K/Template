import React, { useState } from "react";
import "./style.css";

export const Show_div = (props)=>{
    const [isHidden, setIsHidden] = useState(true);
    
    const toggleText = () =>{
        setIsHidden(!isHidden);
    }

    return <>
            <div className="btn_animation">
                <div className="show" onClick={toggleText}>
                    <p>{props.text}</p>
                </div>
                {isHidden ? null : <div className="texts">{props.description}</div>}
            </div>
    </>
}
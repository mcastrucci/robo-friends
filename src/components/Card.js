import React from "react";
import './Card.css';

const Card = (props) => {
    return(
        <div className='robo-card'>
            <img alt="react card" src={`https://robohash.org/${props.name}_${props.id}?200X200`} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
        
    );
}

export default Card; 
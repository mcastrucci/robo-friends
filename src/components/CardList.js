import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    const CardComponent = robots.map((user,i) => {
        return <Card id={robots[i]} name={robots[i].name} email={robots[i].email}/>
    })
    return (
            <div className='robo-grid'>
            {CardComponent}
            </div>
    );

}

export default CardList;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import './Playerinfo.css';

const Playerinfo = (props) => {    
    const {name, image, salary} = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    
    return (
        <div className="player-details">
            <div>
                <img src={image} alt=""/>
                <h3>Name: {name}</h3>
                <p>Salary: ${salary}</p>
                <button className="button" onClick={()=> handleAddPlayer(props.player)}><FontAwesomeIcon icon={faUser}/>  Select Player</button>
            </div>      
        </div>
    );
};

export default Playerinfo;
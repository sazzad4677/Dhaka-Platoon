import React from 'react';
import "./Players.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'


const Players = (props) => {
    const { id, img, first_name, last_name, playing_role, salary, transfer_fee,gender,age } = props.player;
    return (
        <div className="player">
            <div className="card mb-3" style={{ width: "90%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="card-title text-primary">{first_name + " " + last_name}</h4>
                            <p className="card-text">Playing Role: {playing_role}</p>
                            <h5>Gender:{gender}</h5>
                            <h5>Age: {age}</h5>
                            <h5>Salary:  {salary} Tk</h5>
                            <h5>Transfer Fee :  {transfer_fee} Tk</h5>
                            <button className="btn btn-primary" onClick={() => props.handelAddPlayer(props.player)}> <FontAwesomeIcon icon={faBriefcase} /> Add to club</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;

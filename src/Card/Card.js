import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'



const Card = (props) => {

    const { img, username, age, playingrole, country, batting, bowling, salary } = props.player;

    const addToCard = props.addToCardHandler;
    const card = props.player;

    const [isClicked, setIsClicked] = useState();
    return (
        <div className=" ml-5 w-100">
            <div className="card mb-3">
                <img src={img} alt="img" />
                <div>
                    <h5 className="card-title">Name: {username}</h5>
                    <h5>{country}</h5>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Playing role: {playingrole}</p>
                    <p>Batting: {batting}</p>
                    <p>Bowling: {bowling}</p>
                    <p>Salary: ${salary}</p>
                </div>
                <button onClick={() => {
                    addToCard(card)
                    setIsClicked(!isClicked)
                }} type="button" className="btn btn-danger">{isClicked ? < FontAwesomeIcon icon={faCheckSquare} /> : "add to Card"}

                </button>
            </div>
        </div>
    );
};

export default Card;
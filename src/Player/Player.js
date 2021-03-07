import React, { useState, useEffect } from 'react';
import PlayerData from '../PlayerData/data.json'
import Card from '../Card/Card';
import AddPlayer from '../Card/AddPlayer';

const Player = () => {
    const [Data, setData] = useState([0]);
    const [newPlayer, setPlayer] = useState([]);
    useEffect(() => {
        setData(PlayerData);
    }, []);

    const PlayerSelect = (player) => {
        const newAddPlayer = [...newPlayer, player];


        // const newCard = newAddPlayer.filter((item, index) => newAddPlayer.indexOf(item) === index);
        // console.log(newCard);
        // setPlayer(newCard);

        let newCard = [];

        for (let i = 0; i < newAddPlayer.length; i++) {
            const element = newAddPlayer[i];
            let index = newCard.indexOf(element);
            if (index === -1) {
                newCard.push(element);
            }
            else {
                newCard.splice(index, 1);
            }
            setPlayer(newCard);
        }

    }






    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <h2 className=" m-5">Dhaka Platoon The Team Player</h2>
                    <div className="row">

                        {
                            Data.map(data => <div className="col-lg-4 col-md-6 col-sm-12"> <Card player={data} key={data.id} addToCardHandler={PlayerSelect} /></div>)
                        }
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-lg-12">
                            <AddPlayer addPlayer={newPlayer} />
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
};

export default Player;
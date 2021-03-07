import React from 'react';

const AddPlayer = (props) => {
    const Player = props.addPlayer;

    const totalSalary = Player.reduce((sum, salary) => sum + salary.salary, 0);
    return (
        <>
            <div>
                <h1 className="ml-5 mt-4">The Team Builder</h1>
                <div className="container mt-2 mb-3 px-4">
                    <div className="row">

                        <div className="p-3 mr-5 ml-5  border bg-light">Total Player: {Player.length}</div>
                        <div className="p-3 border bg-light ">Total Bugged: {totalSalary}</div>

                    </div>
                </div>
            </div>
            <div>
                {
                    Player.map((data) => {
                        const { username, img, salary } = data;
                        return (
                            <>
                                <div className="row ml-5 mb-3 w-75 g-4">
                                    <div className="col ">
                                        <div className="card">
                                            <img className="w-50" src={img} alt="/img" />
                                            <div className="card-body">
                                                <h1 className="card-title w-100">Name: {username}</h1>
                                                <p>Salary: ${salary}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

            </div>

        </>
    );
};

export default AddPlayer;
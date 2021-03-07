import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../image/logo.png';

const Header = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info ">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-around" id="navbarTogglerDemo01">
                        <Link className="navbar-brand " to="/home"><img className="h-50 w-50" src={logo} alt="" /></Link>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/series">Series</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/team">Teams</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark " type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;
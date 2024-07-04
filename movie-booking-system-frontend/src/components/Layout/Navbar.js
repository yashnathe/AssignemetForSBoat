import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Navbar = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout } = authContext;

    const onLogout = () => {
        logout();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Movie Booking
            </Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ml-auto">
                    {isAuthenticated ? (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/movies">
                                    Movies
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/book">
                                    Book
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={onLogout} href="#!">
                                    Logout
                                </a>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">
                                    Register
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

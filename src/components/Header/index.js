import React, { useState } from 'react';

import { Container } from './styles';

import { Link } from "react-router-dom";

const Header = () => {
    return <Container>
        <div className="container">
            <div className="logo">
                <Link style={{ textDecoration: 'none', color: 'inherit'}} to="/" >
                    Buvie
                </Link>
            </div>
            <div className="searchbar">
                <input type="text" className="field" />
                <i className="fas fa-search"></i>
            </div>
            <div className="user">
                <i className="fas fa-user"></i>
            </div>
        </div>
    </Container>
}

export default Header;
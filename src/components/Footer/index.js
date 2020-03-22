import React, { useState } from 'react';

import { Container } from './styles';

import { Link } from "react-router-dom";

const Footer = () => {
    return <Container>
        <div className="container">
            <a href="https://github.com/Bufige">
                <div className="copyright">
                    ©2020 Copyright Leonardo Igor
                </div>
            </a>
        </div>
    </Container>
}

export default Footer;
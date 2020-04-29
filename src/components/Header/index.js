import React, { useState } from 'react';

import { Container } from './styles';

import { Link } from "react-router-dom";
import { useStoreContext } from '../../storeContext';

const Header = () => {
	const {setSearchContent} = useStoreContext();
	const [text, setText] = useState("");

	const onClick = (e) => {
		setSearchContent(text);
	}
    return <Container>
        <div className="container">
            <div className="logo">
                <Link style={{ textDecoration: 'none', color: 'inherit'}} to="/" >
                    Buvie
                </Link>
            </div>
            <div className="searchbar">
                <input type="text" className="field" value={text} onChange={ (e) => setText(e.target.value)}/>
                <i className="fas fa-search" onClick={onClick}></i>
            </div>
            <div className="user">
                <i className="fas fa-user"></i>
            </div>
        </div>
    </Container>
}

export default Header;
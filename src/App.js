import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";

import {StoreProvider} from './storeContext';

import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Header from './components/Header';

import Footer from './components/Footer';

import Movie from './pages/Movie';

const App = () => {
    return <StoreProvider>
		<Router>
        	<GlobalStyle/>
        	<Header/>
        	<Switch>
            	<Route path="/movie/:id" component={Movie} />
            	<Route path="/" component={Main} />
        	</Switch>
        	<Footer/>
    	</Router>
	</StoreProvider>
}
export default App;

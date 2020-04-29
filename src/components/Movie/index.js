import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import MovieService from '../../services/movieService';

import Img from '../Img';
import { Link } from "react-router-dom";
import {useStoreContext} from '../../storeContext';


const Movie = (props) => {
	const [movie, setMovie] = useState(props.movie);
	const {genres} = useStoreContext();

    useEffect( () => {
        if(props.movie) {
            setMovie(props.movie);
        }
    },[props.movie, movie]);

    return <Link style={{ textDecoration: 'none'}} to={'/movie/' + movie.id}><Container>
        <Img 
            height={'275px'}
            rating={movie.vote_average} 
            image={MovieService.generateImageUrl(movie.poster_path)}/>
        <div className="title">
            {movie.title}
        </div>
        <div className="genres">
            { movie.genre_ids.map( (item, index) => {
                const comma = index !== movie.genre_ids.length - 1; 
                return <div key={index} className="genre">{genres.find(x => x.id === item).name}{comma ? ',' : ''}</div>
            })}
        </div>
    </Container>
    </Link>
}

export default Movie;
import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";

import { Container } from './styles';

import MovieService from '../../services/movieService';
import Movies from '../../components/Movies';
import Img from '../../components/Img';

const generateCast = (cast) => {
    return cast.map( (item, index) => {
        return <Img
            key={index}
            width={'115px !important'}
            height={'160px'}
            caption={item.name}
            image={MovieService.generateImageUrl(item.profile_path, 185)}
        />
    });
};
const generateImages = (images) => {
    return images.map( (item, index) => {
        return <Img
            key={index}
            width={'185px !important'}
            height={'105px'}
            caption={item.name}
            image={MovieService.generateImageUrl(item.file_path, 185)}
        />
    });
};
const Movie = (props) => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [cast, setCast] = useState([]);
    const [images, setImages] = useState([]);

    let { id } = useParams();
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
      
    useEffect( () => {
        MovieService.getMovieRecommendation(id).then(data => {
            setMovies(data.results);
        });
        MovieService.getMovieDetail(id).then(data => {
            setMovie(data);
        });
        MovieService.getMovieCast(id).then(data => {
            setCast(data.cast);
        });
        MovieService.getMovieImages(id).then(data => {
            setImages(data.backdrops);
        });

    }, [id]);
    return <>{ movie && <Container className="container">
        <div className="movie">
            
            <div className="movie-image">
            <Img 
            width={'100%'}
            height={'100%'}
            rating={movie.vote_average} 
            image={MovieService.generateImageUrl(movie.poster_path, 500)}/>
            </div>
            <div className="content">
                <div className="title">
                    {movie.title}
                </div>
                <div className="overview">
                    {movie.overview}
                </div>
                <div className="release-date">
                    <span>Release date</span>
                    {movie.release_date}
                </div>
                <div className="budget">
                    <span>Budget</span>
                    {formatter.format(movie.budget)}
                </div>
                <div className="revenue">
                    <span>Revenue</span>
                    {formatter.format(movie.revenue)}
                </div>
                <div className="duration">
                    <span>Duration</span>
                    {movie.runtime}
                </div>
                <div className="cast">
                    <span>Cast</span>
                    <div className="cast-images">
                        { generateCast(cast) }
                    </div>
                </div>
                <div>
                    <span>Images</span>
                    <div className="images">
                        { generateImages(images) }
                    </div>
                </div>
            </div>
        </div>
        
        <div className="recommended">
            <div className="text">
                Recommended
            </div>
            {   
                movies.length > 0 ? <Movies movies={movies}/> : <h1>No movies</h1>
            }
        </div>
    </Container>
    }
    </>
}

export default Movie;
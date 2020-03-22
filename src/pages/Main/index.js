import React, {useState, useEffect} from 'react';

import {Container} from './styles';

import Movies from '../../components/Movies';
import MovieService from '../../services/movieService';

const searchMovies = (text, filter, page) => {
    if(text && text.length > 0) {
        return MovieService.getSearch(text, page);
    }
    switch(filter) {
        case 0: {
            return MovieService.getPopular(page);
        }
        case 1: {
            return MovieService.getTopRated(page);
        }
        case 2: {
            return MovieService.getUpcoming(page);
        }
    }
};

const Main = (props) => {
    const filters = [
        'Popular',
        'Top Rated',
        'Upcoming'
    ];
    const [filter,setFilter] = useState(0);
    const [movies, setMovies] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [endPage, setEndPage] = useState(0);
    const [searchText, setSearchText] = useState();

    const onClick = (e, id) => {
        e.preventDefault();
        setFilter(id);
        setCurrentPage(0);
        searchMovies(searchText, id, 1).then(data => {
            setEndPage(data.total_pages);
            setMovies(data.results);
        });
    }
    useEffect( () => {
        searchMovies(searchText, filter, currentPage + 1).then(data => {
            setEndPage(data.total_pages);
            setMovies(data.results);
        });
    }, []);

    const onPage = (id) => {
        setCurrentPage(id);
        searchMovies(searchText, filter, id + 1).then(data => {
            setMovies(data.results);
        });
    };
    return <Container className="container">
        <div className="filters">
            {filters.map( (item, index) => {
                const active = filter === index;
                return <div key={index} className={'filter' + (active ? ' active' : '')} onClick={(e) => onClick(e, index)}>
                    {item}
                </div>
            })}
        </div>
        <Movies movies={movies} currentPage={currentPage} endPage={endPage} onPage={onPage}/>
    </Container>
}
export default Main;
import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import Movie from '../Movie';
import Pagination from '../Pagination';

const Movies = (props) => {
    const [movies, setMovies] = useState(props.movies);
    const [currentPage, setCurrentPage] = useState();
    const [endPage, setEndPage] = useState();

    useEffect( () => {
        setMovies(props.movies);
        setCurrentPage(props.currentPage);
        setEndPage(props.endPage);
    }, [props.movies, props.currentPage, props.endPage]);
    const onPage = (id) => {
        if(props.onPage) {
            props.onPage(id);
        }
    }
    return <Container>
        <div className="content">
            { movies && movies.map( (item, index) => {
                return <Movie key={index} movie={item}/>
            })}
        </div>
        { endPage > 0 &&
        <div className="pagination">
            <Pagination currentPage={currentPage} endPage={endPage} onPage={onPage}/>
        </div>
        }
    </Container>
}

export default Movies;
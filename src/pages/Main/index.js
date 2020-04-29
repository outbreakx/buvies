import React, {useState, useEffect} from 'react';

import {Container} from './styles';

import Movies from '../../components/Movies';
import MovieService from '../../services/movieService';

import {useStoreContext} from '../../storeContext';


const searchMovies = (text, filter, page, setSearchContent) => {
    switch(filter) {
        case 0: {
			setSearchContent("");
            return MovieService.getPopular(page);
        }
        case 1: {
			setSearchContent("");
            return MovieService.getTopRated(page);
        }
        case 2: {
			setSearchContent("");
            return MovieService.getUpcoming(page);
		}
		case 4: {
			return MovieService.getSearch(text, page);
		}
	}
};

const Main = (props) => {
    const filters = [
        'Popular',
        'Top Rated',
        'Upcoming'
    ];
	const [movies, setMovies] = useState();
    const [currentPage, setCurrentPage] = useState(0);
    const [endPage, setEndPage] = useState(0);	
	const {setGenres, filter, setFilter, searchContent, setSearchContent} = useStoreContext();

    const onClick = (e, id) => {
        e.preventDefault();
        setFilter(id);
        setCurrentPage(0);
        searchMovies(searchContent, id, 1, setSearchContent).then(data => {
            setEndPage(data.total_pages);
            setMovies(data.results);
        });
    };
    useEffect( () => {
        searchMovies(searchContent, filter, currentPage + 1, setSearchContent).then(data => {
            setEndPage(data.total_pages);
            setMovies(data.results);
		});
		
		MovieService.getGenres().then( data => {
			setGenres(data.genres);
		});
    }, []);
	useEffect( () => {
		if(searchContent.length > 0) {
			searchMovies(searchContent, 4, currentPage + 1, setSearchContent).then(data => {
				setEndPage(data.total_pages);
				setMovies(data.results);
			});
		}
	}, [searchContent]);
    const onPage = (id) => {
        setCurrentPage(id);
        searchMovies(searchContent, filter, id + 1, setSearchContent).then(data => {
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
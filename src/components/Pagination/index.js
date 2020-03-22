import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const Pagination = (props) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [endPage, setEndPage] = useState(0);

    const Page = (id) => {
        const active = (id === currentPage);
        return <div key={id} className={'page' + (active ? ' active' : '')} onClick={(e) => onPage(e, id)}>
            {id === endPage && endPage > 0 ? endPage : id + 1}
        </div>
    } 
    const updatePagination = () => {
        let items = [];
        
        items.push(Page(0));

        if(currentPage - 2 > 0) {
            items.push(Page(currentPage - 2));
        }
        if(currentPage - 1 > 0) {
            items.push(Page(currentPage - 1));
        }
        if(currentPage  > 0) {
            items.push(Page(currentPage));
        }
        if(currentPage + 1  < endPage) {
            items.push(Page(currentPage + 1));
        }
        if(currentPage + 2  < endPage) {
            items.push(Page(currentPage + 2));
        }
        if(currentPage + 3  < endPage) {
            items.push(Page(endPage - 1));
        }
        return items;
    }
    useEffect( () => {
        setCurrentPage(props.currentPage);
        setEndPage(props.endPage);
    }, [props.currentPage, props.endPage]);
    const onPage = (e, id) => {
        e.preventDefault();
        setCurrentPage(id);
        if(props.onPage) {
            props.onPage(id);
        }
    };
    return <Container>
        {updatePagination()}
    </Container>
};

export default Pagination;
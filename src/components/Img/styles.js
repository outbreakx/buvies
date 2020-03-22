import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    .image {
        display: block;
        width: ${ props => props.width || 'auto'};
        height: ${ props => props.height || 'auto'};
        min-width: ${ props => props.minWidth || 'auto'};
        background-size: 100% 100%;
        background-repeat: no-repeat;
        background-image: url(${props => props.image});
    }
    .rating {
        border-radius: 2px;
        position: absolute;
        left: -5px;
        color: white;
        width: 32px;
        height: 18px;
        text-align: center;
        font-size: 11px;
        background-color: ${props => 
            props.rating >= 7 ? '#3bb33b' : 
            props.rating <= 3 ? 'red' : '#aaa'};
        line-height: 18px;
    }
    .caption {
        font-size: 13px;
        font-weight: 600;
        margin-bottom: 5px;
    }
`;
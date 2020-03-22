import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    position: relative;
    transition: opacity .3s ease-in-out;
    cursor: pointer;
    .title {
        margin-top: 10px;
        display: block;
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: 500;
        line-height: 18px;
        color: white;
        overflow-wrap: break-word;
    }
    .genres {
        margin-top: 5px;
        display: flex;
        flex-wrap: wrap;
        color: #aaa;
        font-size: .6rem;
        .genre {
            margin-right: 5px;
        }
    }
    :hover {
        opacity: 0.7;
    }
`;
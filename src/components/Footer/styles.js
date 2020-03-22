import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1f1f1f;
    margin-top: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    .copyright {
        color: #aaa;
        font-size: 1.1rem;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;
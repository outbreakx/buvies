import styled from 'styled-components';

export const Container = styled.div`
    .content {
        margin-top: 20px;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        grid-gap: 2rem;
        grid-auto-flow: dense;
    }
    .pagination {
        width: 100%;
        margin-top: 50px;
    }
    @media(max-width: 600px) {
        grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
    }
`;
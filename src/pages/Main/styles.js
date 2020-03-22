import styled from 'styled-components';


export const Container = styled.div`
    .filters {
        margin-top: 20px;
        display: flex;
        justify-content: center;
        .filter {
            color: white;
            cursor: pointer;
            user-select: none;
            border: 1px solid #fff;
            border-radius: 4px;
            padding: 6px 15px;
            &.active {
                color: black;
                background-color: white;
            }
        }
    }
`;
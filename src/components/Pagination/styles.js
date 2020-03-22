import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    .page {
        display: flex;
        justify-content: center;
        align-self: center;
        width: 32px;
        height: 32px;
        margin: 0 10px;
        border-radius: 50%;
        color: #aaa;
        text-decoration: none;
        text-align: center;
        line-height: 30px;
        font-size: 14px;
        cursor: pointer;
        user-select: none;
        &.active {
            background-color: #3bb33b;
            color: white;
        }
    }
`;
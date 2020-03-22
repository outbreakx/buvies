import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    background-color: #1f1f1f;

    .container {
        display: grid;
        height: 100%;
        grid-template-columns: 1fr 3fr 1fr;
    }
    .searchbar, .user {
        align-self: center;
        justify-self: center;
    }
    .logo {
        font-size: 2rem;
        border-radius: 5px;
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 4px;
        font-weight: 700;
        align-self: center;
    }
    .searchbar {
        width: 100%;
        .field {
            width: calc(100% - 60px);
            height: 40px;
            border: solid 2px grey;
            padding-left: 10px;
            padding-right: 25px;
            border-radius: 10px;
            font-size: 15px;
            outline:none
        }
        i {
            position: relative;
            left: -25px;
            cursor: pointer;
        }
    }
    .user {
        justify-self: flex-end;
    }
`;
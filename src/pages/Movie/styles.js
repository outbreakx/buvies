import styled from 'styled-components';


export const Container = styled.div`
    color: white;
    .movie {
        width: 100%;
        display: flex;
        margin-top: 25px;
        span {
            display: block;
            margin-bottom: 5px;
            font-size: 12px;
            font-weight: 500;
        }
        .movie-image {
            width: 320px;
            min-width: 320px;
            height: 480px;
        }
        .content {
            width: 100%;
            padding-left: 30px;
            * {
                margin-top: 15px;
            }
            .title {
                font-size: 2rem;
            }
            .overview {

            }
            .release-date {

            }
            .budget {

            }
            .revenue {

            }
            .duration {

            }
            .cast {
                .cast-images {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(115px, 1fr));
                    grid-gap: 2rem;
                    grid-auto-flow: dense;
                }
            }
            .images{
                margin-top: 10px;
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
                grid-gap: 1rem;
                grid-auto-flow: dense;
            }
        }
    }

    .recommended {
        .text {
            font-size: 2.5rem;
        }
        .recomendations {
            
        }
    }
    @media(max-width: 900px) {
        .movie {
            display: block;
            .movie-image {
                width: 100%;
                height: 475px;
            }
            .content {
                padding-left: 0px;
                
                .cast-images {
                    grid-template-columns: repeat(auto-fill, minmax(45%, 1fr));
                }
                .images {
                    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                }
            }
        }
    }
`;
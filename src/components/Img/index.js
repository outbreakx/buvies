import React, { useState, useEffect } from 'react';

import { Container } from './styles';

const Img = (props) => {
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const [rating, setRating] = useState();
    const [image, setImage] = useState();
    const [caption, setCaption] = useState();

    useEffect( () => {
        setHeight(props.height);
        setWidth(props.width);
        setRating(props.rating);
        setImage(props.image);
        setCaption(props.caption);

    }, [props.width, props.height, props.rating, props.image, props.caption]);

    return <Container width={width} height={height} rating={rating} image={image} caption={caption}>
        { rating !== undefined &&
            <div className="rating">
                {rating}
            </div>
        }
        <div className="image">
        </div>
        { caption !== undefined &&
            <div className="caption">
                {caption}
            </div>
        }
    </Container>
}

export default Img;
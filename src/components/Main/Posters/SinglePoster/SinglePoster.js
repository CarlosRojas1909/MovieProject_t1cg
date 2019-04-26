import React from 'react';

const SinglePoster = (props) => (

    <div className="SinglePoster">
        <img src={`https://image.tmdb.org/t/p/w500/${props.item.backdrop_path}`} alt="backdrop path" />
        <h1>{props.item.title}</h1>
        <p>{props.item.overview}</p>
        <span>Popularity: {props.item.popularity}</span>
    </div>

)


export default SinglePoster;

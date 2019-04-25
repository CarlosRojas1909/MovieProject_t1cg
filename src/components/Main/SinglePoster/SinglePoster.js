import React from 'react';
import './SinglePoster.scss'

const SinglePoster = (props) => (
    <div className="SinglePoster">
        <img src={`https://image.tmdb.org/t/p/w500/${props.data.backdrop_path}`} alt="backdrop path" />
        <h1>{props.data.title}</h1>
        <p>{props.data.overview}</p>
        <span>Popularity: {props.data.popularity}</span>
    </div>

)


export default SinglePoster;

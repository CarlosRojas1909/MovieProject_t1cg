import React from 'react';

const AllPosters = (props) => {
    return (
        props.allData.map((item, index) =>
            <div key={item.id} className='PosterInfo'>
                <img onClick={() => props.singlePosterHandler(index)} src={'https://image.tmdb.org/t/p/w154' + item.poster_path} />
                <p>{item.title}</p>
            </div>

        )
    )



}



export default AllPosters;
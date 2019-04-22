import React, { Component } from 'react';
import './Main.scss'

class Main extends Component {
    state = {
        displayData: false,
        data: []
    }

    componentDidMount() {
        this.apiCall();
    }

    apiCall = () => {
        const fetchData = fetch("https://api.themoviedb.org/3/search/movie?api_key=eb74ed2d82713ac14d0b4a9c670fac17&language=en-US&query=princess&page=1&include_adult=false");
        fetchData.then(response => response.json())
            .then(parsedDta => parsedDta.results)// this is all my data from api
            .then(arrData => this.setState({
                displayData: true,
                data: arrData
            }))
            .catch(error => "error: something went wrong!")
    }



    render() {
        return (
            <div className='Main'>
                <div className='Main_list'>
                    <ul className='Main_Ulist'>
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Adventure</a></li>
                        <li><a href="#">Animation</a></li>
                        <li><a href="#">Comedy</a></li>
                        <li><a href="#">Crime</a></li>
                        <li><a href="#">Documentary</a></li>
                        <li><a href="#">Drama</a></li>
                        <li><a href="#">Family</a></li>
                        <li><a href="#">Mystery</a></li>
                        <li><a href="#">Horror</a></li>
                    </ul>
                </div>
                <div className='Posters'>
                    <div className='DataFetch'>
                        {this.state.displayData && this.state.data.map((el, index) => <li key={el + index}><img src={'https://image.tmdb.org/t/p/w200' + el.poster_path} /></li>)}
                    </div>
                </div>

            </div>

        )
    }
}



export default Main;
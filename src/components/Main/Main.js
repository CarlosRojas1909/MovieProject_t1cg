import React, { Component } from 'react';
import './Main.scss'
import SinglePoster from './Posters/SinglePoster/SinglePoster'
import AllPosters from './Posters/AllPosters';

class Main extends Component {

    state = {
        data: [],
        singlePosterObj: {},
        showSinglePoster: false
    }




    componentDidMount() {

        this.apiCall()
    };




    apiCall = () => {
        // const fetchData = fetch("https://api.themoviedb.org/3/search/movie?api_key=eb74ed2d82713ac14d0b4a9c670fac17&language=en-US&query=princess&page=1&include_adult=false");
        const fetchData = fetch("https://api.themoviedb.org/3/movie/popular?api_key=eb74ed2d82713ac14d0b4a9c670fac17&language=en-US&page=1");
        fetchData.then(response => response.json())
            .then(parsedDta => parsedDta.results)// this is all my data from api
            .then(arrData => this.setState({
                data: arrData
            }))
            .catch(error => "error: something went wrong!")
    }

    //single poster handler
    singlePosterHandler = (index) => {
        console.log('object')
        let obj = this.state.data[index]
        this.setState({
            singlePosterObj: obj,
            showSinglePoster: true
        })
    }


    render() {

        return (

            <main className='Main'>
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

                    {this.state.showSinglePoster && <SinglePoster item={this.state.singlePosterObj} /> || <AllPosters allData={this.state.data} singlePosterHandler={this.singlePosterHandler} />}

                </div>

            </main>
        )
    }

}

export default Main;


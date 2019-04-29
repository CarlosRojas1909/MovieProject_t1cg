import React, { Component } from 'react';
import './Main.scss'
import SinglePoster from './Posters/SinglePoster/SinglePoster'
import AllPosters from './Posters/AllPosters';

class Main extends Component {

    state = {
        data: [],
        singlePosterObj: {},
        showSinglePoster: false,
        loading: false
    }




    componentDidMount() {
        this.setState({
            loading: true
        })

        const fetchData = fetch("https://api.themoviedb.org/3/movie/popular?api_key=eb74ed2d82713ac14d0b4a9c670fac17&language=en-US&page=1");
        fetchData.then(response => response.json())
            .then(parsedDta => parsedDta.results)// this is all my data from api
            .then(arrData => this.setState({
                data: arrData,
                loading: false
            }))
            .catch(error => "error: something went wrong!")
    };

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

                    {this.state.loading ? <h1 className='Loading'>Loading...</h1> : (this.state.showSinglePoster && <SinglePoster item={this.state.singlePosterObj} /> || <AllPosters allData={this.state.data} singlePosterHandler={this.singlePosterHandler} />)}

                </div>

            </main>
        )
    }

}

export default Main;


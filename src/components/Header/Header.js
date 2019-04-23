import React from 'react';
import logo from './app-logo.jpg';
// import classes from './Header.scss'
import './Header.scss'


const Header = (props) => (

    // <div className={classes.Header}>
    <header className='Header'>
        <div className='Header_logo'>
            <img className='Image' src={logo} alt="logo app" />
            <p>Movie Wall</p>
        </div>

        <div className='Input'>
            <span><i className="fas fa-search"></i></span>
            <input onChange={props.userInput} type="text" name="search" placeholder='Search' />
        </div>

        <nav className='Nav'>
            <ul>
                <li><a href="#">Rated Movies</a></li>
                <li><a href="#">Trending</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
        </nav>

    </header>
)

export default Header;

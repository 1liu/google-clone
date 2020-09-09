import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core'
import "./Home.css"
import Search from './Search'

const Home = () => {
  return (
    <div>
      <div className="home__header">
        <div className="header__left">
          <Link to="about">About</Link>
          <Link to="store">Store</Link>
        </div>
        <div className="header__right">
          <Link to="gmail">Gmail</Link>
          <Link to="images">Images</Link>
          <AppsIcon />
          <Avatar />

        </div>
      </div>
      <div className="home__body">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google"></img>
        <div className="home__inputContainer">
            <Search />
        </div>
      </div>
    </div>
  )
}

export default Home

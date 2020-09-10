import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
import useGoogleSearch from '../useGoogleSearch'
import Search from '../components/Search'
import SearchIcon from '@material-ui/icons/Search'
import DescriptionIcon from '@material-ui/icons/Description'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import ImageIcon from '@material-ui/icons/Image'
import RoomIcon from '@material-ui/icons/Room'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import data from '../response'

const SearchPage = (hideButton) => {
  const [{ term }, dispatch] = useStateValue();
  //const {data} = useGoogleSearch(term);

  console.log(data);
  return (
    <div className='searchPage'>
      <div className='searchPage__header'>
        <Link to='/'>
          <img
            className='searchPage__loge'
            src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png'
            alt=''
          />
        </Link>
        <div className='searchPage_headerBody'>
          <Search hideButton />
          <div className='searchPage_options'>
            <div className="searchPage__options">
              <div className="searchPage__optionLeft">
                <div className="searchPage__option">
                  <SearchIcon />
                  <Link to='/all'>All</Link>
                </div>
                <div className="searchPage__option">
                  <DescriptionIcon />
                  <Link to='/news'>News</Link>
                </div>
                <div className="searchPage__option">
                  <LocalOfferIcon />
                  <Link to='/shopping'>Shopping</Link>
                </div>
                <div className="searchPage__option">
                  <ImageIcon />
                  <Link to='/images'>Images</Link>
                </div>
                <div className="searchPage__option">
                  <RoomIcon />
                  <Link to='/maps'>Maps</Link>
                </div>
                <div className="searchPage__option">
                  <MoreVertIcon />
                  <Link to='/more'>More</Link>
                </div>
              </div>
              <div className="searchPage__optionRight">
                <div className="searchPage__option">
                  <Link to='/settings'>Settings</Link>
                </div>
                <div className="searchPage__option">
                  <Link to='/tools'>Tools</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className='searchPage__results'>

      </div>
    </div>
  )
}

export default SearchPage

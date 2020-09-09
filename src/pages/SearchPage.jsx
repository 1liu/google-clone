import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import './SearchPage.css'
import useGoogleSearch from '../useGoogleSearch'
import Search from '../components/Search'
import SearchIcon from '@material-ui/icons/Search'
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
        </div>
        <div className='searchPage_options'>
          {/* Resume here */}
        </div>
      </div>
      <div className='searchPage__results'>
        <SearchIcon />
        <Link to='/all'>All</Link>
        <Link to='/news'>News</Link>
        <Link to='/shopping'>Shopping</Link>
        <Link to='/images'>Images</Link>
        <Link to='/maps'>Maps</Link>
        <Link to='/more'>More</Link>
      </div>
    </div>
  )
}

export default SearchPage

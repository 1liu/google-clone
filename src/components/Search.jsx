import React, { useState } from 'react'
import { useStateValue } from '../StateProvider'
import { types } from '../reducer'
import { useHistory } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import Button from '@material-ui/core/Button'
import './Search.css'

const Search = ({ hideButton = false }) => {
  const [input, setInput] = useState('');
  const [state, dispatch] = useStateValue();
  const history = useHistory();

  const search = event => {
    event.preventDefault();
    console.log("Search Hitted");
    dispatch({
      type: types.SET_SEARCH_TERM,
      term: input
    })
    history.push('/search');
  }

  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search_inputIcon" />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)} />
        <MicIcon className="search_micIcon" />
      </div>
      {!hideButton ? (
        <div className="search__buttons">
          <Button
            variant="outlined"
            type="submit"
            onClick={search}
          >Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
          <div className="search__buttons">
            <Button
              className="search__buttonsHidden"
              variant="outlined"
              type="submit"
              onClick={search}
            >Google Search</Button>
            <Button
              className="search__buttonsHidden"
              variant="outlined">I'm Feeling Lucky</Button>
          </div>
        )}

    </form>
  )
}

export default Search

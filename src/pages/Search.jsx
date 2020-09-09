import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic'
import Button from '@material-ui/core/Button'
import './Search.css'

const Search = () => {
  const [input, setInput] = useState('');
  const search = event => {
    event.preventDefault();
    console.log("Search Hitted");

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
      <div className="search__buttons">
        <Button
          variant="outlined"
          type="submit"
          onClick={search}
        >Google Search</Button>
        <Button variant="outlined">I'm Feeling Lucky</Button>
      </div>
    </form>
  )
}

export default Search

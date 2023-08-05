import React from "react"
import './index.css'
import axios from "axios"
import SearchForm from "./SearchForm"
import LyricDisplay from "./LyricDisplay"
import SongList from "./SongList"

function App() {


  return (
    <div className="grid-container">
      <SearchForm  />
      <SongList />
      <LyricDisplay />

        
    </div>
  )
}

export default App

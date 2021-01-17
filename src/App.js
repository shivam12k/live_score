import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { getScore } from './api/api'
import MyCard from './components/MyCard'
import Box from '@material-ui/core/Box';
const App = () => {
  const [matches, setmatches] = useState([])

  useEffect(() => {
    getScore().then(data => {
      setmatches(data.matches)


    }).catch(err => {
      console.error("ab humsa nahi hoga", err)
    });
  })


  return (
    <div className="App">
      <Navbar />
      <h1 className="heading">welcome to live cricket score</h1>

      {
        matches.map(match => {
          return (
            <Fragment>{
              (match.type === "Twenty20" ?
                <Box boxShadow={1}>
                  <MyCard key={match.unique_id} match={match} />
                </Box> : '')
            }

            </Fragment>)
        })
      }


    </div >
  )
}

export default App;
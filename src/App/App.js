import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'

import './App.css'
import Matrix from '../Matrix/Matrix'
// import Table from '../Table/Table' // temporarily commented, to be used if you want to render as tables... WIP
import Container from '@material-ui/core/Container'

function App() {
  const [ items, setItems ] = useState([
    {id: 1, "Title":"The Matrix Reloaded","Year":"2003","imdbID":"tt0234215","Type":"movie","Poster":"https://m.media-amazon.com/images/M/MV5BODE0MzZhZTgtYzkwYi00YmI5LThlZWYtOWRmNWE5ODk0NzMxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
  ])
  const [ api, setApi ] = useState('')

  const handleMatrix1 = () => {
    setApi('http://www.omdbapi.com/?s=Matrix&apikey=720c3666')
    axios.get(api).then(response => response.data)
    .then((data) => {
        setItems(data.Search)
     })
  }

  const handleMatrix2 = () => {
    setApi('http://www.omdbapi.com/?s=Matrix%20Reloaded&apikey=720c3666')
    axios.get(api).then(response => response.data)
    .then((data) => {
        setItems(data.Search)
     })
  }

  const handleMatrix3 = () => {
    setApi('http://www.omdbapi.com/?s=Matrix%20Revolutions&apikey=720c3666')
    axios.get(api).then(response => response.data)
    .then((data) => {
        setItems(data.Search)
     })
  }

  const handlePostMatrix = items => {

    axios({
        method: 'post',
        url: '../../api/matrix.php',
        data: items,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
    })
    .then(function (response) {
        //handle success
        console.log(response)

    })
    .catch(function (response) {
        //handle error
        console.log(response)
    });
  }
  console.log('items', items)

  return (
    <Container maxWidth="sm" className="App-header">
      <div className="App">
        <h1 className="App-h1">THE MATRIX</h1>
        <Button variant="contained" color="primary" onClick={ handleMatrix1 }>
         Matrix
        </Button>
        <Button variant="contained" color="primary" onClick={ handleMatrix2 }>
          Matrix Reloaded
        </Button>
        <Button variant="contained" color="primary" onClick={ handleMatrix3 }>
          Matrix Revolutions
        </Button>
        <Button variant="contained" color="secondary" onClick={ handlePostMatrix }>
          SAVE
        </Button>
        { items && items.map((item, i) => (
          <Matrix item={ item } key= { i } i={ i } />
        ) ) }
      </div>
    </Container>
  );
}
export default App;
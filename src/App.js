import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Questions from './Component/Questions'
import Form from './Component/form'
import Results from './Component/results'

function App() {
  
  return (
    <Routes>
        <Route exact path = '/' element = {<Form/>}/>
        <Route  path = '/questions' element = {<Questions/>}/>
        <Route  path='/results' element= {<Results/>}/>
    </Routes>
  )
}

export default App;

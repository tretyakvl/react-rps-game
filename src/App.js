import React from 'react'
import { Router, Link } from '@reach/router'
import Game from './components/Game/Game'
import Rules from './components/Rules/Rules'

const App = () => (
  <Router>
    <Game path='/'>
      <Rules path='rules' />
    </Game>
  </Router>
)

export default App

import React from 'react'
import { Router } from '@reach/router'
import { Provider } from 'react-redux'
import store from './store'
import Game from './components/Game/Game'
import Rules from './components/Rules/Rules'

const App = () => (
  <Provider store={store}>
    <Router>
      <Game path='/'>
        <Rules path='rules' />
      </Game>
    </Router>
  </Provider>
)

export default App

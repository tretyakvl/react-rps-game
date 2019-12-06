import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import ChipsDisplay from '../ChipsDisplay/ChipsDisplay'
import Btn from '../Btn/Btn'
import './TypeSelector.css'

const SelectorDisplay = () => {
  return (
    <section className='TypeSelector'>
      <h2>Select game type</h2>
      <ul>
        <li>
          <Btn to='/standart'>
              Standart
          </Btn>
        </li>
        <li>
          <Btn to='/lizard-spock'>
              Lizard spock
          </Btn>
        </li>
      </ul>
    </section>
  )
}

const TypeSelector = () => {
  return (
    <Router>
      <Switch>
        <Route
          path={['/standart', '/lizard-spock']}
          component={ChipsDisplay}
        />
        <Route
          path='/'
          component={SelectorDisplay}
        />
      </Switch>
    </Router>
  )
}

export default TypeSelector

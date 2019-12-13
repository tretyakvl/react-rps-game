import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Btn from '../Btn/Btn'
import ScreenSelector from '../ScreenSelector/ScreenSelector'

import { GAME_TYPES } from '../../constants'
import './TypeSelector.css'

const { STANDART, LIZARD_SPOCK } = GAME_TYPES

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
          path={[`/${STANDART}`, `/${LIZARD_SPOCK}`]}
          component={ScreenSelector}
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

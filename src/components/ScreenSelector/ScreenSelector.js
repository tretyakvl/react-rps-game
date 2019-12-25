import React, { useEffect } from 'react'
import { useRouteMatch, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setGameType } from '../../store'

import Rules from '../Rules/Rules'
import ChipsDisplay from '../ChipsDisplay/ChipsDisplay'
import ResultScreen from '../ResultScreen/ResultScreen'
import Btn from '../Btn/Btn'
import './ScreenSelector.css'

const ScreenSelector = ({ match }) => {
  const result = useSelector(store => store.result)
  const gameType = match.path.match(/[a-z-]+$/)[0]
  const dispatch = useDispatch()
  const { path, url } = useRouteMatch()

  useEffect(() => {
    dispatch(setGameType(gameType))
  }, [gameType, dispatch])

  return (
    <div className='ScreenSelector'>
      {
        result
          ? <ResultScreen key='ResultScreen' />
          : <ChipsDisplay key='ChipsDisplay' />
      }
      <div className='ScreenSelector__container'>
        <Btn to={`${url}/rules`} type='border'>Rules</Btn>
      </div>

      <Switch>
        <Route
          path={`${path}/rules`}
          component={Rules}
          exact
        />
      </Switch>
    </div>
  )
}

export default ScreenSelector

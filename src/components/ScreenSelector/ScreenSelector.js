import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ChipsDisplay from '../ChipsDisplay/ChipsDisplay'
import ResultScreen from '../ResultScreen/ResultScreen'

import { setGameType } from '../../store'

const ScreenSelector = ({ match }) => {
  const result = useSelector(store => store.result)
  const gameType = match.path.slice(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setGameType(gameType))
  }, [gameType])

  if (result) return <ResultScreen />
  return <ChipsDisplay />
}

export default ScreenSelector

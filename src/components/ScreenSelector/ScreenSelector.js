import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

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

  return (
    <AnimatePresence exitBeforeEnter>
      {
        result
          ? <ResultScreen key='ResultScreen' />
          : <ChipsDisplay key='ChipsDisplay' />
      }
    </AnimatePresence>
  )
}

export default ScreenSelector

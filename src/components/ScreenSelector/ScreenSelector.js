import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AnimatePresence } from 'framer-motion'

import ChipsDisplay from '../ChipsDisplay/ChipsDisplay'
import ResultScreen from '../ResultScreen/ResultScreen'
import Btn from '../Btn/Btn'

import { setGameType } from '../../store'

const ScreenSelector = ({ match }) => {
  const result = useSelector(store => store.result)
  const gameType = match.path.slice(1)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setGameType(gameType))
  }, [gameType])

  return (
    <div className='ScreenSelector'>
      <AnimatePresence exitBeforeEnter>
        {
          result
            ? <ResultScreen key='ResultScreen' />
            : <ChipsDisplay key='ChipsDisplay' />
        }
      </AnimatePresence>
      <div className='ScreenSelector__container'>
        <Btn type='border'>Rules</Btn>
      </div>
    </div>
  )
}

export default ScreenSelector

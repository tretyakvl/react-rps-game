import { createStore } from 'redux'
import reducers from './reducers'

export default createStore(reducers)

export { play, playAgain } from './actionCreators'

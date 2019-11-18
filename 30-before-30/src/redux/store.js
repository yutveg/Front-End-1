import { createStore, applyMiddleWare } from 'redux'
import logger from 'redux-logger'

import rootReducer from './root-reducer'

const middleWares = [logger];

const store = createStore(rootReducer, applyMiddleWare(...middleWares))

export default store;
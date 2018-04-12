/*
* reducers index.js
*/
import { combineReducers } from 'redux'
import learn from './learn'
import home from './home'
import my from './my'
import school from './school'

const rootReducer = combineReducers({
	learn,
	home,
	my,
	school,
})

export default rootReducer
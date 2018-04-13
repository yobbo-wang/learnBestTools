/**
 * learnBestTools
 * index.js
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
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
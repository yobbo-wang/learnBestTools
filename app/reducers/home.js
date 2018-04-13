/**
 * learnBestTools
 * home 状态机
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'

import * as types from '../constants/ActionTypes';

const initialState = {
  loading: false,
  typeList: {}
}

export default function learn(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_TYPE_LIST:
      return Object.assign({}, state, {
        loading: true
      })
    case types.RECEIVE_TYPE_LIST:
      return Object.assign({}, state, {
        loading: false,
        typeList: action.typeList
      })
    default:
      return state
  }
}


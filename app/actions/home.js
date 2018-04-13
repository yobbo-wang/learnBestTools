/**
 * learnBestTools
 * home action控制器
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import * as types from '../constants/ActionTypes'

export function requestHomeList(
  isRefreshing,
  loading,
  typeId,
  isLoadMore,
  page = 1
) {
  return {
    type: types.REQUEST_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore,
    typeId,
    page
  }
}

export function fetchHomeList(isRefreshing, loading, isLoadMore = false) {
  return {
    type: types.FETCH_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore
  }
}

export function receiveHomeList(homeList, typeId) {
  return {
    type: types.RECEIVE_HOME_LIST,
    homeList,
    typeId
  }
}
/*
* school action控制器
*/
import * as types from '../constants/ActionTypes'

export function requestSchoolList(
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

export function fetchSchoolList(isRefreshing, loading, isLoadMore = false) {
  return {
    type: types.FETCH_HOME_LIST,
    isRefreshing,
    loading,
    isLoadMore
  }
}

export function receiveSchoolList(homeList, typeId) {
  return {
    type: types.RECEIVE_HOME_LIST,
    homeList,
    typeId
  }
}
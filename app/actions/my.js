/*
* my action控制器
*/
import * as types from '../constants/ActionTypes'

export function requestLearnList(
  isRefreshing,
  loading,
  typeId,
  isLoadMore,
  page = 1
) {
  return {
    type: types.REQUEST_LEARN_LIST,
    isRefreshing,
    loading,
    isLoadMore,
    typeId,
    page
  }
}

export function fetchLearnList(isRefreshing, loading, isLoadMore = false) {
  return {
    type: types.FETCH_ARTICLE_LIST,
    isRefreshing,
    loading,
    isLoadMore
  }
}

export function receiveLearnList(learnList, typeId) {
  return {
    type: types.RECEIVE_LEARN_LIST,
    learnList,
    typeId
  }
}
/**
 * learnBestTools
 * learn action控制器
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
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
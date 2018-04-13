/**
 * learnBestTools
 * NavigationActions处理工具类
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import { NavigationActions } from 'react-navigation'

const reset = (navigation, routeName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  })
  navigation.dispatch(resetAction)
}

const navigate = (navigation, routeName, params, key) => {
	const navigateAction = NavigationActions.navigate({
	  routeName: routeName,
	  params: params,
	  key: key == undefined ? routeName : key,
	  action: NavigationActions.navigate({ routeName: routeName }),
	})
	navigation.dispatch(navigateAction)
}

const setParams = (navigation, key, params) => {
	const setParamsAction = NavigationActions.setParams({
		  params: params,
		  key: key,
	})
	navigation.dispatch(setParamsAction)
}

const back = (navigation, key) => {
	const backAction = NavigationActions.back({
	  key: key,
	})
	navigation.dispatch(backAction)
}

export default {reset , navigate, setParams, back}
/*
* NavigationUtil.js 工具类用来选择指定navigation
*/
import { NavigationActions } from 'react-navigation'

const reset = (navigation, routeName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName })]
  })
  navigation.dispatch(resetAction);
}

// 给指定navigation传状态机
const setParams = (navigation, key, params) => {
	const setParamsAction = NavigationActions.setParams({
		  params: params,
		  key: key,
	});
	navigation.dispatch(setParamsAction);
}

export default {reset , setParams}
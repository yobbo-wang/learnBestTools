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

export default {
  reset
}
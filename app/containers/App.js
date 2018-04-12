/*
* 首页
*/
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Splash from '../page/Splash'
import HomeContainer from './HomeContainer'
import Learn from './LearnContainer'
import School from './SchoolContainer'
import My from './MyContainer'
import CommonNavigateView from '../page/common/CommonNavigateView'
import ArrayUtils from '../expand/ArrayUtils'

console.disableYellowBox = true // 关闭警告
export default class App extends Component{
    
  constructor(props) {
      super(props)
      this.subscribers = [] // 用来装载子容器中方法，以便调用
      this.changedValues = {
            app: {themeChange: false}
      }
      this.state = {
      }
  }      

  addSubscriber(subscriber) {
      ArrayUtils.add(this.subscribers, subscriber)
  }

  removeSubscriber(subscriber) {
      ArrayUtils.remove(this.subscribers, subscriber)
  }

  onThemeChange(theme) {
      if (!theme) return
      this.setState({
          theme: theme
      })
      this.changedValues.app.themeChange = true
      //循环遍历数组中所有方法改变状态机值
      this.subscribers.forEach((item, index, arr)=> {
          if (typeof(item) == 'function') item(theme)
      })
      this.changedValues.app.themeChange = false
  }

	render() {
    return <AppStack screenProps = {{...this.props, appComponent: this}}  />
  }	
}

//底部导航栏
const TabContainer = TabNavigator(
  {
    Home: { screen: HomeContainer},
    Learn: { screen: Learn },
    School: { screen: School },
    My: { screen: My }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      inactiveTintColor: '#999999',
      showIcon: true,
      // indicatorStyle:{
      //   height: 0,
      // },
      style: {
        backgroundColor: '#fff'
      },
      indicatorStyle: {
        opacity: 0
      },
      tabStyle: {
        padding: 0
      }
    }
  }
)

//导航拦
const AppStack = StackNavigator(
	{
    Splash: { screen: Splash },
    Home: {
      screen: TabContainer,
      navigationOptions: {
        headerLeft: null
      }
    },
    CommonNavigateView: { 
      screen: CommonNavigateView,
    }
  },
  {
    headerMode: Platform.OS == 'ios' ? 'float' : 'screen',
    headerTransitionPreset: 'uikit', 
    navigationOptions: {
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20,
        alignSelf:'center',
      },
      headerTintColor: '#fff'
    }
  }
)
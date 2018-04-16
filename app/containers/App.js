/**
 * learnBestTools
 * App组件用来定义总体布局
 *  react-navigation组件安卓端title不会居中,还有下划线，需要手动修改 react-navigation/src/Header/Header.js中的css样式
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Platform } from 'react-native'
import { StackNavigator, TabNavigator } from 'react-navigation'
import Splash from '../page/Splash'
import HomeContainer from './HomeContainer'
import LearnContainer from './LearnContainer'
import SchoolContainer from './SchoolContainer'
import MyContainer from './MyContainer'
import CommonNavigateView from '../page/common/CommonNavigateView'
import CodePush from 'react-native-code-push'
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

  static componentDidMount() {
      CodePush.sync({
          deploymentKey: 'RGOUfyINiLicZnld67aD0nrbRvyLV1Ifekvul', // KEY
          updateDialog: {
              optionalIgnoreButtonLabel: '稍后',
              optionalInstallButtonLabel: '后台更新',
              optionalUpdateMessage: '优学堂有新版本了，是否更新？',
              title: '更新提示'
          },
          installMode: CodePush.InstallMode.ON_NEXT_RESTART
      })
  }

  addSubscriber(subscriber) {
      ArrayUtils.add(this.subscribers, subscriber)
  }

  removeSubscriber(subscriber) {
      ArrayUtils.remove(this.subscribers, subscriber)
  }

  //把此方法依次往下传，每个组件把方法加到subscribers这个数组中，在对应的页面调用后会依次往下执行
  onThemeChange(theme) {
      if (!theme) return
      this.setState({
          theme: theme
      })
      this.changedValues.app.themeChange = true
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
    Learn: { screen: LearnContainer },
    School: { screen: SchoolContainer },
    My: { screen: MyContainer }
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
        alignSelf: 'center',
        alignItems: 'center',
      },
      headerTintColor: '#fff'
    }
  }
)
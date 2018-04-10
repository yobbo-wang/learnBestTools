/*
* 首页
*/
import React, {Component} from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation'
import Splash from '../page/Splash'
import Home from '../page/home/Index'
import Learn from '../page/learn/Index'
import School from '../page/school/Index'
import My from '../page/my/Index'

export default class App extends Component{
  
	render() {
    return <AppStack screenProps = {this.props.theme} />
  }	
}

//底部导航栏
const TabContainer = TabNavigator(
  {
    Home: { screen: Home },
    Learn: { screen: Learn },
    School: { screen: School },
    My: { screen: My }
  },
  {
    lazy: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      //activeTintColor: '#3e9ce9',
      inactiveTintColor: '#999999',
      showIcon: true,
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
    }
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
)
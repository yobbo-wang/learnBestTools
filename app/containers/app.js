/*
* 首页
*/
import React, {Component} from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation'
import Home from '../page/home/index'
import Learn from '../page/learn/index'
import School from '../page/school/index'
import My from '../page/my/index'

export default class App extends Component{
	render() {
    	return <AppStack />;
  	}	
}

//标签栏
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
      activeTintColor: '#3e9ce9',
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
      headerStyle: {
        backgroundColor: '#3e9ce9'
      },
      headerTitleStyle: {
        color: '#fff',
        fontSize: 20
      },
      headerTintColor: '#fff'
    }
  }
)
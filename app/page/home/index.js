/**
* home index.js
*/

import React, {Component} from 'react'
import { 
	StyleSheet, View, Text 
}from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default class index extends Component {
  	static navigationOptions = ({ navigation }) => ({
	    title: '首页'
  	})

	render() {
    	return <View><Text>首页</Text></View>
  	}

}	
/**
* home index.js
*/

import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class index extends Component {
	static navigationOptions = ({ navigation }) => ({
	    title: '学习'
  	})

	render() {
    	return <View><Text>学习</Text></View>
  	}

}	
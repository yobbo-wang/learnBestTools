/**
* home index.js
*/

import React, {Component} from 'react'
import {View, Text} from 'react-native'

export default class index extends Component {

	static navigationOptions = ({ navigation }) => ({
	    title: '校园'
  	})

	render() {
    	return <View><Text>校园</Text></View>
  	}
}	
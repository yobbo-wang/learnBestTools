/**
 * learnBestTools
 * 校园
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React, {Component} from 'react'
import {
	View, 
	Text,
	Image
} 
from 'react-native'
import SwiperIndex from '../home/SwiperIndex'

let playList = [<SwiperIndex />] // 动态熏染组件
export default class Index extends Component {

	constructor(props) {
        super(props)
        this.state = {
            theme: this.props.screenProps.theme
        }
    }

    getRenderCotent() {
        var pages =[]
        for (var i = 0; i < playList.length; i++) {
            pages.push(<Text>{playList[i]}</Text> )
        }
        return(
            <View>{pages}</View>
        )
    }

	render() {
     return this.getRenderCotent()

  	}
}	
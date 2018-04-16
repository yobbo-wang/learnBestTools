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

    componentDidMount() {
        this.props.screenProps.appComponent.addSubscriber(this.onSubscriber)
    }

    componentWillUnmount() {
        this.props.screenProps.appComponent.removeSubscriber(this.onSubscriber);
    }

    onSubscriber = (updateTheme)=> {
        var changedValues = this.props.screenProps.appComponent.changedValues
        if (changedValues.app.themeChange && updateTheme) {
            this.setState({
                theme: updateTheme
            })
        }
    }

	render() {
        return(
            <View>
                <Text style={{color: this.state.theme.themeColor}}>Hello</Text>
            </View>
        )

  	}
}	
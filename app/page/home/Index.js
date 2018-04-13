/**
 * learnBestTools
 * 首页
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
 'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { 
	StyleSheet,
	View, 
	Text, 
	Image,
    FlatList,
    RefreshControl, 
    StatusBar,
}from 'react-native'
import SwiperIndex from './SwiperIndex'

export default class Index extends Component {

    static propTypes = {
        homeActions: PropTypes.object, 
        home: PropTypes.object.isRequired
    }

	constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isLodingFail: false,
            theme: this.props.screenProps.theme
        }
    }    

    componentDidMount() {
        this.loadData(this.props.timeSpan, true)
    }

    updateState(dic){
        if (!this) return
        this.setState(dic)
    }

    loadData(timeSpan,isRefresh) {
        this.updateState({
            isLoading: true,
            isLoadingFail: false,
        })

        //TODO数据加载完后，刷新加载状态
        this.flushHomeIndexState()
    }

    onRefresh() {
        this.loadData(this.props.timeSpan, true)
    }

    flushHomeIndexState() {
        this.updateState({
            isLoading: false,
            isLodingFail: false,
        })
    }

    getSwiper (){
        return(
            <SwiperIndex themeColor = {this.state.theme.themeColor} />
        ) 
    }

	render() {
    	return(
        <View style={styles.container}>
            <StatusBar
                barStyle = {'light-content'}
                backgroundColor = {this.state.theme.themeColor}
            />
      	   <FlatList 
            ListHeaderComponent = {this.getSwiper.bind(this)}
            refreshControl={
                    <RefreshControl
                        refreshing = {this.state.isLoading}
                        onRefresh = {() => this.onRefresh()}
                        tintColor = {this.state.theme.themeColor}
                        title = "数据加载中..."
                        titleColor = {this.state.theme.themeColor}
                        colors = {[this.state.theme.themeColor, this.state.theme.themeColor, this.state.theme.themeColor]}
            />}
            data = {[]}
            renderItem = {({item}) => 
              <Text>{item.key}</Text>
            }
           />
        </View> 
    	)
  	}
}	

const styles = StyleSheet.create({
    container: {
      flex : 1,
      flexDirection: 'column',
    }
})  


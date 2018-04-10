/**
* home index.js
*/

import React, {Component} from 'react'
import { 
	StyleSheet,
	View, 
	Text, 
	Image,
  FlatList,
  RefreshControl 
}from 'react-native'
import SwiperIndex from './SwiperIndex'

export default class Index extends Component {
	   constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            isLodingFail: false,
            screenProps: this.props.screenProps
        }
    }    

  	static navigationOptions = ({ navigation, screenProps}) => ({
	    title: '首页',
	    tabBarIcon: ({ tintColor }) => (
	    	<Image style={{width: 26, height: 26,resizeMode: 'contain',tintColor: tintColor == '#999999' ? tintColor : screenProps.themeColor }} 
	    	source={require('../../res/images/ic_polular.png')} />
	    ),
        headerStyle:{
            backgroundColor: screenProps.themeColor
        },
        tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={{color: tintColor == '#999999' ? tintColor : screenProps.themeColor, fontSize:10}}>首页</Text>
        ),
    })    

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

	render() {
    	return(
        <View style={styles.container}>
      	   <FlatList 
            ListHeaderComponent = {SwiperIndex}
            refreshControl={
                    <RefreshControl
                        refreshing = {this.state.isLoading}
                        onRefresh = {() => this.onRefresh()}
                        tintColor = {this.props.screenProps.themeColor}
                        title = "数据加载中..."
                        titleColor = {this.props.screenProps.themeColor}
                        colors = {[this.props.screenProps.themeColor, this.props.screenProps.themeColor, this.props.screenProps.themeColor]}
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


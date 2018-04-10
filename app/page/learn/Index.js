/**
* home index.js
*/

import React, {Component} from 'react'
import {
	View, 
	Text,
	Image,
	TouchableHighlight,
    StyleSheet
}
from 'react-native'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'
import ViewUtils from '../../expand/ViewUtils'

export default class Index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            screenProps: this.props.screenProps
        }
    } 

	static navigationOptions = ({ navigation, screenProps }) => ({
	    title: '学习',
	    tabBarIcon: ({ tintColor }) => (
	    	<Image style={{width: 26, height: 26,resizeMode: 'contain',tintColor: tintColor == '#999999' ? tintColor : screenProps.themeColor}} 
	    	source={require('../../res/images/ic_trending.png')} />
	    ),
        headerStyle:{
            backgroundColor: screenProps.themeColor
        },
        tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={{color: tintColor == '#999999' ? tintColor : screenProps.themeColor, fontSize:10}}>学习</Text>
        ),
	    headerRight: (
	      	<View style={{flexDirection: 'row',}}>
                <TouchableHighlight
                    ref='button'
                    underlayColor='transparent'
                    onPress={()=>{
                        this.props.navigator.push({
                            component: SearchPage,
                            params: {
                                theme:this.state.theme,
                                ...this.props,
                            },
                        });
                    }}>
                    <View style={{padding:5}}>
                        <Image
                            style={{width: 24, height: 24}}
                            source={require('../../res/images/ic_search_white_48pt.png')}
                        />
                    </View>
                </TouchableHighlight>
                {ViewUtils.getMoreButton(()=>this.refs.moreMenu.open())}
            </View>
    	)
  	})

	render() {
    	return (
            <View style={styles.container}>
                <ScrollableTabView
                  renderTabBar={() => (
                    <ScrollableTabBar
                      tabStyle={styles.tab}
                      textStyle={styles.tabText}
                    />
                  )}
                  tabBarBackgroundColor = {this.state.screenProps.themeColor}
                  tabBarUnderlineStyle = {styles.tabBarUnderline}
                  tabBarActiveTextColor= '#fff'
                  tabBarInactiveTextColor = '#f1f1f1'>
                    <View key='1u' tabLabel='推荐' style={styles.base}><Text>推荐</Text></View>
                    <View key='2u' tabLabel='本地学习' style={styles.base}><Text>课件、实验讲义、题库</Text></View>
                    <View key='3u' tabLabel='精品课' style={styles.base}><Text>网络精品课</Text></View>
                    <View key='4u' tabLabel='免费课程' style={styles.base}><Text>免费课程</Text></View>
                </ScrollableTabView>
            </View>
        )
  	}
}	

const styles = StyleSheet.create({
    base: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    tabBarUnderline: {
        backgroundColor: '#3e9ce9',
        height: 2
    },
    tab: {
        paddingBottom: 0
    },
    tabText: {
        fontSize: 13
    },
})

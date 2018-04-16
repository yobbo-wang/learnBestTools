/**
 * learnBestTools
 * 本地学习实验与讲义
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
	Image,
	SectionList,
	StyleSheet,
	TouchableHighlight,
    Dimensions,
}
from 'react-native'
import GlobalStyles from '../../res/styles/GlobalStyles'
import ViewUtils from '../../expand/ViewUtils'
const width = Dimensions.get('window').width

export default class LearnDetail extends Component {
	constructor(props) {
        super(props)
        this.state = {
            theme: this.props.screenProps.theme
        }
    }

    renderItem(data) {
        if(data.length == 0) return null
    	return(
            <View style={[styles.item_container, styles.item]}>
                {
                    data.map((item,i) => {
                        return (
                            <TouchableHighlight onPress={(item) => this.onClickItem(item.id)}>
                                <View style={[styles.item, styles.item_child]}>
                                    <Text style={{color:'#333'}}>{item.title}</Text>
                                </View>
                            </TouchableHighlight>
                        )
                    })
                }
            </View>
        )
    }

    onClickItem(id) {
        
    }

    getClassifyHeader(id, icon, text, length) {
        let classifyStyle = null
        if(length > 0) classifyStyle = {marginBottom: 1}
    	return ViewUtils.getClassifyHeader(() => this.onClickItem(id), icon, text, this.state.theme.styles.tabBarSelectedIcon, classifyStyle)
    }


	render() {
		var sections = [
            { key: "全部课程", id: "all", img: require('../../res/images/ic_code.png'), data: 
                [
                    {list: [] }
                ]
            },
            { key: "计算机", id: "centp" , img: require('../../res/images/ic_computer.png') ,data:
            	[
                    {list: [{title: "计算机基础", id: '1'}, {title: "编程语言", id: '2'}] },
                    {list: [{title: "数据库与数据结构", id: '3'}, {title: "计算机应用", id: '4'}]},
                    {list: [{title: "软件工程", id: '5'}, {title: "计算机组成", id: '6'}]},
                ]
            },
            { key: "经济管理", id: "centp" , img: require('../../res/images/ic_computer.png') ,data:
                [
                    {list: [{title: "经济学", id: '1'}, {title: "金融学", id: '2'}] },
                    {list: [{title: "工商管理", id: '3'}, {title: "电子商务", id: '4'}]},
                    {list: [{title: "公共管理", id: '5'}, {title: "管理科学和工程", id: '6'}]},
                ]
            },
            { key: "心理学", id: "all", img: require('../../res/images/ic_code.png'), data: 
                [
                    {list: [] }
                ]
            },
            { key: "外语", id: "centp" , img: require('../../res/images/ic_computer.png') ,data:
                [
                    {list: [{title: "通用英语", id: '1'}, {title: "专门用途英语", id: '2'}] },
                    {list: [{title: "跨文化交际", id: '3'}, {title: "文学与语言学", id: '4'}]},
                    {list: [{title: "翻译", id: '5'},{title: "文学与语言学", id: '4'}]},
                ]
            },
            { key: "文学历史", id: "centp" , img: require('../../res/images/ic_computer.png') ,data:
                [
                    {list: [{title: "学问", id: '1'}, {title: "专门用途英语", id: '2'}] },
                    {list: [{title: "跨文化交际", id: '3'}, {title: "文学与语言学", id: '4'}]},
                    {list: [{title: "翻译", id: '5'},{title: "文学与语言学", id: '4'}]},
                ]
            },
        ]
		return (
    		<View style={GlobalStyles.listView_container}>
    			 <SectionList
                        ListHeaderComponent = {(<View></View>)}
                        renderSectionHeader = {(data) => {
                            return  this.getClassifyHeader(data.section.id, data.section.img, data.section.key, data.section.data.length)
                        }}
                        renderItem = {(data) => {
                            return this.renderItem(data.item.list)
                        }}
                        sections = {sections}
                        ItemSeparatorComponent= {() => {
                            return (<View style={{height:0}}><Text></Text></View>)
                        }}
                 /> 
    		</View>
		)
			
	}

}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'center',
        height:45,
    },
    item_container: {
        padding: 10, 
        borderTopWidth: 1,
        borderColor: '#f3f3f4',
        borderStyle: null,
    },
    item_child: {
        width: width/2,
    }
})
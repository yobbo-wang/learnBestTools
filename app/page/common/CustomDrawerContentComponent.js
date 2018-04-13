/**
 * learnBestTools
 * 抽屉式自定义组件
 * @author yobbo
 * @date 2018-04-01
 * @email yobbo_wang@163.com
 * @copyright Copyright © 2016 yobbo
 */
'use strict'
import React  from 'react'
import {
    StyleSheet,
    ScrollView,
}
from 'react-native'
import { DrawerItems, SafeAreaView } from 'react-navigation'

export default class CustomDrawerContentComponent {
	static drawerContent(props) {
		return(
			<ScrollView>
			    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
			      <DrawerItems {...props} />
			    </SafeAreaView>
			 </ScrollView>
		)
	}
}	

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

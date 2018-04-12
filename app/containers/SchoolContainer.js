/*
* my 我的入口
*/
import React, {Component} from 'react'
import { 
	StyleSheet,
	View, 
	Text, 
	Image, 
}from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import School from '../page/school/Index'
import * as schoolCreators from '../actions/school'
import NavigationUtil from '../expand/NavigationUtil'

class SchoolContainer extends Component {

	constructor(props) {
        super(props)
        this.state ={
            theme: this.props.screenProps.theme
        }
    } 

    static navigationOptions = ({ navigation,screenProps }) => ({
      title: '校园',
      tabBarIcon: ({ tintColor }) => (
        <Image style={{width: 26, height: 26,resizeMode: 'contain',tintColor: tintColor == '#999999' ? tintColor : 
            screenProps.appComponent.state.theme?screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor
        }} 
        source={require('../res/images/ic_favorite.png')} />
      ),
      headerStyle:{
          backgroundColor: screenProps.appComponent.state.theme?screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor
        },
        tabBarLabel: ({ tintColor, fontSize}) => (
            <Text style={{color: tintColor == '#999999' ? tintColor : screenProps.appComponent.state.theme?
            screenProps.appComponent.state.theme.themeColor:screenProps.theme.themeColor, fontSize:10}}>校园</Text>
        ),
  })

	componentDidMount() {
        this.props.screenProps.appComponent.addSubscriber(this.onSubscriber)
    }

    componentWillUnmount() {
        this.props.screenProps.appComponent.removeSubscriber(this.onSubscriber);
    }

    // 回调改变主题颜色
    onSubscriber = (updateTheme)=> {
        var changedValues = this.props.screenProps.appComponent.changedValues
        if (changedValues.app.themeChange && updateTheme) {
            this.setState({
                theme: updateTheme
            })
            NavigationUtil.setParams(this.props.navigation, 'School', updateTheme)
        }
    }

	render() {
    	return <School {...this.props} />
  	}

}	

//关联状态机
const mapStateToProps = (state) => {
  	const { school } = state
  	return {
    	school
  	}
}

const mapDispatchToProps = (dispatch) => {
  	const schoolActions = bindActionCreators(schoolCreators, dispatch)
  	return {
    	schoolActions
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolContainer)
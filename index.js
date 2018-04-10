import { AppRegistry } from 'react-native';
import setup from './app/setup';

AppRegistry.registerComponent('learnBestTools', () => setup);
//org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier) 
/*
xcodebuild  -exportArchive -archivePath ./learnBestTools.xcarchive -exportPath . -exportOptionsPlist ~/workspace/learnBestTools/ios/AutoPackageScript/EnterpriseExportOptionsPlist.plist
*/
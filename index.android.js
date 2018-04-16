import { AppRegistry } from 'react-native';
import App from './App';
import PushScreen from './PushScreen';

AppRegistry.registerComponent('NavDemoMiniApp', () => App);
AppRegistry.registerComponent('NavDemoMiniApp/push_screen', () => PushScreen);
AppRegistry.registerComponent('NavDemoMiniApp/modal_Screen', () => PushScreen);

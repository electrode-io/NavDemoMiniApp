import { AppRegistry } from 'react-native';
import App from './App';
import PushScreen from './PushScreen';
import ShowModal from './ShowModal';


AppRegistry.registerComponent('NavDemoMiniApp', () => App);
AppRegistry.registerComponent('NavDemoMiniApp/push_screen', () => PushScreen);
AppRegistry.registerComponent('NavDemoMiniApp/show_modal', () => ShowModal);

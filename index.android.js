import { AppRegistry } from 'react-native';
import App from './App';
import PushScreen from './PushScreen';
import ShowModal from './ShowModal';
import ShowToast from './ShowToast';
import CustomButtons from './CustomButtons';


AppRegistry.registerComponent('NavDemoMiniApp', () => App);
AppRegistry.registerComponent('NavDemoMiniApp/push_screen', () => PushScreen);
AppRegistry.registerComponent('NavDemoMiniApp/show_modal', () => ShowModal);
AppRegistry.registerComponent('NavDemoMiniApp/show_toast', () => ShowToast);
AppRegistry.registerComponent('NavDemoMiniApp/custom_button', () => CustomButtons);

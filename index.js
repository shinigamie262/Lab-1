import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import Weather from './Src/Components/weather';
import Login from './Src/Components/login';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(Weather);

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import NavigationScreens from './src/navigation/NavigationScreens';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationScreens />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

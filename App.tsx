import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useAppSelector } from './src/store/hooks';
import NameScreen from './src/screens/NameScreen';
import UsernameScreen from './src/screens/UsernameScreen';
import HomeScreen from './src/screens/HomeScreen';
import RoomDetailScreen from './src/screens/RoomDetailScreen';

const AppNavigator = () => {
  const currentScreen = useAppSelector((state) => state.app.currentScreen);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'name':
        return <NameScreen />;
      case 'username':
        return <UsernameScreen />;
      case 'home':
        return <HomeScreen />;
      case 'roomDetail':
        return <RoomDetailScreen />;
      default:
        return <NameScreen />;
    }
  };

  return (
    <>
      <StatusBar style="dark" />
      {renderScreen()}
    </>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

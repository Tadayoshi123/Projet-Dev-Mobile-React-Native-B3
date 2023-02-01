import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from './theme';
import notifee from '@notifee/react-native';

const Stack = createNativeStackNavigator();

const PublicStack = ({navigation}) => {
  const [loading, setLoading] = React.useState(true);

  const createNotificationChannel = async () => {
    await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: 'Login Notification',
      body: 'You have successfully logged in',
      android: {
        channelId: 'default',
        smallIcon: 'ic_launcher',
      },
    });
  };

  useEffect(() => {
    AsyncStorage.getItem('token').then(token => {
      if (token) {
        setLoading(false);
        createNotificationChannel();
        navigation.navigate('MENU', {screen: 'Home'});
      } else {
        setLoading(false);
      }
    });
  });

  if (loading) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Theme.colors.secondary,
        },
        headerTintColor: Theme.colors.senary,
        headerTitleStyle: {
          fontWeight: 'thin',
          fontFamily: Theme.fonts.thin,
          fontSize: 36,
        },
      }}>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{title: 'SIGN IN'}}
      />
    </Stack.Navigator>
  );
};

export default PublicStack;

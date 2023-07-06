import ListPage from './screens/list_page/list_page';
import ContactListScreen from './screens/new_note/contacts_list';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import notifee, {EventType} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import * as RootNavigation from './screens/root_navigation';
import NotifScreen1 from './screens/notif_screens/notif_screen_1';
import NotifScreen2 from './screens/notif_screens/notif_screen_2';
import {PermissionsAndroid} from 'react-native';

export default function App() {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    console.log('hihihihiih');
  }, []);

  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <Stack.Navigator initialRouteName={'ListPage'}>
        <Stack.Screen
          name="ListPage"
          component={ListPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactsListScreen"
          component={ContactListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotifScreen1"
          component={NotifScreen1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="NotifScreen2"
          component={NotifScreen2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

/**
 * @format
 */

import {AppRegistry, PermissionsAndroid} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import notifee, {EventType} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import * as RootNavigation from './screens/root_navigation';

const onAppBootstap = async () => {
  await messaging().registerDeviceForRemoteMessages();
  const granted = await PermissionsAndroid.requestMultiple([
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
  ]);
  await notifee.requestPermission({sound: true, badge: true, alert: true});
  const token = await messaging().getToken();
  console.log('Token: ', token);
};

onAppBootstap();

notifee.onBackgroundEvent(async ({type, detail}) => {
  console.log('Background event detail: ', detail);
  console.log('Background event type: ', type);
  if (type === EventType.ACTION_PRESS) {
    if (detail.pressAction.id === 'open-screen-1') {
      RootNavigation.navigate('NotifScreen1');
    }
    if (detail.pressAction.id === 'open-screen-2') {
      RootNavigation.navigate('NotifScreen2');
    }
  }
});

messaging().onMessage(async remoteMessage => {
  console.log('Message received: ', JSON.stringify(remoteMessage));

  const foregroundChannel = await notifee.createChannel({
    id: 'foreground',
    name: 'foreground',
  });

  await notifee.displayNotification({
    title: 'Hi',
    body: `Hi from ${remoteMessage.data.hello} in foreground mode`,
    android: {
      channelId: foregroundChannel,
    },
  });
});

messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message received: ', remoteMessage.data.hello);

  const backgroundChannel = await notifee.createChannel({
    id: 'background',
    name: 'background',
  });

  await notifee.displayNotification({
    title: 'Hi',
    body: `Hi from ${remoteMessage.data.hello} in background mode`,
    android: {
      channelId: backgroundChannel,
      actions: [
        {
          title: 'Open Screen 1',
          pressAction: {
            id: 'open-screen-1',
            launchActivity: 'default',
          },
        },
        {
          title: 'Open Screen 2',
          pressAction: {
            id: 'open-screen-2',
            launchActivity: 'default',
          },
        },
      ],
    },
  });
});

AppRegistry.registerComponent(appName, () => App);

// PermissionHandler.js

import React, { useEffect } from 'react';
import { Platform, PermissionsAndroid, Alert } from 'react-native';

const PermissionHandler = ({ permission, message }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          permission,
          {
            title: 'Permission Request',
            message: message,
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log(`${permission} permission granted`);
        } else {
          console.log(`${permission} permission denied`);
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      // For iOS, permission is requested automatically and does not need to be handled here
    }
  };

  return null; // This component doesn't render anything visible
};

export default PermissionHandler;

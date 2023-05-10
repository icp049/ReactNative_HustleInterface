import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import LoginScreen from './LoginScreen';

const Account = ({ navigation }) => {
  const handleLogout = () => {
    // Perform any necessary logout actions here
    // Navigate to LoginScreen component
    navigation.navigate('LoginScreen');
  };

  return (
    <View>
      <Text>Account</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;

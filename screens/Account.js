import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Account = () => {
const navigation = useNavigation();

const handleLogout = () => {
// Perform any necessary logout actions here
// Navigate to LoginScreen component
navigation.navigate('LoginScreen');
};

const handleNavigateBack = () => {
navigation.goBack();
};

const handleNavigateToPersonalInfo = () => {
navigation.navigate('PersonalInfoScreen');
};

const handleNavigateToPayments = () => {
navigation.navigate('PaymentsScreen');
};

const handleNavigateToLogin = () => {
navigation.navigate('LoginScreen');
};

const handleNavigateToAccessibility = () => {
navigation.navigate('AccessibilityScreen');
};

return (
<View>
<Text>Account</Text>
<TouchableOpacity onPress={handleLogout}>
<Text>Logout</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleNavigateBack}>
<Text>Go Back</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleNavigateToPersonalInfo}>
<Text>Personal Information</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleNavigateToPayments}>
<Text>Payments</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleNavigateToLogin}>
<Text>Login</Text>
</TouchableOpacity>
<TouchableOpacity onPress={handleNavigateToAccessibility}>
<Text>Accessibility</Text>
</TouchableOpacity>
</View>
);
};

export default Account;
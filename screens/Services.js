import React from 'react';
import { View, Text, Button } from 'react-native';

const Services = () => {
  // Mock data for booked services
  const bookedServices = [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' },
    { id: 3, name: 'Service 3' },
  ];

  // Mock data for past services
  const pastServices = [
    { id: 4, name: 'Service 4' },
    { id: 5, name: 'Service 5' },
    { id: 6, name: 'Service 6' },
  ];

  // Mock data for ongoing services
  const ongoingServices = [
    { id: 7, name: 'Service 7' },
    { id: 8, name: 'Service 8' },
    { id: 9, name: 'Service 9' },
  ];

  const handleReceiptNavigation = (serviceName) => {
    // Replace this with your navigation logic to navigate to the receipt screen
    console.log(`Navigating to receipt for ${serviceName}`);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Booked Services</Text>
        {bookedServices.map((service) => (
          <View key={service.id} style={styles.serviceContainer}>
            <Text>{service.name}</Text>
            <Button
              title="View Receipt"
              onPress={() => handleReceiptNavigation(service.name)}
            />
          </View>
        ))}
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Ongoing Services</Text>
        {pastServices.map((service) => (
          <View key={service.id} style={styles.serviceContainer}>
            <Text>{service.name}</Text>
            <Button
              title="View Receipt"
              onPress={() => handleReceiptNavigation(service.name)}
            />
          </View>
        ))}
      </View>

      <View style={styles.container}>
        <Text style={styles.title}>Past Services</Text>
        {ongoingServices.map((service) => (
          <View key={service.id} style={styles.serviceContainer}>
            <Text>{service.name}</Text>
            <Button
              title="View Receipt"
              onPress={() => handleReceiptNavigation(service.name)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: 'lightgray',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
};

export default Services;

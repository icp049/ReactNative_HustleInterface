// Explore.js

import React from 'react';
import { View } from 'react-native';
import PersonContainer from '../components/PersonContainer';

const Landscaper = () => {
  return (
    <View>
      <PersonContainer
        imageSource={require('../images/photo.jpg')}
        name="ian Pedeglorio"
        company="Freelance"
      />
      </View>
  );
};

export default Landscaper;

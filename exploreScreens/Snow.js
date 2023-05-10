// Explore.js

import React from 'react';
import { View } from 'react-native';
import PersonContainer from '../components/PersonContainer';

const Snow = () => {
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

export default Snow;

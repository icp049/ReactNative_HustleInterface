import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import Cleaner from '../exploreScreens/Cleaner';
import Snow from '../exploreScreens/Snow';
import Plumber from '../exploreScreens/Plumber';
import Landscaper from '../exploreScreens/Landscaper';

const Explore = () => {
  const [activePage, setActivePage] = useState(null);

  const handlePageClick = (pageName) => {
    setActivePage(activePage === pageName ? null : pageName);
  };

  return (
    <View style={styles.container}>

<View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Enter your location"
          placeholderTextColor="#999"
        />
      </View>



      <View style={styles.navbar}>
        <TouchableOpacity
          style={[
            styles.button,
            activePage === 'cleaner' && styles.activeButton,
          ]}
          onPress={() => handlePageClick('cleaner')}
        >
          <Text style={styles.buttonText}>Cleaning</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activePage === 'snow' && styles.activeButton,
          ]}
          onPress={() => handlePageClick('snow')}
        >
          <Text style={styles.buttonText}>Snow</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activePage === 'plumber' && styles.activeButton,
          ]}
          onPress={() => handlePageClick('plumber')}
        >
          <Text style={styles.buttonText}>Plumbing</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button,
            activePage === 'landscaper' && styles.activeButton,
          ]}
          onPress={() => handlePageClick('landscaper')}
        >
          <Text style={styles.buttonText}>Landscaping</Text>
        </TouchableOpacity>
      </View>

    

      {activePage === 'landscaper' && <Landscaper />}
      {activePage === 'cleaner' && <Cleaner />}
      {activePage === 'snow' && <Snow />}
      {activePage === 'plumber' && <Plumber />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 3,
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  activeButton: {
    borderBottomColor: '#000',
    borderBottomWidth: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
    fontSize: 16,
  },
});

export default Explore;

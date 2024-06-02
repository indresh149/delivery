import React from 'react';
import {View, TextInput, StyleSheet, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import IconMic from 'react-native-vector-icons/FontAwesome';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={24} color="#FF820D" style={styles.searchIcon} />
      <TextInput
        placeholder="Search for “biriyani”"
        placeholderTextColor="gray"
        style={styles.input}
      />
      <Image
        source={require('../../assets/images/mic.png')}
        style={styles.mic}
      />
      <IconMic
        name="microphone"
        size={24}
        color="#FF820D"
        style={styles.filterIcon}
      />
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    marginTop: height / 60,
    height: height / 15,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',

    borderWidth: 1,
    borderColor: '#E6E6E6',
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: 'black',
    paddingHorizontal: 10,
  },
  filterIcon: {
    marginLeft: 10,
  },
  mic: {
    marginRight: 5,
    height: height * 0.04,
  },
});

export default SearchBar;

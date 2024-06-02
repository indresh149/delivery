import React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Card} from '@rneui/themed';
import {Image} from '@rneui/base';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <View style={styles.wrapper}>
      <Card containerStyle={styles.container}>
        <View style={styles.mainView}>
          <View>
            <Icon name="arrow-back" size={30} color="#000" />
            <Text style={styles.largeText}>Foods</Text>
            <Text style={styles.grayText}>Deliver at</Text>
            <View style={styles.locationCont}>
              <Icon
                style={styles.navIcon}
                name="navigate"
                size={30}
                color="#0862F7"
              />
              <Text style={styles.grayText}>Court More, Burnpur</Text>
            </View>
          </View>
          <View>
            <Image
              source={require('../../assets/images/biryani.png')}
              alt="food"
              style={styles.image}
            />
          </View>
        </View>
        <SearchBar />
      </Card>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: height * 0.32,
    position: 'absolute',
    top: 0,
  },
  container: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5, 
    borderRadius: 10, 
    margin: 0,
    padding: 10,
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeText: {
    marginTop: 10,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  grayText: {
    marginTop: 10,
    fontSize: 16,
    color: '#ccc',
    fontWeight: 'bold',
  },
  locationCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navIcon: {
    marginRight: 5,
    marginTop: 10,
  },
  image: {
    resizeMode: 'contain',
    width: width * 0.3,
    height: height * 0.2,
    borderRadius: 10,
  },
});

export default Header;

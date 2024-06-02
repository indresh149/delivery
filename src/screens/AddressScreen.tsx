import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import IconLocation from 'react-native-vector-icons/MaterialIcons';
import IconPlus from 'react-native-vector-icons/Entypo';
import IconPerson from 'react-native-vector-icons/MaterialIcons';
import IconHome from 'react-native-vector-icons/Ionicons';
import IconEdit from 'react-native-vector-icons/Entypo';
import IconDelete from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOffice from 'react-native-vector-icons/Foundation';

const AddressScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.mainView}>
          <View>
            <Icon
              name="arrow-back"
              style={styles.arrowBack}
              size={30}
              color="#000"
            />
            <Text style={styles.largeText}>Choose delivery location</Text>
          </View>
        </View>
      </View>

      <View style={styles.currentLocationCont}>
        <IconLocation name="my-location" size={25} color="#FF820D" />
        <Text style={styles.locationText}>Use my current location</Text>
      </View>

      <Image
        source={require('../../assets/images/horline.png')}
        style={styles.lineHorizon}
      />

      <View style={styles.currentLocationCont}>
        <IconPlus name="plus" size={25} color="#FF820D" />
        <Text style={styles.locationText}>Add new address</Text>
      </View>

      <Image
        source={require('../../assets/images/horline.png')}
        style={styles.lineHorizon}
      />

      <View style={styles.currentLocationCont}>
        <IconPerson name="person-add-alt-1" size={25} color="#FF820D" />
        <Text style={styles.locationText}>Order for someone else</Text>
      </View>

      <Text style={styles.savedAddress}>Saved Address</Text>

      <View style={styles.addresContainer}>
        <View style={styles.homeContainer}>
          <IconHome name="home" size={20} color="#FF820D" />
          <Text style={styles.typeAdd}>Home</Text>
        </View>
        <View style={styles.deleteandAddress}>
          <View style={styles.flexWrapAdd}>
            <Text style={[styles.locationText, {color: 'black'}]}>
              S.P Mukherjee Road, Mohishila, Asansol Pin- 713303
            </Text>
          </View>
          <IconEdit name="edit" size={20} color="black" />
          <IconDelete name="delete" size={20} color="black" />
        </View>
      </View>

      <Image
        source={require('../../assets/images/horline.png')}
        style={styles.lineHorizontalNew}
      />

      <View style={styles.addresContainer}>
        <View style={styles.homeContainer}>
          <IconOffice name="shopping-bag" size={20} color="#FF820D" />
          <Text style={styles.typeAdd}>Office</Text>
        </View>
        <View style={styles.deleteandAddress}>
          <View style={styles.flexWrapAdd}>
            <Text style={[styles.locationText, {color: 'black'}]}>
              Tirupati Complex Burnpur Road, Court More, Asansol, 713304
            </Text>
          </View>
          <IconEdit name="edit" size={20} color="black" />
          <IconDelete name="delete" size={20} color="black" />
        </View>
      </View>

      <Image
        source={require('../../assets/images/horline.png')}
        style={styles.lineHorizontalNew}
      />

      <View style={[styles.addresContainer, {marginBottom: 40}]}>
        <View style={styles.homeContainer}>
          <Text style={styles.typeAdd}>Other</Text>
        </View>
        <View style={styles.deleteandAddress}>
          <View style={styles.flexWrapAdd}>
            <Text style={[styles.locationText, {color: 'black'}]}>
              Suraj Jain
            </Text>
            <Text style={[styles.locationText, {color: 'black'}]}>
              8765431234/9876567890
            </Text>
            <Text style={[styles.locationText, {color: 'black'}]}>
              Tirupati Complex Burnpur Road, Court More, Asansol, 713304
            </Text>
          </View>
          <IconEdit name="edit" size={20} color="black" />
          <IconDelete name="delete" size={20} color="black" />
        </View>
      </View>
    </ScrollView>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  wrapper: {
    width: width,
    height: height * 0.17,
  },

  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeText: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
  },
  arrowBack: {
    marginLeft: 20,
    marginTop: 10,
  },
  currentLocationCont: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  locationText: {
    fontSize: 15,
    marginLeft: 10,
    color: '#FF820D',
  },
  lineHorizon: {
    width: width,
    height: 3,
  },
  savedAddress: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    color: '#000000',
  },
  addresContainer: {
    flexDirection: 'column',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  homeContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 10,
  },
  typeAdd: {
    fontSize: 15,
    marginLeft: 10,
    color: '#FF820D',
  },
  deleteandAddress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
  },
  flexWrapAdd: {
    width: width * 0.6,
  },
  lineHorizontalNew: {
    marginLeft: 30,
    width: width - 40,
    height: 3,
  },
});

export default AddressScreen;

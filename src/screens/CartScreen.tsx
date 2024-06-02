import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import SearchBar from '../components/SearchBar';

import {Card} from '@rneui/base';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import {imagesNewRow, imagesOpenStoreNew} from '../../utils/data/popularData';

const CartScreen = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [selectedFooterOption, setSelectedFooterOption] = useState<
    string | null
  >(null);

  const options = ['Offers', 'Top rated', 'Loose', 'Combo'];
  const footerOptions = ['See stores', 'Dishes'];

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleSelectFooterOption = (option: string) => {
    setSelectedFooterOption(option);
  };

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleSelectImage = (index: number) => {
    setSelectedImage(index);
  };

  const [quantities, setQuantities] = useState<number[]>(
    Array(imagesNewRow.length).fill(0),
  );

  const handleAddPress = (index: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = 1;
      return newQuantities;
    });
  };

  const handleIncrement = (index: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const handleDecrement = (index: number) => {
    setQuantities(prevQuantities => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] =
        newQuantities[index] > 1 ? newQuantities[index] - 1 : 0;
      return newQuantities;
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Card containerStyle={styles.cardcontainer}>
          <View style={styles.mainView}>
            <View>
              <Icon name="arrow-back" size={30} color="#000" />
              <Text style={styles.largeText}>Select from store or product</Text>
            </View>
          </View>
          <SearchBar />

          <View style={styles.containerinner}>
            {options.map(option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.optionButton,
                  selectedOption === option && styles.selectedOptionButton,
                ]}
                onPress={() => handleSelectOption(option)}>
                {option === 'Offers' && (
                  <Image
                    source={require('../../assets/icons/discount.png')}
                    style={styles.imageDiscount}
                  />
                )}
                <Text
                  style={[
                    styles.optionText,
                    selectedOption === option && styles.selectedOptionText,
                  ]}>
                  {option}
                </Text>
                {selectedOption === option && (
                  <Icons
                    style={styles.crossIcon}
                    name="cross"
                    size={20}
                    color="white"
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.footer}>
            {footerOptions.map(option => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.footerButton,
                  selectedFooterOption === option &&
                    styles.selectedFooterButton,
                ]}
                onPress={() => handleSelectFooterOption(option)}>
                <Text
                  style={[
                    styles.footerText,
                    selectedFooterOption === option &&
                      styles.selectedFooterText,
                  ]}>
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      </View>

      <View style={styles.wrapperRow}>
        <Card containerStyle={styles.cardcontainerRow}>
          <View style={styles.innerRow}>
            {imagesNewRow.map((image, index) => (
              <TouchableOpacity
                key={index}
                style={styles.imageContainer}
                onPress={() => handleSelectImage(index)}>
                <Image source={image.src} style={styles.imageBiryani} />
                <Text
                  style={[
                    styles.text,
                    selectedImage === index && styles.selectedText,
                  ]}>
                  {image.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Card>
      </View>

      <View style={styles.wrapperRowOpenStore}>
        <Card containerStyle={styles.cardcontainerRowOpenStore}>
          <View style={styles.nameContainer}>
            <Text style={styles.storeNameOpen}>Punjabi Rasoi</Text>

            <View style={styles.starContainerNearYou}>
              <Text style={styles.soldText}>4</Text>
              <Icons name="star" size={18} color="white" style={styles.star} />
            </View>
            <Text style={styles.openStoreText}>Open store</Text>
          </View>
          <View style={styles.addressContainers}>
            <Text style={styles.addressText}>
              Court More, Opposite Orodental Hospital Asansol
            </Text>
          </View>

          <View style={styles.containerOpenStore}>
            {imagesOpenStoreNew.map((image, index) => (
              <View key={index} style={styles.imageContainerOpenStore}>
                <View style={styles.imageWrapper}>
                  <Image source={image.src} style={styles.imageOpenStore} />
                  <Image
                    source={image.topRightIcon}
                    style={styles.topRightIcon}
                  />
                </View>
                <Text style={styles.textopen}>{image.text}</Text>
                <Text style={styles.quantity}>{image.quantity}</Text>
                <Text style={styles.normalPrice}>{image.price}</Text>
                <Text style={styles.discountPrice}>{image.discountPrice}</Text>

                <View>
                  {quantities[index] === 0 ? (
                    <TouchableOpacity
                      style={styles.addButtonconatiner}
                      onPress={() => handleAddPress(index)}>
                      <Text style={styles.addButtonPink}>Add</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>
                        {quantities[index]}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <Image
                  source={require('../../assets/images/horline.png')}
                  style={styles.horizontalLine}
                />
              </View>
            ))}
          </View>
        </Card>
      </View>

      <View style={[styles.wrapperRowOpenStore, {marginTop: 0}]}>
        <Card containerStyle={styles.cardcontainerRowOpenStore}>
          <View style={styles.nameContainer}>
            <Text style={styles.storeNameOpen}>Nisha Groceries</Text>

            <View style={styles.starContainerNearYou}>
              <Text style={styles.soldText}>4</Text>
              <Icons name="star" size={18} color="white" style={styles.star} />
            </View>
            <Text style={styles.openStoreText}>Open store</Text>
          </View>
          <View style={styles.addressContainers}>
            <Text style={styles.addressText}>
              Court More, Opposite Orodental Hospital Asansol
            </Text>
          </View>

          <View style={styles.containerOpenStore}>
            {imagesOpenStoreNew.map((image, index) => (
              <View key={index} style={styles.imageContainerOpenStore}>
                <View style={styles.imageWrapper}>
                  <Image source={image.src} style={styles.imageOpenStore} />
                  <Image
                    source={image.topRightIcon}
                    style={styles.topRightIcon}
                  />
                </View>
                <Text style={styles.textopen}>{image.text}</Text>
                <Text style={styles.quantity}>{image.quantity}</Text>
                <Text style={styles.normalPrice}>{image.price}</Text>
                <Text style={styles.discountPrice}>{image.discountPrice}</Text>

                <View>
                  {quantities[index] === 0 ? (
                    <TouchableOpacity
                      style={styles.addButtonconatiner}
                      onPress={() => handleAddPress(index)}>
                      <Text style={styles.addButtonPink}>Add</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>
                        {quantities[index]}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
                <Image
                  source={require('../../assets/images/horline.png')}
                  style={styles.horizontalLine}
                />
              </View>
            ))}
          </View>
        </Card>
      </View>

      <View
        style={[styles.wrapperRowOpenStore, {marginTop: 0, marginBottom: 30}]}>
        <Card containerStyle={styles.cardcontainerRowOpenStore}>
          <View style={styles.nameContainer}>
            <Text style={styles.storeNameOpen}>Nisha Groceries</Text>

            <View style={styles.starContainerNearYou}>
              <Text style={styles.soldText}>4</Text>
              <Icons name="star" size={18} color="white" style={styles.star} />
            </View>
            <Text style={styles.openStoreText}>Open store</Text>
          </View>
          <View style={styles.addressContainers}>
            <Text style={styles.addressText}>
              Court More, Opposite Orodental Hospital Asansol
            </Text>
          </View>

          <View style={styles.containerOpenStore}>
            {imagesOpenStoreNew.map((image, index) => (
              <View key={index} style={styles.imageContainerOpenStore}>
                <View style={styles.imageWrapper}>
                  <Image source={image.src} style={styles.imageOpenStore} />
                  <Image
                    source={image.topRightIcon}
                    style={styles.topRightIcon}
                  />
                </View>
                <Text style={styles.textopen}>{image.text}</Text>
                <Text style={styles.quantity}>{image.quantity}</Text>
                <Text style={styles.normalPrice}>{image.price}</Text>
                <Text style={styles.discountPrice}>{image.discountPrice}</Text>

                <View>
                  {quantities[index] === 0 ? (
                    <TouchableOpacity
                      style={styles.addButtonconatiner}
                      onPress={() => handleAddPress(index)}>
                      <Text style={styles.addButtonPink}>Add</Text>
                    </TouchableOpacity>
                  ) : (
                    <View style={styles.quantityContainer}>
                      <TouchableOpacity
                        onPress={() => handleDecrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>-</Text>
                      </TouchableOpacity>
                      <Text style={styles.quantityText}>
                        {quantities[index]}
                      </Text>
                      <TouchableOpacity
                        onPress={() => handleIncrement(index)}
                        style={styles.quantityButton}>
                        <Text style={styles.quantityButtonText}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>

                <Image
                  source={require('../../assets/images/horline.png')}
                  style={styles.horizontalLine}
                />
              </View>
            ))}
          </View>
        </Card>
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
    height: height * 0.35,
  },
  cardcontainer: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 0,
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
  wrapperCraving: {
    width: width,
    height: height * 0.42,
    top: 10,
  },
  containerCraving: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  mainViewCraving: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerinner: {
    flexDirection: 'row',
    marginTop: 20,
    marginRight: 10,
  },
  optionButton: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginEnd: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    width: 100,
  },
  selectedOptionButton: {
    marginRight: 10,
    backgroundColor: '#FFA500',
  },
  optionText: {
    fontSize: 12,
    color: '#000000',
  },
  selectedOptionText: {
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    width: '100%',
    marginTop: 20,
  },
  footerButton: {
    padding: 10,
  },
  selectedFooterButton: {
    borderRadius: 20,
  },
  footerText: {
    color: '#000000',
    fontSize: 16,
  },
  selectedFooterText: {
    color: '#FFA500',
  },
  imageDiscount: {
    marginRight: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  crossIcon: {
    marginLeft: 5,
  },
  imageContainer: {
    alignItems: 'center',
  },
  wrapperRow: {
    width: width,
    height: height * 0.13,
    marginTop: 10,
  },
  cardcontainerRow: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  imageBiryani: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 12,
    color: '#000',
  },
  selectedText: {
    fontSize: 16,
    color: '#FF820D',
  },
  wrapperRowOpenStore: {
    width: width,
    height: height * 0.48,
    marginTop: 10,
  },
  cardcontainerRowOpenStore: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  containerOpenStore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10,
  },
  imageContainerOpenStore: {
    alignItems: 'center',
    width: (width - 40) / 3,
  },
  imageWrapper: {
    position: 'relative',
  },
  imageOpenStore: {
    resizeMode: 'contain',
    width: (width - 40) / 2.5,
    height: 80,
  },
  topRightIcon: {
    resizeMode: 'contain',
    position: 'absolute',
    top: -15,
    right: 5,
    width: 30,
    height: 30,
  },
  textopen: {
    marginTop: 5,
    fontSize: 12,
    color: '#000',
  },
  starContainerNearYou: {
    height: 25,
    width: width / 8,
    backgroundColor: '#FF820D',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 3,
    paddingBottom: 3,
    marginTop: 15,
    marginLeft: 25,
    justifyContent: 'center',
  },
  soldText: {
    marginTop: 2,
    marginLeft: 10,
    marginRight: 5,
    color: 'white',
  },
  star: {
    marginTop: 2,
    marginLeft: 5,
    marginRight: 5,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  storeNameOpen: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
    marginTop: 10,
  },
  openStoreText: {
    marginTop: 15,
    marginLeft: 60,
    color: '#FF820D',
  },
  addressContainers: {
    width: width - 100,
    height: 50,
  },
  addressText: {
    marginTop: 5,
    marginLeft: 10,
    flexWrap: 'wrap',
    fontSize: 14,
    color: '#000',
  },
  quantity: {
    marginRight: 20,
    fontSize: 15,
    color: '#ccc',
  },
  discountPrice: {
    marginTop: 10,
    fontSize: 12,
    color: '#FF820D',
    textDecorationLine: 'line-through',
  },
  normalPrice: {
    marginTop: 10,
    fontSize: 15,
    color: '#000',
  },
  addButton: {
    borderRadius: 10,
    padding: 10,
  },
  addButtonText: {
    color: 'white',
    textAlign: 'center',
  },
  quantityContainer: {
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF820D',
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 8,
    backgroundColor: '#FF820D',
  },
  quantityButton: {
    height: 35,
    backgroundColor: '#FF820D',
    paddingTop: 2,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    backgroundColor: '#FF820D',
    color: 'white',
    fontSize: 18,
  },
  quantityText: {
    color: 'white',
    paddingHorizontal: 0,
    fontSize: 18,
  },
  addButtonPink: {
    color: '#FF820D',
    borderRadius: 10,
    textAlign: 'center',
  },
  addButtonconatiner: {
    height: 30,
    width: 90,
    backgroundColor: '#FFEDEB',
    color: '#FF820D',
    paddingTop: 5,
    borderWidth: 1,
    borderColor: '#FF820D',
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 10,
  },
  horizontalLine: {
    width: width - 40,
    height: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CartScreen;

import {Card} from '@rneui/base';
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {rowsDataNew} from '../../utils/data/popularData';

interface MoodItem {
  text: string;
  AliasName: string;
  source: any;
  item?: any;
  marginTopValue?: number;
}

const SpecialOffers = () => {
  const [selectedMoodIndexes, setSelectedMoodIndexes] = useState<
    {rowIndex: number; index: number}[]
  >([]);

  const handleMoodClick = (rowIndex: number, index: number, item: MoodItem) => {
    const isSelected = selectedMoodIndexes.some(
      selectedIndex =>
        selectedIndex.rowIndex === rowIndex && selectedIndex.index === index,
    );
  };

  return (
    <View style={styles.wrapper}>
      <Card containerStyle={styles.container}>
        <View style={styles.mainView}>
          <View style={styles.lineContainer}>
            <Text style={styles.cravingText}>What you are craving for</Text>
            <Image
              source={require('../../assets/images/horline.png')}
              style={styles.moodoptionimage}
            />
            <Text></Text>
          </View>
          {rowsDataNew.map((row, rowIndex) => (
            <View style={styles.moodoptionrowContainer} key={rowIndex}>
              {row.map((item, index) => (
                <TouchableOpacity
                  style={[
                    styles.moodoptionimageContainer,
                    selectedMoodIndexes.some(
                      selectedIndex =>
                        selectedIndex.rowIndex === rowIndex &&
                        selectedIndex.index === index,
                    ) && {backgroundColor: '#FCEDD0'},
                  ]}
                  key={index}
                  onPress={() =>
                    handleMoodClick(rowIndex, index, {
                      text: item.title,
                      AliasName: '',
                      source: item.image,
                    })
                  }>
                  <Image source={item.image} style={styles.moodoptionimage} />
                  <Text style={styles.moodoptiontext}>{item.title}</Text>
                  <Image
                    source={require('../../assets/images/orangeLine.png')}
                    style={[
                      styles.orangeLine,
                      {marginTop: item.marginTopValue},
                    ]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
        <View style={styles.seeAllConat}>
          <Text style={styles.seeAll}>See all categories</Text>
          <Image
            source={require('../../assets/icons/arrowLeft.png')}
            style={styles.arrowSmall}
          />
        </View>
      </Card>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  wrapper: {
    width: width,
    height: height * 0.42,
    position: 'absolute',
    top: height / 3,
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
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moodoptioncontainer: {
    marginTop: height / 3,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  moodoptionrowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  moodoptionimageContainer: {
    width: width / 5,
    height: height / 9,
    margin: 8,
    borderColor: '#ccc',
    paddingTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  moodoptionimage: {
    width: '40%',
    height: '60%',
    resizeMode: 'contain',
    marginTop: 5,
  },
  moodoptiontext: {
    fontSize: 12,
    color: 'black',
    marginTop: 10,
  },
  moodoptionselectedText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cravingText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 10,
  },
  orangeLine: {
    width: '70%',
  },
  seeAll: {
    fontSize: 16,
    color: '#FF820D',
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  seeAllConat: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  arrowSmall: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginTop: 10,
    marginLeft: 10,
  },
});

export default SpecialOffers;

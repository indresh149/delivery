import React, {useState} from 'react';
import {
  Dimensions,
  FlatList,
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
import IconStar from 'react-native-vector-icons/EvilIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  ListItemDataCardCompleted,
  rowsData,
  storeData,
} from '../../utils/data/popularData';

interface storeDataTypes {
  id: string;
  image: any;
  name: string;
  rating: string;
  type?: string;
  address?: string;
}

interface MoodItem {
  text: string;
  AliasName: string;
  source: any;
  item?: any;
  marginTopValue?: number;
}

const HomeScreen = () => {
  const [selectedMoodIndexes, setSelectedMoodIndexes] = useState<
    {rowIndex: number; index: number}[]
  >([]);
  const [selectedMoodOptions, setSelectedMoodOptions] = useState<MoodItem[]>(
    [],
  );

  const handleMoodClick = (rowIndex: number, index: number, item: MoodItem) => {
    const isSelected = selectedMoodIndexes.some(
      (selectedIndex: {rowIndex: number; index: number}) =>
        selectedIndex.rowIndex === rowIndex && selectedIndex.index === index,
    );
  };

  interface ListItemCardCompletedProps {
    item: ListItemDataCardCompleted;
  }

  const ListItemCardCompleted: React.FC<ListItemCardCompletedProps> = ({
    item,
  }) => {
    return (
      <View style={styles.mainViewStore}>
        <Image source={item.image} style={styles.imageStore} />
        <Text style={styles.nameLarge}>Durga Groceries</Text>
        <View style={styles.kmConatiner}>
          <View style={styles.starContainer}>
            <Text style={styles.soldText}>4</Text>
            <Icons name="star" size={18} color="white" style={styles.star} />
          </View>
          <Text style={styles.kmText}>2.5 km</Text>
        </View>
      </View>
    );
  };

  interface storesNearYouFunctionProps {
    item: storeDataTypes;
  }

  const StoresNearYou: React.FC<storesNearYouFunctionProps> = ({item}) => {
    return (
      <View style={styles.mainViewStoreNear}>
        <Image source={item.image} style={styles.imageStoreNear} />

        <View style={styles.mainViewDetails}>
          <View style={styles.nameAndStar}>
            <Text style={styles.nameLargeNear}>{item.name}</Text>
            <IconStar
              name="star"
              size={18}
              color="black"
              style={styles.starNew}
            />
          </View>

          <Text style={styles.kmTextType}>{item.type}</Text>
          <Text style={styles.kmTextTypeAdd}>{item.address}</Text>

          <View style={styles.starContainerNearYou}>
            <Text style={styles.soldText}>4</Text>
            <Icons name="star" size={18} color="white" style={styles.star} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.wrapper}>
        <Card containerStyle={styles.cardcontainer}>
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

      <View style={styles.wrapperCraving}>
        <Card containerStyle={styles.containerCraving}>
          <View style={styles.mainViewCraving}>
            <View style={styles.lineContainer}>
              <Text style={styles.cravingText}>What you are craving for</Text>
              <Image
                source={require('../../assets/images/horline.png')}
                style={styles.moodoptionimage}
              />
              <Text></Text>
            </View>
            {rowsData.map((row, rowIndex) => (
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
                    <Image
                      source={item.image}
                      style={[
                        styles.moodoptionimage,
                        {height: '65%', width: '60%'},
                      ]}
                    />
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

      <View style={styles.storeWrapper}>
        <Card containerStyle={styles.horizonatalList}>
          <View style={styles.containerGradient}>
            <LinearGradient
              colors={['#fff', '#FFD700', '#FFCD4D', '#FFCD4D', '#fff']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.gradient}>
              <Text style={styles.text}>Best Selling</Text>
            </LinearGradient>
          </View>
          <FlatList
            data={ListItemDataCardCompleted}
            keyExtractor={(item, index) => item?.id ?? index.toString()}
            renderItem={({item}) => <ListItemCardCompleted item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Card>
      </View>

      <View
        style={[
          styles.wrapperCraving,
          {marginBottom: 10, height: height * 0.99},
        ]}>
        <Card containerStyle={styles.containerCraving}>
          <View style={styles.mainViewCraving}>
            <View style={styles.lineContainer}>
              <Text style={styles.storesNearText}>Stores near you</Text>
              <Image
                source={require('../../assets/images/horline.png')}
                style={styles.storesNearLine}
              />
              <Text></Text>
            </View>
            <FlatList
              scrollEnabled={false}
              data={storeData}
              keyExtractor={(item, index) => item?.id ?? index.toString()}
              renderItem={({item}) => <StoresNearYou item={item} />}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.thatsitCont}>
            <Image
              style={styles.leftLine}
              source={require('../../assets/images/horline.png')}
            />
            <Text>That’s it</Text>
            <Image
              style={styles.rightLine}
              source={require('../../assets/images/horline.png')}
            />
          </View>

          <View style={styles.bottomView}>
            <Text style={styles.emojiText}>😋</Text>
            <Text style={styles.satisfyYour}>SATISFY YOUR</Text>
            <Text style={styles.satisfyYourCravings}>CRAVINGS</Text>
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
    height: height * 0.32,
  },
  cardcontainer: {
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 5, // for Android shadow
    borderRadius: 0, // optional, just to make it look better
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
    elevation: 20,
    borderRadius: 0,
    margin: 0,
    padding: 10,
  },
  mainViewCraving: {
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
  card: {
    alignSelf: 'center',
    borderRadius: 25,
    borderColor: '#ddd',
    marginTop: 10,
    marginBottom: 10,
  },
  imageCard: {
    resizeMode: 'contain',
    width: width / 3.5,
    height: height / 4,
    borderRadius: 25,
  },
  nameLarge: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  bigNames: {
    marginTop: 0,
  },
  starView: {
    flexDirection: 'row',
  },
  star: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  starLine: {
    width: 20,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'black',
  },
  soldText: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    color: 'white',
  },
  storeWrapper: {
    width: width,
    height: height * 0.38,
    top: 20,
    marginBottom: 20,
  },
  horizonatalList: {
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
  containerGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  gradient: {
    height: height / 17,
    paddingVertical: 10,
    paddingHorizontal: 20,

    width: width * 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 18,
    color: '#714D00',
    fontWeight: 'bold',
  },
  imageStore: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  mainViewStore: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
  },
  starContainer: {
    backgroundColor: '#FF820D',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 3,
    paddingBottom: 3,
  },
  kmConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kmText: {
    marginLeft: 10,
    color: '#ccc',
    fontSize: 14,
  },
  storesNearText: {
    marginTop: 10,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
    marginRight: 40,
  },
  storesNearLine: {
    width: '50%',
    marginTop: 20,
    marginRight: 20,
  },
  imageStoreNear: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  mainViewStoreNear: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginBottom: 20,
  },
  nameLargeNear: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 25,
    marginBottom: 5,
  },
  kmTextType: {
    marginLeft: 25,
    color: '#ccc',
    fontSize: 14,
  },
  nameAndStar: {
    width: width / 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  starNew: {
    marginTop: 5,
    marginLeft: 35,
    marginRight: 5,
  },
  kmTextTypeAdd: {
    flexWrap: 'wrap',
    marginTop: 5,
    marginLeft: 25,
    color: 'black',
    fontSize: 14,
  },
  mainViewDetails: {
    width: width / 1.4,

    marginRight: 20,
  },
  starContainerNearYou: {
    width: width / 8,
    backgroundColor: '#FF820D',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 3,
    paddingBottom: 3,
    marginTop: 5,
    marginLeft: 25,
  },
  thatsitCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  leftLine: {
    width: '60%',
    height: 20,
    resizeMode: 'contain',
    marginRight: 20,
    marginLeft: 20,
  },
  rightLine: {
    width: '60%',
    height: 20,
    resizeMode: 'contain',
    marginRight: 20,
    marginLeft: 20,
  },
  bottomView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: height / 5,
    width: width,
  },
  emojiText: {
    marginTop: 0,
    color: 'black',
    fontSize: 30,
  },
  satisfyYour: {
    marginTop: 5,
    fontWeight: '900',
    fontSize: 20,
    color: 'black',
    fontVariant: ['small-caps'],
    fontFamily: 'Phosphate-Solid',
  },
  satisfyYourCravings: {
    marginTop: 5,
    fontWeight: '900',
    fontSize: 30,
    color: '#FF820D',
    fontVariant: ['small-caps'],
    fontFamily: 'Phosphate-Solid',
  },
});

export default HomeScreen;

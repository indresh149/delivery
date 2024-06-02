/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconHome from 'react-native-vector-icons/Octicons';
import IconHeart from 'react-native-vector-icons/Feather';
import IconStar from 'react-native-vector-icons/EvilIcons';
import HomeScreen from './src/screens/HomeScreen';
import CartScreen from './src/screens/CartScreen';
import OrderScreen from './src/screens/OrderScreen';
import AddressScreen from './src/screens/AddressScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import FavouritesScreen from './src/screens/Favourites';

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  type CustomTabBarButtonProps = {
    children: React.ReactNode;
    onPress: (event: GestureResponderEvent) => void;
  };

  const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({
    children,
    onPress,
  }) => (
    <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
      <View style={styles.customButton}>{children}</View>
    </TouchableOpacity>
  );
  function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 70,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <IconHome
                name="home"
                size={30}
                color={focused ? '#FF820D' : 'gray'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <IconHeart
                name="heart"
                size={30}
                color={focused ? '#FF820D' : 'gray'}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Order"
          component={OrderScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/bagImg.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FF820D' : 'white',
                }}
              />
            ),
            tabBarButton: props => <CustomTabBarButton {...props} />,
          }}
        />

        <Tab.Screen
          name="Wallet"
          component={AddressScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <Image
                source={require('./assets/icons/notesTab.png')}
                style={{
                  width: 30,
                  height: 30,
                  tintColor: focused ? '#FF820D' : 'gray',
                }}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarLabelStyle: {fontSize: 12, color: '#FC6C85'},
            tabBarIcon: ({focused, size}) => (
              <IconStar
                name="star"
                size={30}
                color={focused ? '#FF820D' : 'gray'}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  function AuthenticatedStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTintColor: '#53C1BA',
          headerStyle: {backgroundColor: Colors.primary500},

          contentStyle: {backgroundColor: Colors.primary100},
        }}>
        <Stack.Screen
          name="DrawerScreen"
          component={MyTabs}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={{
            headerShown: true,
            headerTintColor: '#53C1BA',
          }}
        />
        <Stack.Screen
          name="Clothes"
          component={FavouritesScreen}
          options={{
            headerShown: true,
            headerTintColor: '#53C1BA',
          }}
        />
      </Stack.Navigator>
    );
  }

  function Navigation() {
    return (
      <NavigationContainer>
        <AuthenticatedStack />
      </NavigationContainer>
    );
  }

  function Root() {
    return <Navigation />;
  }

  return (
    <>
      <Root />
    </>
  );
}

const styles = StyleSheet.create({
  customButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customButton: {
    paddingTop: 5,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF820D',
  },
});

export default App;

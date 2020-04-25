import React from 'react';
import { Platform, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';
import UserScreen from '../screens/User';
import FavoritesScreen from '../screens/FavoritesScreen';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/HeaderButton';
import { Ionicons } from '@expo/vector-icons';

// initialize my stack
const MealsStack = createStackNavigator();

// create navigator component
const MealsNavigator = () => {
  return (
    <MealsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
      }}
    >
      <MealsStack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={({ navigation }) => ({
          headerRight: () => {
            return (
              <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                  title="User"
                  iconName="ios-person"
                  onPress={() => {
                    navigation.navigate('User');
                  }}
                />
              </HeaderButtons>
            );
          },
        })}
      />
      <MealsStack.Screen
        name="Meal Types"
        options={({ route }) => ({ title: route.params.title })}
        component={CategoryMeals}
      />
      <MealsStack.Screen
        name="Meal"
        component={MealDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <MealsStack.Screen name="User" component={UserScreen} />
    </MealsStack.Navigator>
  );
};

// Creating my Tab Stack
const MealTab = createBottomTabNavigator();

const MealTabNavigator = () => {
  return (
    <MealTab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.primaryColor,
        inactiveTintColor: '#999',
      }}
    >
      <MealTab.Screen
        name="Home"
        component={MealsNavigator}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-restaurant" size={25} color={color} />;
          },
        })}
      />
      <MealTab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={() => ({
          tabBarIcon: ({ color }) => {
            return <Ionicons name="ios-star" size={25} color={color} />;
          },
        })}
      />
    </MealTab.Navigator>
  );
};

export default MealTabNavigator;

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import GridTile from '../components/GridTile';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {
  // renders my component and data that is passed from the flatlist
  const renderCatItems = itemData => {
    return (
      <GridTile
        title={itemData.item.title}
        colors={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate('Meal Types', {
            categoryId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderCatItems} numColumns={2} />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;

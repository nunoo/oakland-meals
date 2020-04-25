import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealCard from '../components/MealCard';

const CategoryMealsScreen = props => {
  const catId = props.route.params.categoryId;
  const category = CATEGORIES.find(cat => cat.id === catId);
  const displayedMeals = MEALS.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  const renderMealItems = itemData => {
    return (
      <MealCard
        mealData={itemData.item}
        goToMealDetail={() => {
          props.navigation.navigate('Meal', {
            mealId: itemData.item.id,
            title: itemData.item.title,
          });
        }}
      />
    );
  };

  return <FlatList data={displayedMeals} renderItem={renderMealItems} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;

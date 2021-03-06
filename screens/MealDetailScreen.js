import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>{props.route.params.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealDetailScreen;

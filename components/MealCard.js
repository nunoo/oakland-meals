import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const MealCard = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.goToMealDetail}>
        <View>
          {/* Top Card Section */}
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: props.mealData.imageUrl }}
              style={styles.imgBG}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.mealData.title}</Text>
              </View>
            </ImageBackground>
          </View>

          {/* Bottom Card Section */}
          <View style={[styles.mealRow, styles.mealDetail]}>
            <Text>{props.mealData.duration} Mins</Text>
            <Text>{props.mealData.complexity} </Text>
            <Text>{props.mealData.affordability} </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: '100%',
    backgroundColor: '#ddd',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  imgBG: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export default MealCard;

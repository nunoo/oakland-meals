import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GridTile = (props) => {
  return (
    <View style={styles.gridItems}>
      <TouchableOpacity style={{ flex: 1 }} onPress={props.onSelect}>
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.colors } }}
        >
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    // overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 22,
    color: '#333',
    textAlign: 'right',
  },
});

export default GridTile;

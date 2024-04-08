/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Stream = () => {
  const streams = [
    {
      image: require('../assets/course/coding.jpeg'),
      text: 'Non-Medical',
    },
    {
      image: require('../assets/course/coding.jpeg'),
      text: 'Commerce',
    },
    {
      image: require('../assets/course/coding.jpeg'),
      text: 'Arts',
    },
    {
      image: require('../assets/course/coding.jpeg'),
      text: 'Medical',
    },
    {
      image: require('../assets/course/coding.jpeg'),
      text: 'Computer-Science',
    },
  ];
  return (
    <ScrollView horizontal>
      <View style={{flexDirection: 'row'}}>
        {streams.map((launch, index) => (
          <View key={index} style={styles.launchContainer}>
            <Image source={launch.image} style={styles.launchImage} />
            <Text style={styles.launchText}>{launch.text}</Text>
            <Text style={styles.launchRs}>{launch.Rs}</Text>
            <Text style={styles.view}>{launch.View}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  launchContainer: {
    backgroundColor: '#F5F5F5',
    height: 180,
    marginLeft: 10,
    width: 160,
    borderRadius: 10,
    marginBottom: 20,
  },
  launchImage: {
    width: 140,
    height: 100,
    marginTop: 5,
    marginLeft: 12,
    borderRadius: 9,
  },
  launchText: {
    marginLeft: 10,
    color: '#000000',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 20,
    textAlign: 'center',
  },
});
export default Stream;

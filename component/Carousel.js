/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import SnapCarousel from 'react-native-snap-carousel';

const Carousel = () => {
  const data = [
    {
      image: require('../assets/course/coding.jpeg'),
      name: 'Excellent Future for your child.',
    },
    {
      image: require('../assets/course/graphic.jpg'),
      name: 'Excellent Future for your child.',
    },
    {
      image: require('../assets/course/web.jpg'),
      name: 'Excellent Future for your child.',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.slide}>
      <ImageBackground source={item.image} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Text style={styles.text}> {item.name}</Text>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <SnapCarousel
      data={data}
      renderItem={renderItem}
      sliderWidth={350}
      itemWidth={300}
      autoplay
      autoplayInterval={1000}
      loop
      ImageComponentStyle={{
        borderRadius: 6,
        width: '94%',
      }}
      contentContainerCustomStyle={styles.carouselContainer}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    width: 300,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 30,
    marginBottom: 20,
    marginRight: 15,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 25.2,
    top: 55,
  },
});

export default Carousel;

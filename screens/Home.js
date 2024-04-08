/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Menu from '../component/Menu';
import Carousel from '../component/Carousel';
import Stream from '../component/Stream';
const Home = () => {
  const description =
    'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ';
  return (
    <>
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.homeTop}>
            <Carousel />
            <Text style={styles.mainHeader}>Welcome to</Text>
            <Text style={styles.text2style}>BDIS School</Text>

            <Text style={styles.paraStyle}>{description}</Text>
            <Text style={styles.streamText}>
              Streams Available In Our School
            </Text>
            <Stream />
          </View>
        </ScrollView>
        {/* Menu */}
        <View style={styles.menuStyle}>
          <View style={styles.lineStyle} />
          <Menu />
          <View
            style={[
              styles.lineStyle,
              {
                marginVertical: 10,
              },
            ]}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    marginTop: 50,
    borderRadius: 20,
  },
  homeTop: {
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 45,
    color: '#344055',
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  text2style: {
    fontSize: 37,
    color: '#4c5dab',
    marginTop: 0,
  },
  paraStyle: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 25,
    color: '#7d7d7d',
    marginBottom: 30,
  },
  lineStyle: {
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  streamText: {
    fontSize: 23,
    color: 'black',
    marginBottom: 10,
  },
});
export default Home;

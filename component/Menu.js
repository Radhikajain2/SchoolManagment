/* eslint-disable prettier/prettier */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      {/* Course */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/90/000000/training.png',
          }}
        />
      </TouchableOpacity>

      {/* About */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')}>
        <Image
          style={styles.iconStyle}
          source={{uri: 'https://img.icons8.com/stickers/100/000000/about.png'}}
        />
      </TouchableOpacity>

      {/* Contact */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}>
        <Image
          style={styles.iconStyle}
          source={{
            uri: 'https://img.icons8.com/stickers/100/000000/phone-office.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  TextStyle: {
    textTransform: 'uppercase',
  },
  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});

export default Menu;

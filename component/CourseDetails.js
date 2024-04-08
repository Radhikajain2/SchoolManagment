/* eslint-disable prettier/prettier */

import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

const CourseDetailsScreen = ({route}) => {
  // Access the course data passed from navigation
  const {course} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Course Details</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {course.courseDetail.map((courseItem, index) => (
          <View key={index} style={styles.courseContainer}>
            <Image source={courseItem.image} style={styles.image} />
            <Text style={styles.courseTitle}> {courseItem.course}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },

  courseContainer: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9',
    width: '90%',

    marginHorizontal: 20,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#444',
  },

  image: {
    height: 100,
    width: 100,
    marginHorizontal: 110,
  },
});

export default CourseDetailsScreen;

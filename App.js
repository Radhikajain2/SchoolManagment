import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Course from './screens/Course';
import CourseDetailsScreen from './component/CourseDetails';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Home */}

        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        {/* Course */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: 'Courses',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="CourseDetails"
          component={CourseDetailsScreen}
          options={{headerShown: false}}
        />

        {/* About */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: 'About',
            headerTitleAlign: 'center',
          }}
        />

        {/* Contact */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
            },
            headerTitle: 'Contact',
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

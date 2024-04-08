/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [agree, setAgree] = useState(false);

  const submit = () => {
    if (!name || !email || !phone || !message) {
      Alert.alert('Please fill all the fields');
    } else {
      Alert.alert(`Thank You ${name}`);
      navigation.navigate('Home');
    }
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level Up Your Knowledge</Text>

      <Text style={styles.description}>
        You can reach us anytime via @radhika.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="name"
          value={name}
          onChangeText={userData => setName(userData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your email</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="demo@xyz.com"
          value={email}
          onChangeText={emailData => setEmail(emailData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter your Mobile Number</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="123456789"
          value={phone}
          onChangeText={phoneData => setPhone(phoneData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>How can we help you?</Text>
        <TextInput
          style={[styles.inputStyle, styles.multilineStyles]}
          placeholder="Tell us about yourself"
          value={message}
          onChangeText={msg => setMessage(msg)}
          numberOfLines={5}
          multiline={true}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          tintColors={{true: '#4630EB', false: 'grey'}}
        />

        <Text style={styles.wrapperText}>
          I have read and agreed with the TC
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonStyle,
          {
            backgroundColor: agree ? '#4630EB' : 'grey',
          },
        ]}
        disabled={!agree}
        onPress={submit}>
        <Text style={styles.buttonText}>Contact us</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '500',
    paddingTop: 20,
    paddingBottom: 15,
    textTransform: 'capitalize',
  },
  description: {
    fontSize: 20,
    color: '#7d7d7d',
    paddingBottom: 20,
    lineHeight: 25,
  },
  inputContainer: {
    marginTop: 20,
  },
  label: {
    fontWeight: 'bold',
    color: '#7d7d7d',
    paddingBottom: 5,
    lineHeight: 25,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 2,
  },
  multilineStyles: {
    paddingVertical: 4,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
  },
  wrapperText: {
    marginTop: 6,
    marginLeft: 7,
    color: '#7d7d7d',
  },
  buttonText: {
    color: '#eee',
  },
  buttonStyle: {
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 18,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});
export default Contact;

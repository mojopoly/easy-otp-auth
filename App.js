import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';
import firebase from 'firebase';

class App extends React.Component {
  componentDidMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCEFJFNQBMSbO1DTCVdmR9h51uHgSDJ6h0',
      authDomain: 'one-time-password-403e2.firebaseapp.com',
      databaseURL: 'https://one-time-password-403e2.firebaseio.com',
      projectId: 'one-time-password-403e2',
      storageBucket: 'one-time-password-403e2.appspot.com',
      messagingSenderId: '896029743790',
      appId: '1:896029743790:web:834d6ffc0b281a0fc1eb3f',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default App;

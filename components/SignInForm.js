import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL =
  'https://us-central1-one-time-password-403e2.cloudfunctions.net';

class SignInForm extends Component {
  state = {phone: '', code: ''};

  handleSubmit = async () => {
    try {
      let {data} = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code,
      });
      firebase.auth().signInWithCustomToken(data.token);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <View>
        <View style={{marginBottom: 10, marginTop: 10}}>
          <Text h3>Sign In</Text>
          <Text>Phone Number:</Text>
          <Input
            value={this.state.phone}
            onChangeText={phone => this.setState({phone})}
          />
          <Input
            value={this.state.code}
            onChangeText={code => this.setState({code})}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignInForm;

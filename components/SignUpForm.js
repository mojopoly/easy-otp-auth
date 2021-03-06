import React, {Component} from 'react';
import {View} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import axios from 'axios';

const ROOT_URL =
  'https://us-central1-one-time-password-403e2.cloudfunctions.net';

class SignUpForm extends Component {
  state = {phone: ''};

  handleSubmit = async () => {
    try {
      await axios.post (`${ROOT_URL}/createUser`, {phone: this.state.phone});
      await axios.post (`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone,
      });
    } catch (err) {
      console.log (err);
    }
  };

  render () {
    return (
      <View>
        <View style={{marginBottom: 10}}>
          <Text h3>Sign Up</Text>
          <Text>Phone Number:</Text>
          <Input
            value={this.state.phone}
            onChangeText={phone => this.setState ({phone})}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;

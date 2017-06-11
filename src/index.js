import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking,
  Button,
} from 'react-native';

const DROPBOX_APP_KEY = 'bol535f38zp9krv';//change with your app key this one is not valid
import uuidV4 from 'uuid/v4';

export default class DropboxOAuthSample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDropboxInit: false,
      apiToken: '',
      verification: uuidV4(),
    }
  }

  componentDidMount() {
    Linking.addEventListener('url', (event) => this.handleLinkingUrl(event));
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', (event) => this.handleLinkingUrl(event));
  }

  handleLinkingUrl(event) {

  }

  loginWithDropbox() {

  }

  render() {
    const instruction = this.state.isDropboxInit ? 'Dropbox API token : ' + this.state.apiToken : 'Vous ne vous êtes pas encore connecté';
    return (
      <View style={styles.container}>
        <Button title='Se connecter avec Dropbox' onPress={() => this.loginWithDropbox()} />
        <Text style={styles.instructions}>
          {instruction}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    marginTop: 32,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import api from '~/services/api';

import { StatusBar, ActivityIndicator } from 'react-native';

import {
  Container, Title, Info, Form, Input, Button, TextButton, Error,
} from './styles';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    username: '',
    isLoading: false,
    error: false,
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  signIn = async () => {
    const { username } = this.state;
    const { navigation } = this.props;
    this.setState({ isLoading: true });
    try {
      const user = await this.checkUserExists(username);

      if (user) {
        await AsyncStorage.setItem('@Githuber:username', username);
        navigation.navigate('User');
      }
    } catch (e) {
      this.setState({ isLoading: false, error: true });
    }
  };

  render() {
    const { username, isLoading, error } = this.state;
    return (
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
        <Title>Bem-vindo</Title>
        <Info>Precisamos que você informe seu usuário no Github.</Info>

        {error && <Error>Usuário inexistente.</Error>}

        <Form>
          <Input
            autoCapitalize="none"
            autoCorrect={false}
            autofocus
            placeholder="Digite seu usuário"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <Button onPress={this.signIn}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <TextButton>Prosseguir</TextButton>
            )}
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Welcome;

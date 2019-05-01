import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container, Left, Title, Right,
} from './styles';

class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      goBack: PropTypes.func,
    }).isRequired,
    title: PropTypes.string.isRequired,
    isStacked: PropTypes.bool,
  };

  static defaultProps = {
    isStacked: false,
  };

  signOut = async () => {
    const { navigation } = this.props;
    await AsyncStorage.removeItem('@Githuber:username');
    navigation.navigate('Welcome');
  };

  render() {
    const { navigation, title, isStacked } = this.props;
    return (
      <Container>
        <Left>
          {isStacked && (
            <TouchableOpacity
              hitSlop={{
                top: 5,
                left: 10,
                right: 10,
                bottom: 5,
              }}
              activeOpacity={0.65}
              onPress={() => navigation.navigate('User')}
            >
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
          )}
        </Left>
        <Title>{title}</Title>
        <Right
          hitSlop={{
            top: 5,
            left: 10,
            right: 10,
            bottom: 5,
          }}
          activeOpacity={0.65}
          onPress={this.signOut}
        >
          <Icon name="sign-out" size={20} color="#fff" />
        </Right>
      </Container>
    );
  }
}

export default withNavigation(Header);

import React from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Container, Content, Title, InfoContainer, Info, TextCount, Nav,
} from './styles';

const RepositoryItem = ({ navigation, repository }) => (
  <Container>
    <Content>
      <Title>{repository.full_name}</Title>
      <InfoContainer>
        <Info>
          <Icon name="star" size={12} color="#282434" />
          <TextCount>{repository.stargazers_count}</TextCount>
        </Info>
        <Info>
          <Icon name="code-fork" size={12} color="#282434" />
          <TextCount>{repository.forks_count}</TextCount>
        </Info>
        <Info>
          <Icon name="eye" size={12} color="#282434" />
          <TextCount>{repository.watchers_count}</TextCount>
        </Info>
      </InfoContainer>
    </Content>
    <Nav
      hitSlop={{
        top: 5,
        left: 10,
        right: 10,
        bottom: 5,
      }}
      activeOpacity={0.65}
      onPress={() => navigation.navigate('Issues', { name: repository.name })}
    >
      <Icon name="angle-right" size={24} color="#495057" />
    </Nav>
  </Container>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    full_name: PropTypes.string,
    stargazers_count: PropTypes.number,
    forks_count: PropTypes.number,
    watchers_count: PropTypes.number,
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default withNavigation(RepositoryItem);

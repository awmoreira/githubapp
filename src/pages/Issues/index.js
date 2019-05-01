import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';
import Header from '~/components/Header';
import { Container, Content, ListIssues } from './styles';
import IssueItem from './IssueItem';

class Issues extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      params: PropTypes.shape({
        name: PropTypes.string,
      }),
    }).isRequired,
  };

  state = {
    data: [],
    isLoading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadIssues();
  }

  loadIssues = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@Githuber:username');
    const { navigation } = this.props;
    const repositoryName = navigation.getParam('name', 'NO-NAME');
    const { data } = await api.get(`/repos/${username}/${repositoryName}/issues`);

    this.setState({ data, isLoading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <IssueItem issue={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <ListIssues
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        onRefresh={this.loadIssues}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor="#8080c0" barStyle="light-content" />
        <Header title="Issues" isStacked />
        <Content>
          {isLoading ? <ActivityIndicator size={24} color="#fff" /> : this.renderList()}
        </Content>
      </Container>
    );
  }
}

export default Issues;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';
import Header from '~/components/Header';
import { Container, Content, ListOrg } from './styles';
import OrganizationItem from './OrganizationItem';

const TabIcon = ({ tintColor }) => <Icon name="building" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  columnWrapper: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
});

class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: TabIcon,
  };

  state = {
    data: [],
    isLoading: true,
    refreshing: false,
  };

  async componentDidMount() {
    this.loadOrganizations();
  }

  loadOrganizations = async () => {
    this.setState({ refreshing: true });
    const username = await AsyncStorage.getItem('@Githuber:username');
    const { data } = await api.get(`/users/${username}/orgs`);

    this.setState({ data, isLoading: false, refreshing: false });
  };

  renderListItem = ({ item }) => <OrganizationItem organization={item} />;

  renderList = () => {
    const { data, refreshing } = this.state;

    return (
      <ListOrg
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={this.loadOrganizations}
        refreshing={refreshing}
      />
    );
  };

  render() {
    const { isLoading } = this.state;

    return (
      <Container>
        <StatusBar backgroundColor="#8080c0" barStyle="light-content" />
        <Header title="Organizações" />
        <Content>
          {isLoading ? <ActivityIndicator size={24} color="#fff" /> : this.renderList()}
        </Content>
      </Container>
    );
  }
}

export default Organizations;

import React from 'react';
import PropTypes from 'prop-types';
import { Container, ImageAvatar, Title } from './styles';

const OrganizationItem = ({ organization }) => (
  <Container>
    <ImageAvatar source={{ uri: organization.avatar_url }} />
    <Title>{organization.login}</Title>
  </Container>
);

OrganizationItem.propTypes = {
  organization: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default OrganizationItem;

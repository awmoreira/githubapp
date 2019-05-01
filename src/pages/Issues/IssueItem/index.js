import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, ImageAvatar, Info, Title, User,
} from './styles';

const IssueItem = ({ issue }) => (
  <Container>
    <ImageAvatar source={{ uri: issue.user.avatar_url }} />
    <Info>
      <Title numberOfLines={2} ellipsizeMode="tail">
        {issue.title}
      </Title>
      <User>{issue.user.login}</User>
    </Info>
  </Container>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    avatar_url: PropTypes.string,
    login: PropTypes.string,
  }).isRequired,
};

export default IssueItem;

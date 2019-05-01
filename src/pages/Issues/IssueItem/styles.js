import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  border-radius: 5px;
  margin-horizontal: 20px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ImageAvatar = styled.Image`
  width: 50px;
  height: 50px;
  margin: 5px;
`;
export const Info = styled.View`
  flex: 1;
  flex-direction: column;
  text-align: left;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7159c1;
`;

export const User = styled.Text`
  font-size: 10px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.3);
`;

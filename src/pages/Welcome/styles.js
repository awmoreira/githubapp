import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: #7159c1;
  padding: 30px;
  justify-content: center;
  align-items: stretch;
`;

export const Title = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const Info = styled.Text`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #fff;
  opacity: 0.5;
  line-height: 21px;
`;

export const Error = styled.Text`
  color: #d81616;
  text-align: center;
  margin-top: 10px;
`;

export const Form = styled.View`
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 3px;
  height: 44px;
  padding-horizontal: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #8080c0;
  border-radius: 3px;
  height: 44px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

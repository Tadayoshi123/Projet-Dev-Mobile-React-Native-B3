import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Theme from '../config/theme';

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //fonction pour récuperer un token
  const logMeIn = async () => {
    //Verification des champs
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }

    axios({
      method: 'post',
      url: 'https://login.hikkary.com/users/login',
      data: {
        username: username,
        password: password,
      },
    })
      .then(async response => {
        console.log(response.headers['x-access-token']);
        await AsyncStorage.setItem('token', response.headers['x-access-token']);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ContainerView>
      <View>
        <TextInputContainer>
          <Label>NOM DE COMPTE</Label>
          <TextInputStyled
            value={username}
            onChangeText={text => setUsername(text)}
          />
        </TextInputContainer>
        <TextInputContainer>
          <Label>MOT DE PASSE</Label>
          <TextInputStyled
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </TextInputContainer>
        <LoginButton onPress={logMeIn}>
          <ButtonText>CONNEXION</ButtonText>
        </LoginButton>
      </View>
    </ContainerView>
  );
};
//Utilisation des styled components
const LoginButton = styled.TouchableOpacity`
  background-color: ${Theme.colors.button};
  padding: 15px;
  margin: 10px;
  border-radius: 4px;
  align-items: center;
`;

const TextInputContainer = styled.View`
  width: 300px;
  margin: 10px;
`;

const TextInputStyled = styled.TextInput`
  background-color: ${Theme.colors.primary};
  padding: 12px;
  border-radius: 4px;
  color: white;
`;

const ButtonText = styled.Text`
  color: ${Theme.colors.senary};
`;

const ContainerView = styled.View`
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 18px;
  font-family: ${Theme.fonts.regular};
  color: ${Theme.colors.senary};
  margin: 5px;
`;

export default Login;

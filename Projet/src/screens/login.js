import React from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginButton from '../components/styledComponents/login/loginbutton';
import TextInputContainer from '../components/styledComponents/login/textinputcontainer';
import TextInputStyled from '../components/styledComponents/login/textinputstyled';
import ButtonText from '../components/styledComponents/generalized/buttontext';
import ContainerView from '../components/styledComponents/generalized/containerview';
import Label from '../components/styledComponents/login/label';

const Login = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  //logMeIn function is used to get the user token
  const logMeIn = async () => {
    //Check if password length is superior to 8 characters
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
        await AsyncStorage.setItem('token', response.headers['x-access-token']);
        navigation.navigate('MENU', {screen: 'Home'});
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <ContainerView>
      <TextInputContainer>
        <Label>STORM ACCOUNT NAME</Label>
        <TextInputStyled
          value={username}
          onChangeText={text => setUsername(text)}
        />
      </TextInputContainer>
      <TextInputContainer>
        <Label>PASSWORD</Label>
        <TextInputStyled
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
      </TextInputContainer>
      <LoginButton onPress={logMeIn}>
        <ButtonText>Sign in</ButtonText>
      </LoginButton>
    </ContainerView>
  );
};

export default Login;

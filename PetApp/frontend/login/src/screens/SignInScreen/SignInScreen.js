import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {React, useState} from 'react';

import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons';

import {useNavigation} from '@react-navigation/core';

import {Auth} from 'aws-amplify';
import axios from 'axios';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const icon = require('../../../assets/images/sasuke.jpg');
  const [loading, setLoading] = useState(false);

  // NOW USING REACT HOOK FORMS
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    // console.log(data);
    // // Validate
    // try {
    //   console.log('IN HERE!');
    //   axios
    //     .get('http://192.168.1.15:9090/api/all-users')
    //     .then(response => {
    //       // Handle the successful response
    //       console.log('response');
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       // Handle any errors
    //       console.error('error');
    //       console.error(error);
    //     });
    // } catch (err) {
    //   console.log('IN LAST ERROR');
    //   console.log(err.stack);
    // }
    if (loading) {
      return;
    }
    setLoading(true);
    try {
      await Auth.signIn(data.username, data.password);
      navigation.navigate('Home', {data});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
    setLoading(false);
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={icon}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required!'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 3,
              message: 'Password should be minimum 3 characters long!',
            },
          }}
        />

        {/* HANDLE SUBMIT - First validates the user fields */}
        <CustomButton
          text={loading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignInPressed)}
          // type="PRIMARY"
        />
        <CustomButton
          text="Forgot Password ?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account ? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: '70%',
    // height: 0,
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignInScreen;

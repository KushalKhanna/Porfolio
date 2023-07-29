import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../SocialSignInButtons/SocialSignInButtons';

import {useForm} from 'react-hook-form';

import {Auth} from 'aws-amplify';

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = () => {
  // const [username, setUsername] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [passwordRepeat, setPasswordRepeat] = useState('');

  const navigation = useNavigation();

  const {
    control,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const pwd = watch('password');

  const onRegisterPressed = async data => {
    // console.warn(data);
    // // validate
    // navigation.navigate('ConfirmEmail');
    const {username, password, email, name} = data;
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {email, name},
      });
      navigation.navigate('ConfirmEmail', {username});
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsPressed = () => {
    console.warn('onTermsPressed!');
  };

  const onPolicyPressed = () => {
    console.warn('onPolicyPressed!');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create your account</Text>

        {/* <CustomInput
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
          }} */}

        <CustomInput
          name="name"
          placeholder="Name"
          control={control}
          rules={{
            required: 'Name is required!',
            minLength: {
              value: 3,
              message: 'Username should be minimum 3 characters long!',
            },
            maxLength: {
              value: 25,
              message: 'Username shouyld not be more than 20 characters',
            },
          }}
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required!',
            minLength: {
              value: 3,
              message: 'Username should be minimum 3 characters long!',
            },
            maxLength: {
              value: 25,
              message: 'Username shouyld not be more than 20 characters',
            },
          }}
        />

        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{pattern: {value: EMAIL_REGEX, message: 'Email is invalid!'}}}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long!',
            },
          }}
          secureTextEntry={true}
        />

        <CustomInput
          name="password-repeat"
          placeholder="Repeat Password"
          control={control}
          rules={{
            validate: value =>
              // TEST
              // value.length > 5 || 'Password do not match'
              value === pwd || 'Password do not match',
          }}
          secureTextEntry={true}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="PRIMARY"
        />

        <Text style={styles.text}>
          By registering you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsPressed}>
            Terms of use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPolicyPressed}>
            Privacy policy
          </Text>
        </Text>

        <CustomButton
          text="Forgot Password ?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomButton
          text="Have an account ? Sign In!"
          onPress={onSignInPressed}
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

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#051C60',
    margin: 10,
  },

  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;

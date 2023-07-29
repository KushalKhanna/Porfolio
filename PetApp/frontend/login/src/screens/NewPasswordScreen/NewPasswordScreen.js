import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {useForm} from 'react-hook-form';

import {Auth} from 'aws-amplify';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';

const NewPasswordScreen = () => {
  // const [code, setCode] = useState('');
  // const [newPassword, setNewPassword] = useState('');

  const {control, handleSubmit} = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = async data => {
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password);
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required!'}}
        />

        <CustomInput
          name="code"
          placeholder="Enter your confirmation code"
          control={control}
          rules={{required: 'Confirmation code is required!'}}
        />

        <CustomInput
          name="password"
          control={control}
          placeholder="Enter your new password"
          secureTextEntry
          rules={{
            required: 'Password is required!',
            minLength: {
              value: 8,
              message: 'Password should be minimum 8 characters long!',
            },
          }}
        />

        <CustomButton
          text="Submit"
          onPress={handleSubmit(onSubmitPressed)}
          type="PRIMARY"
        />

        <CustomButton
          text="Back to Sign in"
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

export default NewPasswordScreen;

import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {React, useState} from 'react';
import {useNavigation} from '@react-navigation/core';

import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import {useRoute} from '@react-navigation/native';

import {Auth} from 'aws-amplify';

const ForgotPasswordScreen = () => {
  const route = useRoute();

  // const [code, setCode] = useState('');
  const {control, handleSubmit, watch} = useForm({
    defaultValues: {username: route?.params?.username},
  });

  const navigation = useNavigation();

  const username = watch('username');

  const onConfirmPressed = async data => {
    try {
      await Auth.confirmSignUp(data.username, data.code);
      navigation.navigate('SignIn');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
  };

  const onResendCodePressed = async () => {
    try {
      await Auth.resendSignUp(username);
      Alert.alert('Success', 'Code sent to your email successfully!');
    } catch (e) {
      Alert.alert('Oops', e.message);
    }
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
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required!'}}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{required: 'Confirmation code is required!'}}
        />

        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
          type="PRIMARY"
        />

        <CustomButton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
        />

        <CustomButton
          text="Back to Sign in"
          onPress={handleSubmit(onSignInPressed)}
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

export default ForgotPasswordScreen;

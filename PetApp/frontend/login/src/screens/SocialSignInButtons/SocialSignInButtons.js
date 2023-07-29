import {View, Text} from 'react-native';
import React from 'react';

import CustomButton from '../../components/CustomButton/CustomButton';
const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('Facebook!');
  };

  const onSignInGoogle = () => {
    console.warn('Google!');
  };

  const onSignInApple = () => {
    console.warn('Apple!');
  };

  return (
    <>
      <CustomButton
        text="Sign in with Facebook"
        onPress={onSignInFacebook}
        type="TERTIARY"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        text="Sign in with Google"
        onPress={onSignInGoogle}
        type="TERTIARY"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Sign in with Apple"
        onPress={onSignInApple}
        type="TERTIARY"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
    </>
  );
};

export default SocialSignInButtons;

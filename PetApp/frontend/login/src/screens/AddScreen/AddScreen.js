import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {useForm} from 'react-hook-form';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
const AddScreen = () => {
  const {
    control,
    watch,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigation = useNavigation();

  const onSubmitPressed = data => {
    console.log('onSubmitPressed');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Add your entry</Text>
      <CustomInput
        name="doctor-name"
        placeholder="What was your vet's name?"
        control={control}
        rules={{required: "Vet's name is required!"}}
      />
      <CustomInput
        name="purpose"
        placeholder="What was the purpose of your visit?"
        control={control}
        rules={{required: 'Mention state the purpose!'}}
      />
      <CustomInput
        name="date"
        placeholder="Mention the date of your visit."
        control={control}
        rules={{required: 'Mention the date of your visit!'}}
      />
      <CustomInput
        name="issues"
        placeholder="State the symptoms your dog faced, if any."
        control={control}
      />

      <CustomButton
        text="Submit record"
        onPress={handleSubmit(onSubmitPressed)}
        type="PRIMARY"
      />
    </View>
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
});

export default AddScreen;

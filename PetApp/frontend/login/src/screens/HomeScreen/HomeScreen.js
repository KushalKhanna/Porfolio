import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';

import {useNavigation} from '@react-navigation/core';

import {useForm} from 'react-hook-form';

import {Auth} from 'aws-amplify';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();

  // const {data} = route?.params;

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onAddPressed = data => {
    console.log('onConfirmPressed in homescreen', data);
    navigation.navigate('add-screen');
  };

  const onViewRecordsPressed = data => {
    console.log('onConfirmPressed in homescreen', data);
    navigation.navigate('view-screen');
  };

  //   return (
  //     <>
  //       <Text style={{fontSize: 32, alignSelf: 'center', marginTop: 30}}>
  //         Welcome, {data.username}
  //       </Text>
  //       <View style={styles.container}>
  //         {/* <Text style={{fontSize: 24}}>Welcome, {data.username}</Text> */}
  //         <View style={styles.buttonContainer}>
  //           <TouchableOpacity style={styles.button}>
  //             <Text
  //               style={styles.buttonText}
  //               onPress={handleSubmit(onAddPressed)}>
  //               Add
  //             </Text>
  //           </TouchableOpacity>
  //           <TouchableOpacity style={styles.button}>
  //             <Text
  //               style={styles.buttonText}
  //               onPress={handleSubmit(onViewRecordsPressed)}>
  //               List
  //             </Text>
  //           </TouchableOpacity>
  //         </View>
  //       </View>
  //     </>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   buttonContainer: {
  //     flexDirection: 'column',
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //   },
  //   button: {
  //     backgroundColor: '#007bff',
  //     // paddingHorizontal: 20,
  //     // paddingVertical: 10,
  //     // margin: 5,
  //     borderRadius: 5,
  //     width: '100%',

  //     padding: 15,
  //     marginVertical: 5,

  //     alignItems: 'center',
  //     borderRadius: 5,
  //   },
  //   buttonText: {
  //     color: '#fff',
  //     fontSize: 18,
  //     fontWeight: 'bold',
  //   },
  //   // textContainer: {
  //   //   flex: 2,
  //   //   justifyContent: 'center',
  //   //   alignItems: 'center',
  //   //   width: '100%',
  //   //   fontSize: 24,
  //   // },
  // });

  const signOut = async () => {
    await Auth.signOut();
  };

  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize: 32}}>Welcome, {data.username}</Text> */}
      <Text style={{fontSize: 32}}>Welcome, User</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Add an entry"
          type="PRIMARY"
          onPress={handleSubmit(onAddPressed)}
        />
        <CustomButton
          text="View all records"
          type="PRIMARY"
          onPress={handleSubmit(onViewRecordsPressed)}
        />
      </View>
      <Text
        onPress={signOut}
        style={{
          width: '100%',
          textAlign: 'center',
          color: 'red',
          marginTop: 'auto',
          marginVertical: 20,
          fontSize: 20,
        }}>
        Sign Out
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 5,
  },
  buttonContainer: {
    marginVertical: 200,
  },
});

export default HomeScreen;

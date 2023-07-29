// import {View, Text, StyleSheet, Button} from 'react-native';
// import React from 'react';
// import CustomButton from '../../components/CustomButton/CustomButton';

// import {useNavigation} from '@react-navigation/core';

// import {useForm} from 'react-hook-form';

// const Home = ({route}) => {
//   const navigation = useNavigation();

//   const {data} = route.params;

//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm();

//   const onAddPressed = data => {
//     console.log('onConfirmPressed in homescreen', data);
//     navigation.navigate('add-screen');
//   };

//   const onViewRecordsPressed = data => {
//     console.log('onConfirmPressed in homescreen', data);
//     navigation.navigate('view-screen');
//   };
//   return (
//     // <View>
//     //   <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, Sweet Home</Text>
//     //   {/* {onPress, text, type = 'PRIMARY', bgColor, fgColor} */}
//     //   {/* <CustomButton text="Confirm" onPress={onConfirmPressed} type="PRIMARY" />

//     //   */}
//     // </View>
//     <View style={styles.container}>
//       <Text style={{fontSize: 24}}>Welcome, {data.username}</Text>
//       <View style={styles.buttonContainer}>
//         <Button style title="Add" onPress={handleSubmit(onAddPressed)} />
//         <Button title="View" onPress={handleSubmit(onViewRecordsPressed)} />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     width: '100%',

//     padding: 15,
//     marginVertical: 5,

//     // alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingHorizontal: 10,
//     marginVertical: 10,
//   },
// });

// export default Home;

export {default} from './HomeScreen';

import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'
import { auth } from './firebase';
import { useNavigation } from '@react-navigation/native';
import LoginScreen from './LoginScreen';

export default function HomeScreen() {
  
  const navigation = useNavigation();
  const handleSignOut = () =>{
    auth.signOut().then(()=>{
        navigation.navigate('Login');
    }).catch(error=>alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Text>Email:{auth.currentUser?.email}</Text>
        <TouchableOpacity onPress={handleSignOut} style={[styles.button]}>
          <Text style={styles.ButtonText}>
            ÇIKIŞ YAP
          </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button:{
    backgroundColor:'#0782F9',
    padding:15,
    alignItems:'center',
    borderRadius:10,
    width:'60%',
    marginTop:50,

  },
  buttonText:{
    color:'white',
    fontSize:16,
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
})
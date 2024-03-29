import { StyleSheet, Text, View , KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import React , {useState,useEffect} from 'react'
import { auth } from './firebase'
import { useNavigation } from '@react-navigation/native'

export default function LoginScreen() {
  const [okulNo ,setOkulNo]= useState('')
  const [sifre ,setSifre]= useState('')
  const navigation = useNavigation();
  useEffect(()=>{
auth.onAuthStateChanged(user =>{
  if(user){
      navigation.navigate('Home');
  }
});
  },[]);



  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(okulNo,sifre).then
    (userCredentials =>{
      const user = userCredentials.user;
      console.log('Kullanıcı',user.email)
    })
    .catch((error) =>alert(error.message));
  }


  const handleLogin = () => {
    auth.signInWithEmailAndPassword(okulNo,sifre).then
    (userCredentials =>{
      const user = userCredentials.user;
      console.log('Kullanıcı giriş yaptı',user.email)
    })
    .catch((error) =>alert(error.message));
  }
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior='padding'>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Okul Numarası' value={okulNo}
        onChangeText={text => setOkulNo(text)}/>
        <TextInput style={styles.input} placeholder='Şifre' secureTextEntry value={sifre}
        onChangeText={text => setSifre(text)}/>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>
            GİRİŞ YAP
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSignUp} style={[styles.button,styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>
            KAYIT OL
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{
    width:'80%',
  },
  input:{
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical:10,
    marginTop:5,
    borderRadius:10,
  },
  buttonContainer:{
    width:'60%',
    marginTop:40,
  },
  button:{
    backgroundColor:'#0782F9',
    padding:15,
    alignItems:'center',
    borderRadius:10,

  },
  buttonText:{
    color:'white',
    fontSize:16,
  },
  outlineButton:{
    backgroundColor:'white',
    marginTop:5,
  },
  outlineButtonText:{
    color:'black',
    fontSize:16,
  },

})
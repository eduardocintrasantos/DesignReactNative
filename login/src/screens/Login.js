import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image, 
  Alert,
} from 'react-native';


import InputText from '../components/inputText'
import Routes from '../App'

import Teste from './Teste'


export default function Login({navigation} ) {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View style={styles.logo}>
          <Image source={require('../../assets/logo.png')}  style={{width: 150, height: 150}}/>
        </View>
      </View>

      <View style={{marginTop: 20, flexDirection:"row", justifyContent: "center"}}>
        <TouchableOpacity  onPress={() => {alert('Facebook')}}>
          <View style={styles.socialNetworks}>
            <Image source={require('../../assets/logo-face.png')} style={styles.logoSocial} />
            <Text style={styles.text}>Facebook</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {alert('Google')}}>
          <View style={styles.socialNetworks}>
            <Image source={require('../../assets/logo-google.png')} style={styles.logoSocial} />
            <Text style={styles.text}>Google</Text>
          </View>
        </TouchableOpacity>
      </View>
      
      <Text style={styles.text, {color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 15}}>Or</Text>

      <InputText title="E-mail"></InputText>
      <InputText 
        style={{ marginTop: 30, marginBotton: 8}}
        title="Password"
        isSecure={true}></InputText>

      <Text style={[styles.text, styles.link, {textAlign:"right"}]} onPress={() => {alert('Esqueceu a senha')}}>Forgot Password?</Text>

      <TouchableOpacity style={styles.submitContainer} onPress={() => {alert('Logando')}}>
        <Text style={[styles.text, {color: "#fff", fontSize:15}]}>Login</Text>
      </TouchableOpacity>

      <Text style={[styles.text, {fontSize: 14, color: "#ABB4BD", textAlign: "center", marginVertical: 24,}]}>
        Don't have an account? <Text style={styles.text, styles.link}
                                onPress={() => navigation.navigate('Teste')}>Register Now</Text></Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30
  },
  logo: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  socialNetworks: {
    flexDirection:"row",
    height: 40,
    alignItems: "center",
    marginHorizontal: 12,
    marginVertical: 12,
    paddingHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(171, 180, 189, 0.65)",
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "rgba(171, 180, 189, 0.35)",
    shadowOffset: { width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5
  },
  logoSocial: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  text: {
    fontFamily: "Avenir Next",
    color: "#1D2029"
  },
  link: {
    color: "#19e67f",
    fontSize: 14,
  },
  submitContainer: {
    backgroundColor: "#19e67f",
    fontSize: 16,
    borderRadius: 4,
    paddingVertical: 12,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

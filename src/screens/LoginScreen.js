import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import InputNormal from '../components/InputNormal';
import InputSecreto from '../components/InputSecreto';
import BotaoPretoBranco from '../components/BotaoPretoBranco';
import Separador from '../components/separador';
import { useState } from 'react';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logoSignalSafeBranca.png')} style={styles.logo} />
      <Text style={styles.logoText}>SignalSafe</Text>
      <View style={styles.container2}>
        <Text style={styles.titulo}>Acesse sua conta</Text>
        <Text style={styles.texto}>E-mail:</Text>
        <InputNormal placeholder="nome@exemplo.com" text={email} alterarTexto={setEmail} ></InputNormal>
        <Text style={styles.texto}>Senha:</Text>
        <InputSecreto placeholder="Digite sua senha" text={senha} alterarTexto={setSenha} ></InputSecreto>
        <BotaoPretoBranco texto="Entrar" onPress={() => {
          console.log('E-mail:', email)
          console.log('Senha:', senha)
          if (email == 'admin@test.com' && senha == 'admin') {
            navigation.navigate('Home');
          } else {
            alert('E-mail ou senha incorretos');
          }
        }} />
        <Separador texto="ou" />
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {navigation.navigate('SignInScreen')}} style={{marginTop: 10}}>
          <Text style={styles.texto}>criar uma conta</Text>
        </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  logo: {
    width: 200,
    height: 150,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20
  },
  texto: {
    fontSize: 14,
    color: '#5e5e5e',
    marginVertical: 10,
  },
  container2: {
    flex: 1,
    justifyContent: 'row',
    alignItems: 'row',
    backgroundColor: '#fff',
    width: '100%',
    height: '90%',
    borderRadius: 20,
    padding: 30,
  }
})

export default LoginScreen
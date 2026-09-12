import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import InputNormal from '../components/InputNormal';
import InputSecreto from '../components/InputSecreto';
import BotaoPretoBranco from '../components/BotaoPretoBranco';

const SignInScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
          <Image source={require('../../assets/logoSignalSafeBranca.png')} style={styles.logo} />
          <Text style={styles.logoText}>SignalSafe</Text>
      </View>
          <View style={styles.container2}>
          <Text style={styles.titulo}>Crie sua conta</Text>
          <Text style={styles.texto}>Nome:</Text>
          <InputNormal placeholder="Digite seu nome" texto={nome} alterarTexto={setNome} />
          <Text style={styles.texto}>E-mail:</Text>
          <InputNormal placeholder="nome@exemplo.com" texto={email} alterarTexto={setEmail} />
          <Text style={styles.texto}>Senha:</Text>
          <InputSecreto placeholder="Digite sua senha" texto={senha} alterarTexto={setSenha} />
          <Text style={styles.texto}>Confirmar Senha:</Text>
          <InputSecreto placeholder="Confirme sua senha" texto={confirmarSenha} alterarTexto={setConfirmarSenha} />
          <BotaoPretoBranco texto="Criar Conta" onPress={() => navigation.navigate('Home')} />
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={{alignItems: 'center', marginTop: 10}}>
            <Text style={styles.texto}>Já possui uma conta? Faça login</Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: '100%',
    height: '90%',
    marginTop: 20,
    backgroundColor: '#F8F9FB',
    padding: 20,
    borderRadius: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  texto: {
    fontSize: 14,
    color: '#5e5e5e',
    marginTop: 10,
  },
  logo: {
    width: 40,
    height: 30,
  },
    logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  containerLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    marginTop: 20,
  },
})

export default SignInScreen
import { StyleSheet, Text, View, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'

const Estabelecimento = ({ nome, cidade, estado , imagem = require('../../assets/iconeDefaultEstab.png')}) => {
  return (
    <View style={styles.container}>
        <Image source={imagem} style={styles.imagem} /> 
        <View style={{flexDirection: 'column'}}>
            <Text style={styles.nomeEstab}>{nome}</Text>
            <Text style={styles.text}>{cidade}, {estado}</Text>
        </View>
        <Text style={styles.setaEstilo}>{">"}</Text>
    </View>
  )
}

export default Estabelecimento

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    padding: 10,
    marginVertical:10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  imagem: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 3,
    resizeMode: 'contain',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 12,
    color: '#000',
  },

  nomeEstab: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  setaEstilo: {
    fontSize: 24,
    color: '#000',
    marginLeft: 'auto',
  }
})
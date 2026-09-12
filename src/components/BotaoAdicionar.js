import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const BotaoAdicionar = ({ onPress }) => {
  return (
    <View>
      <TouchableOpacity style={styles.botao} onPress={onPress}>
        <Text style={styles.texto}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BotaoAdicionar

const styles = StyleSheet.create({
    botao: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },  
})
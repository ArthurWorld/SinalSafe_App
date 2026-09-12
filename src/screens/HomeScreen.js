import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Modal , Image} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import Estabelecimento from '../components/Estabelecimento'
import botaoAdicionar from '../components/BotaoAdicionar'
import InputNormal from '../components/InputNormal'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { useState } from 'react'
import BotaoAdicionar from '../components/BotaoAdicionar'
import BotaoPretoBranco from '../components/BotaoPretoBranco'

const HomeScreen = () => {
  const [busca, setBusca] = React.useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [nome, setNome] = useState('');
  const [imagem, setImagem] = useState(null);
  const [localizacao, setLocalizacao] = useState(null);
  const [botaoLocalizacao, setBotaoLocalizacao] = useState(false);
  const [estabelecimentos, setEstabelecimentos] = useState([]);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permissão para acessar a galeria é necessária!');
      return;
    } 

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagem(result.assets[0].uri);
    }
  };

  const tirarFoto = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (permissionResult.granted === false) {
      alert('Permissão para acessar a câmera é necessária!');
      return;
    } 

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      setImagem(result.assets[0].uri);
    }
  };

  
  const obterLocalizacao = async () => {
    setBotaoLocalizacao(true);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      alert('Permissão para acessar a localização é necessária!');
      return;
    }
    const result = await Location.getCurrentPositionAsync({});
    const enderecos = await Location.reverseGeocodeAsync({latitude: result.coords.latitude,longitude: result.coords.longitude,});
    setLocalizacao(enderecos[0]);
    setBotaoLocalizacao(false);
    console.log(enderecos);
  }

  const adicionarEstabelecimento = () => {
    if (nome && imagem && localizacao) {
      const novoEstabelecimento = {
        nome: nome,
        cidade: localizacao.region,
        estado: localizacao.subregion,
        imagem: { uri: imagem },
      };
      setEstabelecimentos([...estabelecimentos, novoEstabelecimento]);
      setModalVisible(false);
      setNome('');
      setImagem(null);
      setLocalizacao(null);
    } else {
      alert('Por favor, preencha todos os campos antes de cadastrar o estabelecimento.');
    }
  };

  const normalizarTexto = (texto) => {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  }

  const buscaNormalizada = normalizarTexto(busca);

  const estabelecimentosFiltrados = estabelecimentos.filter(estabelecimento => {
    const nomeNormalizado = normalizarTexto(estabelecimento.nome);
    const cidadeNormalizada = normalizarTexto(estabelecimento.cidade);
    const estadoNormalizado = normalizarTexto(estabelecimento.estado);
    return nomeNormalizado.includes(buscaNormalizada) || cidadeNormalizada.includes(buscaNormalizada) || estadoNormalizado.includes(buscaNormalizada);
  });

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalFundo}>
        <View style={styles.modalConteudo}>
          <TouchableOpacity onPress={() => setModalVisible(false)} style={{position: 'absolute', top: 10, right: 10}}>
            <Ionicons name="close-outline" size={34} color="black" />
          </TouchableOpacity> 
          <Text style={styles.texto}>Cadastrar Estabelecimento</Text>
          <InputNormal placeholder="Nome do Estabelecimento" texto={nome} alterarTexto={setNome} />
          <BotaoPretoBranco texto="Tirar Foto" onPress={tirarFoto} />
          <BotaoPretoBranco texto="Escolher da Galeria" onPress={pickImage} />
          {imagem && <Image source={{ uri: imagem }} style={{ width: 100, height: 100, marginTop: 10 }} />}
          <BotaoPretoBranco texto="Obter Localização Atual" onPress={obterLocalizacao} disabled={botaoLocalizacao} />
          {localizacao && <Text>{localizacao.region} - {localizacao.subregion}</Text>}
          {localizacao && <Text>{localizacao.street} - {localizacao.streetNumber}</Text>}
          <BotaoPretoBranco texto="Cadastrar Novo Estabelecimento" onPress={adicionarEstabelecimento} />
        </View>
        </View>
      </Modal>
      <View style={styles.containerFixo}>
        <Image source={require('../../assets/logoSignalSafe.png')} style={{width: 50, height: 50, resizeMode: 'contain'}} />
        <Text style={styles.texto}>SignalSafe</Text>
        <Ionicons name="person-circle-outline" size={34} color="black" />
      </View>
      <View style={styles.containerFixo}>
        <Text style={styles.texto}>Estabelecimentos</Text>
        <BotaoAdicionar onPress={() => {setModalVisible(true);}} />
      </View>
      <View style={styles.containerFixo}>
        <InputNormal placeholder="Buscar estabelecimentos..." texto={busca} alterarTexto={setBusca} />
      </View>
      <ScrollView 
      style={styles.containerScroll}
      showsVerticalScrollIndicator={true}
      contentContainerStyle={styles.contentContainerScroll}
      >
        {estabelecimentosFiltrados.map((estabelecimento, index) => (
          <Estabelecimento 
            key={index}
            nome={estabelecimento.nome}
            cidade={estabelecimento.cidade}
            estado={estabelecimento.estado}
            imagem={estabelecimento.imagem}
          />
        ))}

      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FB',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    height: '100%',
    width: '100%',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  containerFixo: {
    alignItems: 'center',
    alignContent: 'center', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    padding: 10,
    marginTop: 10,
  },
  containerScroll: {
    width: '100%',
    padding: 10,
  },
  contentContainerScroll: {
    alignContent: 'center',
    alignItems: 'center',
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(3, 3, 3, 0.36)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  modalConteudo: {
    width: '100%',
    maxHeight: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    overflow: 'hidden',
  },
})
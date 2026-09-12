import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function InputSenha({
  texto,
  alterarTexto,
  placeholder = "Digite sua senha",
}) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={texto}
        onChangeText={alterarTexto}
        placeholder={placeholder}
        placeholderTextColor="#777777"
        secureTextEntry={!mostrarSenha}
      />

      <TouchableOpacity
        style={styles.botaoOlho}
        onPress={() => setMostrarSenha(!mostrarSenha)}
        activeOpacity={0.7}
        hitSlop={10}
      >
        <Ionicons
          name={mostrarSenha ? "eye-off-outline" : "eye-outline"}
          size={30}
          color="#777777"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 38,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#777777",
    backgroundColor: "#FFFFFF",
  },

  input: {
    flex: 1,
    width: "95%",
    height: "100%",
    paddingLeft: 22,
    fontSize: 16,
    color: "#222222",
  },

  botaoOlho: {
    height: "100%",
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
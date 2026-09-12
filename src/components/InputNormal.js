import { StyleSheet, TextInput } from "react-native";

export default function InputNormal({
  texto,
  alterarTexto,
  placeholder,
  tipoTeclado = "default",
}) {
  return (
    <TextInput
      style={styles.input}
      value={texto}
      onChangeText={alterarTexto}
      placeholder={placeholder}
      placeholderTextColor="#8f8f8f"
      keyboardType={tipoTeclado}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 38,
    borderWidth: 1,
    borderColor: "#777777",
    borderRadius: 10,
    paddingHorizontal: 22,
    paddingVertical: 10,
    fontSize: 16,
    color: "#222222",
    backgroundColor: "#FFFFFF",
  },
});
import { StyleSheet, Text, View } from "react-native";

export default function Separador({ texto }) {
  return (
    <View style={styles.container}>
      <View style={styles.linha} />
      <Text style={styles.texto}>{texto}</Text>
      <View style={styles.linha} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 28,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#777777",
  },

  texto: {
    marginHorizontal: 14,
    fontSize: 14,
    color: "#222222",
  },
});
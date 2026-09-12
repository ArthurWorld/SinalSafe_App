import { StyleSheet, Text, TouchableOpacity } from "react-native";


export default function BotaoPretoBranco({ 
    texto,
    onPress,
    disabled = false
    })
    {
  return (
    <TouchableOpacity style={{
    width: "100%",
    marginVertical: 10,
    height: 38,
    backgroundColor: disabled ? "#777777" : "#000000",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }} onPress={onPress} disabled={disabled}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  texto: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function EquipamentoItem({ data }) {
  return (
    <TouchableOpacity onPress={ () => console.log(data)} style={styles.container}>
      <Text style={styles.nome}>{data.nome}</Text>
      <Text style={styles.tipo}>{data.tipo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    borderWidth: 2,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
  },
  nome: {
    fontSize: 25,
  },
  tipo: {
    fontSize: 15,
  },
});

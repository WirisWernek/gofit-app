import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function PlanoTreinoItem({ data }) {
  return (
    <TouchableOpacity onPress={ () => console.log(data)}
      style={[styles.container, data.ativo ? styles.ativo : styles.inativo]}
    >
      <View style={styles.header}>
        <Text style={styles.nome}>{data.nome}</Text>
        <Text style={styles.inicio}>{dataFormatada(data.inicio)}</Text>
      </View>
      <Text style={styles.descricao}>{data.descricao}</Text>
    </TouchableOpacity>
  );
}

function dataFormatada(data) {
  var data = new Date(data),
    dia = data.getDate().toString(),
    diaF = dia.length == 1 ? "0" + dia : dia,
    mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
    mesF = mes.length == 1 ? "0" + mes : mes;

  return diaF + "/" + mesF;
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
  ativo: {
    backgroundColor: "#00FF00",
  },
  inativo: {
    backgroundColor: "#FF0000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nome: {
    fontSize: 25,
  },
  inicio: {
    fontSize: 13,
  },
  descricao: {
    fontSize: 15,
  },
});

import React, { useEffect, useState } from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { getAll } from "../../../services/equipamento-service";
import EquipamentoItem from "../components/EquipamentoItem";

export default function ListEquipamentos() {
  const [filmes, setFilmes] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function loadFilmes() {
      const response = await getAll();
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("form-equipamento")}
      >
        <Text style={styles.textoBotao}>Novo Equipamento</Text>
      </TouchableOpacity>
      <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <EquipamentoItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#ccc",
    padding: 10,
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
  },
  textoBotao: {
    fontSize: 20,
  },
});

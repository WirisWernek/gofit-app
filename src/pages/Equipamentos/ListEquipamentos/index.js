import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import api from "../../../services/api";
import EquipamentoItem from "../components/EquipamentoItem";

export default function ListEquipamentos() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("equipamento");
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
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
	padding: 10
  },
});

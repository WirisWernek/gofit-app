import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import EquipamentoItem from "./src/components/equipamento-item";
import api from "./src/services/api";

export default function App() {
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
	marginTop: 40
  },
});

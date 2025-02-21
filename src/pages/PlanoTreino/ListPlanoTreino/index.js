import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import api from "../../../services/api";
import PlanoTreinoItem from "../components/PlanoTreinoItem";

export default function ListPlanoTreino() {
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("plano-treino");
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={filmes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <PlanoTreinoItem data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

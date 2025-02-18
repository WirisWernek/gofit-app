import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function EquipamentoItem({ data }) {
  return (
    <View style={styles.container}>
      <Text>Nome: {data.nome}</Text>
      <Text>Tipo: {data.tipo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
	flex: 1,
	flexDirection: 'row',
	gap: 10
  },
});

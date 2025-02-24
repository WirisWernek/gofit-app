import { Picker } from "@react-native-picker/picker";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { getById } from "../../../services/equipamento-service";

export default function FormEquipamento() {
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");

  const route = useRoute();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.id ? "Editar Equipamento" : "Novo Equipamento",
    });
    loadEquipamento();
  });

  async function loadEquipamento() {
    if (route.params?.id !== undefined && route.params?.id !== null) {
      console.log(route.params);
      const response = await getById(route.params.id);
      setNome(response.data.nome);
      setTipo(response.data.tipo);
    } else {
      setNome("");
      setTipo("");
    }
  }

  return (
    <View>
      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={(texto) => setNome(texto)}
      />
      <Picker
        selectedValue={tipo}
        onChangeText={(itemValue, itemIndex) => {
          setTipo(itemValue);
        }}
      >
        <Picker.Item key={1} value={1} label={"AEROBICO"} />
        <Picker.Item key={2} value={2} label={"PESO"} />
        <Picker.Item key={3} value={3} label={"LIVRE"} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  areaStatus: {
    flexDirection: "row",
    alignItems: "center",
  },
});

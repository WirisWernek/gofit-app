import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function FormEquipamento() {
  const [tipo, setTipo] = useState("");
  const [nome, setNome] = useState("");
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

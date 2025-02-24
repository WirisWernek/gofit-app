import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
	Button,
	StyleSheet,
	Switch,
	Text,
	TextInput,
	View,
} from "react-native";

export default function FormPlanoTreino() {
  const [status, setStatus] = useState(false);
  const [inicio, setInicio] = useState(new Date());

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [descanso, setDescanso] = useState(0);

  const [show, setShow] = useState(false);

  function onChange(event, selectedDate) {
    const currentDate = selectedDate;
    setShow(false);
    setInicio(currentDate);
  }

  function showDatepicker() {
    setShow(true);
  }

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Descanso"
        keyboardType="numeric"
        value={descanso}
        onChangeText={(text) => setDescanso(parseInt(text))}
      />

      <View style={styles.datePicker}>
        <Button onPress={showDatepicker} title={inicio.toLocaleDateString()} />
		
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={inicio}
            mode={"date"}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>

      <View style={styles.areaStatus}>
        <Text>Ativo</Text>
        <Switch value={status} onValueChange={(valor) => setStatus(valor)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  datePicker: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
	margin: 10,
  },
  areaStatus: {
    flexDirection: "row",
    alignItems: "center",
	margin: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#000",
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
});

import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import FormEquipamento from "../pages/Equipamentos/FormEquipamento";
import ListEquipamentos from "../pages/Equipamentos/ListEquipamentos";
import FormPlanoTreino from "../pages/PlanoTreino/FormPlanoTreino";
import ListPlanoTreino from "../pages/PlanoTreino/ListPlanoTreino";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Equipamentos" component={ListEquipamentos} />
      <Drawer.Screen name="Planos de Treino" component={ListPlanoTreino} />
      <Drawer.Screen
        name="Formulário de Plano de Treino"
        component={FormPlanoTreino}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Formulário de Equipamento"
        component={FormEquipamento}
        options={{
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
}

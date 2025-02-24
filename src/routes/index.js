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
      <Drawer.Screen
        name="equipamentos-list"
        component={ListEquipamentos}
        options={{
          title: "Equipamentos",
        }}
      />
      <Drawer.Screen
        name="plano-treino-list"
        component={ListPlanoTreino}
        options={{
          title: "Planos de Treino",
        }}
      />
      <Drawer.Screen
        name="form-plano-treino"
        component={FormPlanoTreino}
        options={{
          title: "Formulário de Plano de Treino",
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="form-equipamento"
        component={FormEquipamento}
        options={{
          title: "Formulário de Equipamento",
          drawerItemStyle: { display: "none" },
        }}
      />
    </Drawer.Navigator>
  );
}

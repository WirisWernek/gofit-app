import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import ListEquipamentos from "../pages/Equipamentos/ListEquipamentos";
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
    </Drawer.Navigator>
  );
}

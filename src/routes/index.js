import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import ListEquipamentos from "../pages/Equipamentos/ListEquipamentos";

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Drawer.Screen name="Equipamentos" component={ListEquipamentos} />
    </Drawer.Navigator>
  );
}

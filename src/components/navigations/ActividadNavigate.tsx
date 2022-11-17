import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Actividades from "../actividades/Actividades";
import Actividad from "../actividades/Actividad";

const Stack = createNativeStackNavigator();
const ActivityNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Activitys">
      <Stack.Screen
        name="Activitys"
        component={Actividades}
        options={() => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Activity"
        component={Actividad}
        options={() => ({
          headerShown: false,
        })}
      />
    </Stack.Navigator>
  );
};

export default ActivityNavigate;

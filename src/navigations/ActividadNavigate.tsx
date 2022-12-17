import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Actividades from "../screens/actividades/Actividades";
import Actividad from "../screens/actividades/Actividad";

const Stack = createNativeStackNavigator();
const ActivityNavigate = () => {
  return (
    <Stack.Navigator initialRouteName="Activitys">
      <Stack.Group screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Activitys" component={Actividades} />
        <Stack.Screen name="Activity" component={Actividad} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ActivityNavigate;

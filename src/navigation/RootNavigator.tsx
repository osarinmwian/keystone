import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import HomeScreen from "../screens/home";
import { AppDispatch } from "../store/store";
import { getValuablesThunk } from "../store/items.slice";

const RootStack = createStackNavigator();

const RootNavigator = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getValuablesThunk());
  }, []);

  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;

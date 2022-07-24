import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from "@react-navigation/native"

// Import Stack Navigation
import { createStackNavigator } from "@react-navigation/stack"

// Import Theme Native Base
import { useTheme } from "native-base"

// Import Screen
import Hello from "./src/screens/Hello";
import Calculator from "./src/screens/Calculator";
import TodoList from "./src/screens/TodoList";
import Detail from "./src/screens/Detail";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from "@expo/vector-icons";


const Tab = createBottomTabNavigator()
// Create Stack Navigation
const Stack = createStackNavigator()

function MyTab() {
  const theme = useTheme();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerMode: "screen",
        headerTintColor: "white",
        headerStyle: { backgroundColor: theme.colors.primary["1000"] },
        tabBarIcon: ({ focused, color, size }) => {
          
          let iconName

          if (route.name == "Home") {
            iconName = focused ? "ios-home" : "ios-home-outline"
          } else if (route.name == "Calculator") {
            iconName = focused ? "ios-calculator" : "ios-calculator-outline"
          } else if (route.name == "Todo List") {
            iconName = focused ? "md-bookmarks" : "md-bookmarks-outline"
          } 
          return <Ionicons name={iconName} size={size} color={color} />
        },
        tabBarActiveTintColor: theme.colors.primary["600"],
        tabBarInactiveTintColor: "black"
      })}
    >
      <Tab.Screen name="Home" component={Hello} options={{ headerShown: false }} />
      <Tab.Screen name="Calculator" component={Calculator} options={{ headerShown: false }} />
      <Tab.Screen name="Todo List" component={TodoList} options={{ headerShown: false }}  />
    </Tab.Navigator>
  )
}

export default function Container() {
  // Init Theme
  const theme = useTheme()

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: theme.colors.primary["300"] }
        }}
      >
        <Stack.Screen
          name="Main"
          component={MyTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
        />
        <Stack.Screen
          name="Todo List"
          component={TodoList}
        />
        <Stack.Screen
          name="Detail"
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
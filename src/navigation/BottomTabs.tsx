import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@react-native-vector-icons/ionicons";

import { BottomTabParamList } from "./types";

import HomeScreen from "../screens/Home/HomeScreen";
import OrdersScreen from "../screens/Orders/OrdersScreen";
import CartScreen from "../screens/Cart/CartScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";

const Tab = createBottomTabNavigator<BottomTabParamList>();

const icons: Record<
  keyof BottomTabParamList,
  { active: keyof typeof Ionicons.glyphMap; inactive: keyof typeof Ionicons.glyphMap }
> = {
  Home: {
    active: "home",
    inactive: "home-outline",
  },
  Orders: {
    active: "receipt",
    inactive: "receipt-outline",
  },
  Cart: {
    active: "cart",
    inactive: "cart-outline",
  },
  Profile: {
    active: "person",
    inactive: "person-outline",
  },
};

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#E91E63",

        tabBarInactiveTintColor: "#9E9E9E",

        tabBarStyle: {
          height: 65,
          paddingTop: 6,
          paddingBottom: 8,
        },

        tabBarIcon: ({ focused, color, size }) => {
          const icon = icons[route.name];

          return (
            <Ionicons
              name={focused ? icon.active : icon.inactive}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Orders"
        component={OrdersScreen}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
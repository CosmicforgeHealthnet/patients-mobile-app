import { HapticTab } from "@/src/shared/components/haptic-tab";
import { useColorScheme } from "@/src/shared/hooks/use-color-scheme.web";
import { Tabs } from "expo-router";
import {
  Bell,
  CalendarDaysIcon,
  Home,
  MessageCircle,
  User,
} from "lucide-react-native";
import React from "react";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  //   the tab navigator
  // all screens add here would be in the

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#272ea7",
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: "Messages",
          tabBarIcon: ({ color }) => <MessageCircle color={color} />,
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appointments",
          tabBarIcon: ({ color }) => <CalendarDaysIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color }) => <Bell color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
      {/* Hide screens so it doesn't appear as a tab */}
      {/* you can hide the screens you don't want to be visible in the bottom tab here */}
      {/* <Tabs.Screen name="referAndEarn" options={{ href: null }} /> */}
      <Tabs.Screen name="hiddenTab" options={{ href: null }} />
    </Tabs>
  );
}

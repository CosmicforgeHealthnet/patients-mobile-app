import CustomDrawerContent from "@/src/shared/components/custom-drawer";
import { CustomHeader } from "@/src/shared/components/custom-header";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { withLayoutContext } from "expo-router";
import { Home } from "lucide-react-native";

const { Navigator } = createDrawerNavigator();

const DrawerLayout = withLayoutContext(Navigator);

export default function MyDrawer() {
  return (
    <DrawerLayout drawerContent={(props) => <CustomDrawerContent {...props} />}>
      {/* this (tabs) screen is the screen with the bottom tab navigator */}
      {/* if want a screen to have the bottom tba visible you can add the screen in the (tabs) in the TabScreen navigator */}
      <DrawerLayout.Screen
        name="(tabs)"
        options={{
          title: false,
          drawerIcon: <Home />,
          header: () => (
            <CustomHeader
              title="My Appointments"
              showNotifications={true}
              showSearch={false}
              onNotificationPress={() => console.log("Notifications")}
            />
          ),
        }}
      />
      {/* This screen is one of thr drawer screen it does not have the bottom tab navigator */}
      {/* <DrawerLayout.Screen
        name="Prescriptions"
        options={{
          title: "Prescriptions",
          drawerLabel: "Prescriptions",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      /> */}
    </DrawerLayout>
  );
}

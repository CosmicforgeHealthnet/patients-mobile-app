import { Ionicons } from "@expo/vector-icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  BriefcaseMedical,
  CalendarDays,
  Cross,
  Droplet,
  Globe,
  Home,
  MessageCircle,
  Settings,
  User,
  Users,
  Video,
} from "lucide-react-native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useColorScheme } from "../hooks/use-color-scheme.web";
import { AvatarFallback, AvatarImage, AvatarWithBadge } from "./ui/Avatar";

const drawerItems = [
  { icon: Home, label: "Dashboard", route: "Dashboard" },
  { icon: Users, label: "Find Specialist", route: "FindSpecialist" },
  { icon: CalendarDays, label: "Appointments", route: "Appointments" },
  { icon: Video, label: "Consultations", route: "Consultations" },
  { icon: Cross, label: "Pharmacy", route: "Pharmacy" },
  { icon: BriefcaseMedical, label: "First Aid", route: "FirstAid" },
  { icon: Droplet, label: "Lab Test", route: "LabTest" },
  { icon: Globe, label: "Medical Tour", route: "MedicalTour" },
  { icon: User, label: "Profile", route: "Profile" },
  { icon: Settings, label: "Settings", route: "Settings" },
  { icon: MessageCircle, label: "Support", route: "Support" },
];

const CustomDrawerContent = (props: any) => {
  const colorScheme = useColorScheme();
  const activeColor = colorScheme === "dark" ? "#0A84FF" : "#007AFF";
  const inactiveColor = colorScheme === "dark" ? "#A1A1AA" : "#8E8E93";

  return (
    <DrawerContentScrollView
      {...props}
      showsVerticalScrollIndicator={false}

      //   contentContainerStyle={styles.drawerContent}
    >
      {/* Header Section */}
      <View>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/cosmic-log.png")} // Replace with your logo path
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <AvatarWithBadge size={80} badgeColor="#10B981" badgeSize={16}>
            <AvatarImage source={{ uri: "" }} alt="Kelly Smith" />
            <AvatarFallback className="bg-primary">Kelly S</AvatarFallback>
          </AvatarWithBadge>

          <Text style={styles.userName}>Kelly .S</Text>
          <TouchableOpacity>
            <Text style={styles.editProfile}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Navigation Items */}
      <View style={styles.navigationSection}>
        {drawerItems.map((item, index) => {
          const isActive = props.state.index === index;
          const color = isActive ? activeColor : inactiveColor;
          const Icon = item.icon;
          return (
            <DrawerItem
              key={index}
              icon={<Icon color={isActive ? "#272ea7" : "black"} />}
              label={item.label}
              onPress={() => props.navigation.navigate(item.route)}
              isActive={isActive}
            />
          );
        })}
      </View>

      {/* Logout Button */}
      <View style={styles.logoutSection}>
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => {
            // Handle logout logic
            console.log("Logout pressed");
          }}
        >
          <Ionicons name="log-out-outline" size={24} color="#FF6B6B" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

// Custom Drawer Item Component
const DrawerItem = ({ icon, label, onPress, isActive }: any) => {
  return (
    <TouchableOpacity
      className={` flex flex-row items-center py-3 px-5 border-b-1 mb-5 ${isActive && "bg-primary/30"}`}
      //   style={[styles.drawerItem]}
      onPress={onPress}
    >
      {icon}
      <Text
        className={`${isActive ? "text-primary font-bold" : "text-black"}`}
        style={[styles.drawerItemText]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  headerSection: {
    paddingTop: 20,
    paddingBottom: 30,
    backgroundColor: "#F8F9FA",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 40,
  },
  profileSection: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: "hidden",
    marginBottom: 12,
    borderWidth: 3,
    borderColor: "#4A90E2",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  userName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333333",
    marginBottom: 4,
  },
  editProfile: {
    fontSize: 14,
    color: "#999999",
  },
  navigationSection: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 0,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 5,
  },
  drawerItemActive: {
    backgroundColor: "#E8F4FF",
  },
  drawerItemText: {
    fontSize: 16,
    // color: "#333333",
    marginLeft: 15,
    fontWeight: "500",
  },
  drawerItemTextActive: {
    color: "#4A90E2",
    fontWeight: "600",
  },
  logoutSection: {
    paddingHorizontal: 5,
    paddingVertical: 20,
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  logoutText: {
    fontSize: 16,
    color: "#FF6B6B",
    marginLeft: 15,
    fontWeight: "600",
  },
});

export default CustomDrawerContent;

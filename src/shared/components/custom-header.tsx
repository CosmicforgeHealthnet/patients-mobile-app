import { Ionicons } from "@expo/vector-icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Bell, Headphones, Menu, ShoppingCart, X } from "lucide-react-native";
import React from "react";
import {
  Image,
  Platform,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useThemeColor } from "../hooks/use-theme-color";

interface CustomHeaderProps {
  title?: string;
  showBackButton?: boolean;
  showMenuButton?: boolean;
  showNotifications?: boolean;
  showSearch?: boolean;
  bgColor?: string;
  onNotificationPress?: () => void;
  onSearchPress?: () => void;
  rightComponent?: React.ReactNode;
  leftComponent?: React.ReactNode;
}

export const CustomHeader: React.FC<CustomHeaderProps> = ({
  title,
  showBackButton = false,
  showMenuButton = true,
  showNotifications = true,
  showSearch = false,
  bgColor = "bg-blue-500",
  onNotificationPress,
  onSearchPress,
  rightComponent,
  leftComponent,
}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();
  const color = useThemeColor({ light: "#000", dark: "#fff" }, "background");
  return (
    <SafeAreaView edges={["top"]} className="bg-white">
      <View className={`flex-row items-center px-4  h-14`}>
        {/* Left Section */}
        <View className="flex-0 justify-center bg-transparent">
          {leftComponent ? (
            leftComponent
          ) : showBackButton ? (
            <TouchableOpacity
              className="p-2"
              onPress={() => navigation.goBack()}
            >
              <X color={"green"} />
            </TouchableOpacity>
          ) : showMenuButton ? (
            <View className="flex gap-2 flex-row items-center">
              <TouchableOpacity
                className="p-2"
                onPress={() => navigation.openDrawer()}
              >
                <Menu className="text-black dark:white" />
              </TouchableOpacity>
              <Image
                source={require("../../assets/images/cosmic-log.png")}
                className="w-32 h-8"
                resizeMode="contain"
              />
            </View>
          ) : null}
        </View>

        {/* Center Section - Title or Logo */}
        <View className="flex-1 items-center justify-center bg-transparent">
          {title ? (
            <Text className="text-xl font-semibold text-white">{}</Text>
          ) : (
            ""
            // <Image
            //   source={require("../../assets/images/cosmic-log.png")}
            //   className="w-32 h-8"
            //   resizeMode="contain"
            // />
          )}
        </View>

        {/* Right Section */}
        <View className="flex-0 flex-row items-center gap-2 bg-transparent">
          {rightComponent ? (
            rightComponent
          ) : (
            <>
              {showNotifications && (
                <TouchableOpacity
                  className="p-2 relative"
                  onPress={onNotificationPress}
                >
                  <Bell size={18} className="text-black dark:white" />
                  {/* Notification Badge */}
                  <View className="absolute top-1.5 right-1.5 bg-red-500 rounded-full min-w-[10px] h-[10px] items-center justify-center px-1">
                    {/* <Text className="text-white text-[3px] font-bold">
                      3
                    </Text> */}
                  </View>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                className="p-2 relative"
                onPress={onNotificationPress}
              >
                <ShoppingCart className="text-black dark:white" size={18} />
              </TouchableOpacity>
              <TouchableOpacity
                className="p-2 relative"
                onPress={onNotificationPress}
              >
                <Headphones className="text-black dark:white" size={18} />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

// Alternative: Header with User Avatar
interface HeaderWithAvatarProps {
  userName: string;
  userAvatar?: string;
  title?: string;
  onAvatarPress?: () => void;
  bgColor?: string;
}

export const HeaderWithAvatar: React.FC<HeaderWithAvatarProps> = ({
  userName,
  userAvatar,
  title = "Dashboard",
  onAvatarPress,
  bgColor = "bg-blue-500",
}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View
      className={`flex-row items-center px-4 ${bgColor} shadow-md`}
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        height:
          Platform.OS === "android" ? 56 + (StatusBar.currentHeight || 0) : 56,
      }}
    >
      {/* Menu Button */}
      <TouchableOpacity className="p-2" onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      {/* Title and Greeting */}
      <View className="flex-1 ml-3 bg-transparent">
        <Text className="text-sm text-white opacity-90">Hello,</Text>
        <Text className="text-lg font-semibold text-white">{userName}</Text>
      </View>

      {/* Avatar */}
      <TouchableOpacity onPress={onAvatarPress}>
        <View className="ml-3 bg-transparent">
          {userAvatar ? (
            <Image
              source={{ uri: userAvatar }}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ) : (
            <View className="w-10 h-10 rounded-full bg-white items-center justify-center">
              <Text className="text-base font-semibold text-blue-500">
                {userName.substring(0, 2).toUpperCase()}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

// Search Header Variant
interface SearchHeaderProps {
  placeholder?: string;
  onSearchFocus?: () => void;
  bgColor?: string;
}

export const SearchHeader: React.FC<SearchHeaderProps> = ({
  placeholder = "Search...",
  onSearchFocus,
  bgColor = "bg-blue-500",
}) => {
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <View
      className={`flex-row items-center px-4 ${bgColor} shadow-md`}
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        height:
          Platform.OS === "android" ? 56 + (StatusBar.currentHeight || 0) : 56,
      }}
    >
      <TouchableOpacity className="p-2" onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity
        className="flex-1 flex-row items-center bg-white/20 rounded-full px-4 py-2 mx-3"
        onPress={onSearchFocus}
      >
        <Ionicons name="search" size={20} color="#FFFFFF" className="mr-2" />
        <Text className="text-base text-white opacity-80">{placeholder}</Text>
      </TouchableOpacity>

      <TouchableOpacity className="p-2">
        <Ionicons name="options-outline" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

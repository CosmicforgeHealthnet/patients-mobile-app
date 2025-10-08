import { Avatar, AvatarFallback } from "@/src/shared/components/ui/Avatar";
import { Card, CardContent } from "@/src/shared/components/ui/Card";
import { SearchInput } from "@/src/shared/components/ui/Input";
import {
  Activity,
  Bot,
  Cross,
  Droplets,
  FlaskConical,
  Heart,
  MoreHorizontal,
  Pill,
  Plane,
  QrCode,
  ShoppingBag,
  Stethoscope,
  Store,
  TestTube,
  Thermometer,
} from "lucide-react-native";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// the index file in the (dashboard) folder
export default function Dashboard() {
  return (
    <View className="px-5 flex-1 bg-white">
      <View className="flex flex-row gap-2 w-full">
        <Avatar size={45}>
          {/* <AvatarImage
            source={require("../../../asses/images/icon.png")}
            alt="use image"
          /> */}
          <AvatarFallback className="bg-primary">Ajogu Joseph</AvatarFallback>
        </Avatar>
        <View className="gap-2 ">
          <Text className="text-xl font-bold font-Poppins">Hi Kelly,</Text>
          <Text className="text-md ">How are you feeling today?</Text>
        </View>
      </View>

      <ScrollView className="mt-2 flex-1" showsVerticalScrollIndicator={false}>
        <SearchInput />
        {/* Header Section */}
        <View className="mt-5">
          {/* Upcoming Appointment Card */}
          <Card className="!bg-primary border-0 mb-6">
            <CardContent className="p-4">
              <Text className="text-white text-sm mb-2">
                Upcoming Appointment
              </Text>
              <Text className="text-white text-xs mb-3">
                Start in 40 minutes
              </Text>

              {/* Countdown Timer */}
              <View className="flex-row items-center gap-2 mb-4">
                <View className="items-center">
                  <Text className="text-white text-2xl font-bold">00</Text>
                  <Text className="text-white text-xs">Hrs</Text>
                </View>
                <Text className="text-white text-2xl">:</Text>
                <View className="items-center">
                  <Text className="text-white text-2xl font-bold">39</Text>
                  <Text className="text-white text-xs">Min</Text>
                </View>
                <Text className="text-white text-2xl">:</Text>
                <View className="items-center">
                  <Text className="text-white text-2xl font-bold">04</Text>
                  <Text className="text-white text-xs">Sec</Text>
                </View>
              </View>

              {/* Doctor Info */}
              <View className="flex-row items-center justify-between bg-white rounded-lg p-3">
                <View className="flex-row items-center gap-2 flex-1">
                  <Avatar size={40}>
                    <AvatarFallback className="bg-blue-100">DA</AvatarFallback>
                  </Avatar>
                  <View className="flex-1">
                    <Text className="font-semibold text-gray-900 text-sm">
                      Dr Andrew Adeagbile
                    </Text>
                    <Text className="text-xs text-gray-600">Cardiology</Text>
                  </View>
                </View>
                <View className="gap-1">
                  <View className="flex-row items-center gap-1">
                    <Heart size={12} color="#6B7280" />
                    <Text className="text-xs text-gray-600">9:30 PM</Text>
                  </View>
                  <View className="flex-row items-center gap-1">
                    <Activity size={12} color="#6B7280" />
                    <Text className="text-xs text-gray-600">30/12/2024</Text>
                  </View>
                </View>
              </View>
            </CardContent>
          </Card>

          {/* Health Metrics */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className=" mb-6"
          >
            <View className="flex flex-row gap-3">
              <Card className="flex-1">
                <CardContent className="p-4 items-center">
                  <View className="w-12 h-12 bg-pink-100 rounded-full items-center justify-center mb-2">
                    <Droplets size={24} color="#EC4899" />
                  </View>
                  <Text className="text-xs text-gray-600 mb-1">
                    Blood Pressure
                  </Text>
                  <Text className="font-bold text-gray-900">120/80</Text>
                  <Text className="text-xs text-gray-500">mmHg</Text>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardContent className="p-4 items-center">
                  <View className="w-12 h-12 bg-red-100 rounded-full items-center justify-center mb-2">
                    <Heart size={24} color="#EF4444" />
                  </View>
                  <Text className="text-xs text-gray-600 mb-1">Heart Rate</Text>
                  <Text className="font-bold text-gray-900">82</Text>
                  <Text className="text-xs text-gray-500">/min</Text>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardContent className="p-4 items-center">
                  <View className="w-12 h-12 bg-blue-100 rounded-full items-center justify-center mb-2">
                    <Activity size={24} color="#3B82F6" />
                  </View>
                  <Text className="text-xs text-gray-600 mb-1">SpO2</Text>
                  <Text className="font-bold text-gray-900">98%</Text>
                </CardContent>
              </Card>

              <Card className="flex-1">
                <CardContent className="p-4 items-center">
                  <View className="w-12 h-12 bg-green-100 rounded-full items-center justify-center mb-2">
                    <Thermometer size={24} color="#10B981" />
                  </View>
                  <Text className="text-xs text-gray-600 mb-1">
                    Body Temperature
                  </Text>
                  <Text className="font-bold text-gray-900">36.5°C</Text>
                </CardContent>
              </Card>
            </View>
          </ScrollView>
        </View>

        {/* Browse by Specializations */}
        <View className="px-5 mb-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-gray-900">
              Browse by Specializations
            </Text>
            <TouchableOpacity>
              <Text className="text-sm text-blue-500 font-medium">See All</Text>
            </TouchableOpacity>
          </View>

          {/* Specializations Grid */}
          <View className="flex-row flex-wrap gap-3 w-full">
            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-blue-50 rounded-2xl items-center justify-center mb-2">
                <Stethoscope size={32} color="#3B82F6" />
              </View>
              <Text className="text-xs text-gray-700 text-center">
                General Med
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-red-50 rounded-2xl items-center justify-center mb-2">
                <Cross size={32} color="#EF4444" />
              </View>
              <Text className="text-xs text-gray-700 text-center">
                Emergency Med
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-blue-50 rounded-2xl items-center justify-center mb-2">
                <Heart size={32} color="#3B82F6" />
              </View>
              <Text className="text-xs text-gray-700 text-center">
                Cardiology
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-purple-50 rounded-2xl items-center justify-center mb-2">
                <Bot size={32} color="#8B5CF6" />
              </View>
              <Text className="text-xs text-gray-700 text-center">AI Bots</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-red-50 rounded-2xl items-center justify-center mb-2">
                <Pill size={32} color="#EF4444" />
              </View>
              <Text className="text-xs text-gray-700 text-center">
                First Aid
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-purple-50 rounded-2xl items-center justify-center mb-2">
                <TestTube size={32} color="#8B5CF6" />
              </View>
              <Text className="text-xs text-gray-700 text-center">Lab</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-blue-50 rounded-2xl items-center justify-center mb-2">
                <FlaskConical size={32} color="#3B82F6" />
              </View>
              <Text className="text-xs text-gray-700 text-center">
                Pharmacy
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-gray-50 rounded-2xl items-center justify-center mb-2">
                <QrCode size={32} color="#6B7280" />
              </View>
              <Text className="text-xs text-gray-700 text-center">QR</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-cyan-50 rounded-2xl items-center justify-center mb-2">
                <Plane size={32} color="#06B6D4" />
              </View>
              <Text className="text-xs text-gray-700 text-center">
                Medical Tour
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-pink-50 rounded-2xl items-center justify-center mb-2">
                <Store size={32} color="#EC4899" />
              </View>
              <Text className="text-xs text-gray-700 text-center">Shop</Text>
            </TouchableOpacity>

            <TouchableOpacity className="w-[30%] items-center">
              <View className="w-16 h-16 bg-gray-50 rounded-2xl items-center justify-center mb-2">
                <MoreHorizontal size={32} color="#6B7280" />
              </View>
              <Text className="text-xs text-gray-700 text-center">More</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Products Section */}
        <View className="px-5 pb-6">
          <Text className="text-lg font-bold text-gray-900 mb-4">Products</Text>

          {/* Empty State */}
          <Card className="border-dashed border-2 border-gray-300">
            <CardContent className="py-12 items-center">
              <View className="w-24 h-24 bg-blue-100 rounded-2xl items-center justify-center mb-4">
                <ShoppingBag size={48} color="#3B82F6" />
              </View>
              <Text className="text-lg font-bold text-gray-900 mb-2">
                No Product Available.
              </Text>
              <Text className="text-sm text-gray-600">
                Looks like this section is empty
              </Text>
            </CardContent>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});

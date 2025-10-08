import * as Clipboard from "expo-clipboard";
import { router } from "expo-router";
import { ArrowLeft, Copy } from "lucide-react-native";
import {
  Alert,
  Image,
  Share,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useGetReferrals,
  useGetUserReferralStats,
} from "../queries/referral.queries";

export const ReferralLayout = () => {
  const ReferralsQuery = useGetReferrals();

  const ReferralStatsQuery = useGetUserReferralStats();

  const handleCopy = async () => {
    try {
      const referralLink = ReferralStatsQuery.data?.referralLink || "";

      if (!referralLink) {
        Alert.alert("Error", "No referral link available");
        return;
      }

      await Clipboard.setStringAsync(referralLink);

      // Show success feedback
      Alert.alert("Success", "Referral link copied to clipboard!");

      // Alternative: if you're using a toast library like react-native-toast-message
      // Toast.show({
      //   type: 'success',
      //   text1: 'Copied!',
      //   text2: 'Referral link copied to clipboard'
      // });
    } catch (error) {
      Alert.alert("Error", "Failed to copy referral link");
      console.error("Copy error:", error);
    }
  };

  //   handle Sharing
  const shareLink = async () => {
    try {
      const result = await Share.share({
        message: `Use My referral Link to join Cosmic Forge Healthnet and stand a chance to win prizes ${ReferralStatsQuery.data.referralLink}`,
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          Alert.alert("Shared with activity type", result.activityType);
        } else {
          Alert.alert("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        Alert.alert("Shared dismissed");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <SafeAreaView className="bg-primary">
      <View className="px-4 pb-6">
        {/* Header with back button and title */}
        <View className="flex flex-row items-center justify-center relative py-4">
          <TouchableOpacity
            className="absolute left-0"
            onPress={() => router.back()}
          >
            <ArrowLeft color="white" size={24} />
          </TouchableOpacity>

          <Text className="text-white font-bold text-lg">Invite Friends</Text>
        </View>

        {/* Main content */}
        <View className="items-center justify-center w-full mt-4">
          {/* Image placeholder */}
          <View className="w-[280px] h-[280px] rounded-2xl items-center justify-center mb-6">
            <Image
              className="w-[300px] h-[300px]"
              resizeMode="contain"
              source={require("../../../assets/images/referral/ReferralMegaPhone.png")}
            />
          </View>

          {/* Heading */}
          <Text className="text-white text-2xl font-bold text-center mb-8">
            Refer and earn money!
          </Text>

          {/* Input and Share button */}
          <View className="w-full px-2">
            {/* Referral Link Input with Copy Icon */}
            <View className="relative mb-4">
              <TextInput
                editable={false}
                className="text-white bg-white/20 rounded-lg px-4 py-4 pr-12 w-full"
                value={
                  ReferralStatsQuery.data &&
                  ReferralStatsQuery.data.referralLink
                }
                placeholder="Your referral link"
                placeholderTextColor="rgba(255,255,255,0.5)"
              />
              <TouchableOpacity
                onPress={handleCopy}
                className="absolute right-3 top-0 bottom-0 justify-center"
              >
                <Copy color="white" size={20} />
              </TouchableOpacity>
            </View>

            {/* Share Button */}
            <TouchableOpacity
              onPress={shareLink}
              className="bg-white rounded-lg items-center justify-center py-4 w-full"
            >
              <Text className="text-primary font-semibold text-base">
                Share Link
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

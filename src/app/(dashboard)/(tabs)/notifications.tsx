import { Image } from "expo-image";
import { Platform, StyleSheet, Text, View } from "react-native";

import { ExternalLink } from "@/src/shared/components/external-link";
import { Collapsible } from "@/src/shared/components/ui/collapsible";
import { Fonts } from "@/src/shared/constants/theme";

// Just a dummy component
export default function TabTwoScreen() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text
          style={{
            fontFamily: Fonts.rounded,
          }}
        >
          Explore
        </Text>
      </View>
      <Text>This app includes example code to help you get started.</Text>
      <Collapsible title="File-based routing">
        <Text>
          This app has two screens: <Text>app/(tabs)/index.tsx</Text> and{" "}
          <Text>app/(tabs)/explore.tsx</Text>
        </Text>
        <Text>
          The layout file in <Text>app/(tabs)/_layout.tsx</Text> sets up the tab
          navigator.
        </Text>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <Text>Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <Text>
          You can open this project on Android, iOS, and the web. To open the
          web version, press <Text>w</Text> in the terminal running this
          project.
        </Text>
      </Collapsible>
      <Collapsible title="Images">
        <Text>
          For static images, you can use the <Text>@2x</Text> and{" "}
          <Text>@3x</Text> suffixes to provide files for different screen
          densities
        </Text>
        <Image
          source={require("@/src/assets/images/react-logo.png")}
          style={{ width: 100, height: 100, alignSelf: "center" }}
        />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <Text>Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Light and dark mode components">
        <Text>
          This template has light and dark mode support. The{" "}
          <Text>useColorScheme()</Text> hook lets you inspect what the
          user&apos;s current color scheme is, and so you can adjust UI colors
          accordingly.
        </Text>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <Text>Learn more</Text>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Animations">
        <Text>
          This template includes an example of an animated component. The{" "}
          <Text>components/HelloWave.tsx</Text> component uses the powerful{" "}
          <Text style={{ fontFamily: Fonts.mono }}>
            react-native-reanimated
          </Text>{" "}
          library to create a waving hand animation.
        </Text>
        {Platform.select({
          ios: (
            <Text>
              The <Text>components/ParallaxScrollView.tsx</Text> component
              provides a parallax effect for the header image.
            </Text>
          ),
        })}
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});

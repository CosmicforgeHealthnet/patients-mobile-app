import React, { useState } from "react";
import {
  Image,
  ImageStyle,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";

// Avatar Root Component
interface AvatarProps {
  size?: number;
  style?: ViewStyle;
  children: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = 40,
  style,
  children,
}) => {
  return (
    <View
      style={[
        styles.avatarContainer,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

// Avatar Image Component
interface AvatarImageProps {
  source: { uri: string } | number;
  alt?: string;
  style?: ImageStyle;
  onError?: () => void;
}

export const AvatarImage: React.FC<AvatarImageProps> = ({
  source,
  alt,
  style,
  onError,
}) => {
  const [imageError, setImageError] = useState(false);

  const handleError = () => {
    setImageError(true);
    onError?.();
  };

  if (imageError) {
    return null;
  }

  return (
    <Image
      source={source}
      style={[styles.avatarImage, style]}
      onError={handleError}
      accessibilityLabel={alt}
    />
  );
};

// Avatar Fallback Component
interface AvatarFallbackProps {
  children: React.ReactNode;
  style?: ViewStyle;
  textStyle?: TextStyle;
  backgroundColor?: string;
  className?: string;
}

export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  children,
  style,
  textStyle,
  className,
  //   backgroundColor = "#272ea7",
}) => {
  // Function to get initials from text
  const getInitials = (text: string): string => {
    const words = text.trim().split(/\s+/);
    if (words.length === 1) {
      return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
  };

  const renderContent = () => {
    if (typeof children === "string") {
      return (
        <Text style={[styles.fallbackText, textStyle]}>
          {getInitials(children)}
        </Text>
      );
    }
    return children;
  };

  return (
    <View className={className} style={[styles.fallback, {}, style]}>
      {renderContent()}
    </View>
  );
};

// Avatar Group Component (for stacked avatars)
interface AvatarGroupProps {
  children: React.ReactNode[];
  max?: number;
  spacing?: number;
  size?: number;
}

export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  children,
  max = 3,
  spacing = -10,
  size = 40,
}) => {
  const avatars = React.Children.toArray(children).slice(0, max);
  const remaining = React.Children.count(children) - max;

  return (
    <View style={styles.avatarGroup}>
      {avatars.map((child, index) => (
        <View
          key={index}
          style={[
            styles.groupedAvatar,
            {
              marginLeft: index > 0 ? spacing : 0,
              zIndex: avatars.length - index,
            },
          ]}
        >
          {React.cloneElement(child as React.ReactElement, { size })}
        </View>
      ))}
      {remaining > 0 && (
        <Avatar size={size} style={{ marginLeft: spacing, zIndex: 0 }}>
          <AvatarFallback backgroundColor="#666666">
            <Text style={styles.fallbackText}>+{remaining}</Text>
          </AvatarFallback>
        </Avatar>
      )}
    </View>
  );
};

// Avatar with Badge Component
interface AvatarWithBadgeProps {
  size?: number;
  badgeColor?: string;
  badgeSize?: number;
  badgePosition?: "top-right" | "bottom-right" | "top-left" | "bottom-left";
  children: React.ReactNode;
}

export const AvatarWithBadge: React.FC<AvatarWithBadgeProps> = ({
  size = 40,
  badgeColor = "#10B981",
  badgeSize = 12,
  badgePosition = "bottom-right",
  children,
}) => {
  const getBadgePosition = () => {
    const offset = badgeSize / 4;
    switch (badgePosition) {
      case "top-right":
        return { top: offset, right: offset };
      case "top-left":
        return { top: offset, left: offset };
      case "bottom-left":
        return { bottom: offset, left: offset };
      case "bottom-right":
      default:
        return { bottom: offset, right: offset };
    }
  };

  return (
    <View style={{ position: "relative" }}>
      <Avatar size={size}>{children}</Avatar>
      <View
        style={[
          styles.badge,
          {
            width: badgeSize,
            height: badgeSize,
            borderRadius: badgeSize / 2,
            backgroundColor: badgeColor,
            ...getBadgePosition(),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    overflow: "hidden",
    backgroundColor: "#E5E7EB",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  fallback: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  avatarGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  groupedAvatar: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    borderRadius: 999,
  },
  badge: {
    position: "absolute",
    borderWidth: 2,
    borderColor: "#FFFFFF",
  },
});

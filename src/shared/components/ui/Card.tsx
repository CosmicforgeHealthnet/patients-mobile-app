import React from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";

// Card Root Component
export type CardProps = ViewProps & {
  className?: string;
};

export const Card = React.forwardRef<View, CardProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <View
        ref={ref}
        className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
        {...props}
      />
    );
  }
);

Card.displayName = "Card";

// Card Header Component
export type CardHeaderProps = ViewProps & {
  className?: string;
};

export const CardHeader = React.forwardRef<View, CardHeaderProps>(
  ({ className = "", ...props }, ref) => {
    return <View ref={ref} className={`p-6 ${className}`} {...props} />;
  }
);

CardHeader.displayName = "CardHeader";

// Card Title Component
export type CardTitleProps = TextProps & {
  className?: string;
};

export const CardTitle = React.forwardRef<Text, CardTitleProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={`text-xl font-semibold text-gray-900 ${className}`}
        {...props}
      />
    );
  }
);

CardTitle.displayName = "CardTitle";

// Card Description Component
export type CardDescriptionProps = TextProps & {
  className?: string;
};

export const CardDescription = React.forwardRef<Text, CardDescriptionProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <Text
        ref={ref}
        className={`text-sm text-gray-600 mt-1 ${className}`}
        {...props}
      />
    );
  }
);

CardDescription.displayName = "CardDescription";

// Card Content Component
export type CardContentProps = ViewProps & {
  className?: string;
};

export const CardContent = React.forwardRef<View, CardContentProps>(
  ({ className = "", ...props }, ref) => {
    return <View ref={ref} className={`px-6 pb-6 ${className}`} {...props} />;
  }
);

CardContent.displayName = "CardContent";

// Card Footer Component
export type CardFooterProps = ViewProps & {
  className?: string;
};

export const CardFooter = React.forwardRef<View, CardFooterProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <View ref={ref} className={`px-6 pb-6 pt-0 ${className}`} {...props} />
    );
  }
);

CardFooter.displayName = "CardFooter";

// Pressable Card (for clickable cards)
export type CardPressableProps = TouchableOpacityProps & {
  className?: string;
};

export const CardPressable = React.forwardRef<CardPressableProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        activeOpacity={0.7}
        className={`bg-white rounded-xl border border-gray-200 shadow-sm ${className}`}
        {...props}
      />
    );
  }
);

CardPressable.displayName = "CardPressable";

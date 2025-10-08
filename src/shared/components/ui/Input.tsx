import { LucideIcon } from "lucide-react-native";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";

export type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onRightIconPress?: () => void;
  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  disabled?: boolean;
  iconSize?: number;
  iconColor?: string;
};

export const Input = React.forwardRef<TextInput, InputProps>(
  (
    {
      label,
      error,
      leftIcon: LeftIcon,
      rightIcon: RightIcon,
      onRightIconPress,
      containerClassName = "",
      inputClassName = "",
      labelClassName = "",
      errorClassName = "",
      disabled = false,
      iconSize = 20,
      iconColor,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);

    // Determine icon color based on state
    const getIconColor = () => {
      if (iconColor) return iconColor;
      if (error) return "#EF4444";
      if (isFocused) return "#3B82F6";
      return "#9CA3AF";
    };

    return (
      <View className={`w-full ${containerClassName}`}>
        {/* Label */}
        {label && (
          <Text
            className={`mb-2 text-sm font-medium text-gray-700 ${labelClassName}`}
          >
            {label}
          </Text>
        )}

        {/* Input Container */}
        <View
          className={`flex-row items-center border rounded-lg bg-gray-200 ${
            error
              ? "border-red-500"
              : isFocused
                ? "border-blue-500"
                : "border-gray-200 "
          } ${disabled ? "opacity-50 bg-gray-100 " : ""}`}
        >
          {/* Left Icon */}
          {LeftIcon && (
            <View className="pl-3 bg-transparent">
              <LeftIcon size={iconSize} color={getIconColor()} />
            </View>
          )}

          {/* Text Input */}
          <TextInput
            ref={ref}
            className={`flex-1 px-3 py-3 text-base text-gray-900 dark:text-white ${
              LeftIcon ? "pl-2" : ""
            } ${RightIcon ? "pr-2" : ""} ${inputClassName}`}
            placeholderTextColor="#9CA3AF"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            editable={!disabled}
            {...props}
          />

          {/* Right Icon */}
          {RightIcon && (
            <TouchableOpacity
              onPress={onRightIconPress}
              disabled={!onRightIconPress}
              className="pr-3"
              activeOpacity={onRightIconPress ? 0.7 : 1}
            >
              <RightIcon size={iconSize} color={getIconColor()} />
            </TouchableOpacity>
          )}
        </View>

        {/* Error Message */}
        {error && (
          <Text className={`mt-1 text-xs text-red-500 ${errorClassName}`}>
            {error}
          </Text>
        )}
      </View>
    );
  }
);

Input.displayName = "Input";

// Password Input Variant
export const PasswordInput = React.forwardRef<
  TextInput,
  Omit<InputProps, "rightIcon" | "onRightIconPress" | "secureTextEntry">
>((props, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const { Eye, EyeOff } = require("lucide-react-native");

  return (
    <Input
      ref={ref}
      {...props}
      secureTextEntry={!showPassword}
      rightIcon={showPassword ? EyeOff : Eye}
      onRightIconPress={() => setShowPassword(!showPassword)}
    />
  );
});

PasswordInput.displayName = "PasswordInput";

// Search Input Variant
export const SearchInput = React.forwardRef<
  TextInput,
  Omit<InputProps, "leftIcon">
>((props, ref) => {
  const { Search } = require("lucide-react-native");

  return (
    <Input ref={ref} leftIcon={Search} placeholder="Search..." {...props} />
  );
});

SearchInput.displayName = "SearchInput";

// Email Input Variant
export const EmailInput = React.forwardRef<
  TextInput,
  Omit<InputProps, "leftIcon" | "keyboardType" | "autoCapitalize">
>((props, ref) => {
  const { Mail } = require("lucide-react-native");

  return (
    <Input
      ref={ref}
      leftIcon={Mail}
      placeholder="Email"
      keyboardType="email-address"
      autoCapitalize="none"
      {...props}
    />
  );
});

EmailInput.displayName = "EmailInput";

// Phone Input Variant
export const PhoneInput = React.forwardRef<
  TextInput,
  Omit<InputProps, "leftIcon" | "keyboardType">
>((props, ref) => {
  const { Phone } = require("lucide-react-native");

  return (
    <Input
      ref={ref}
      leftIcon={Phone}
      placeholder="Phone number"
      keyboardType="phone-pad"
      {...props}
    />
  );
});

PhoneInput.displayName = "PhoneInput";

// OTP Input Component
interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  containerClassName?: string;
}

export const OTPInput: React.FC<OTPInputProps> = ({
  length = 6,
  value,
  onChange,
  error,
  containerClassName = "",
}) => {
  const inputs = React.useRef<Array<TextInput | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const handleChange = (text: string, index: number) => {
    const newValue = value.split("");
    newValue[index] = text;
    onChange(newValue.join(""));

    // Auto focus next input
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !value[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className={containerClassName}>
      <View className="flex-row justify-between gap-2">
        {Array.from({ length }).map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputs.current[index] = ref)}
            className={`w-12 h-12 text-center text-xl font-semibold rounded-lg border ${
              error
                ? "border-red-500 bg-red-50"
                : focusedIndex === index
                  ? "border-blue-500 bg-white"
                  : "border-gray-300 bg-white"
            }`}
            value={value[index] || ""}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            keyboardType="number-pad"
            maxLength={1}
            selectTextOnFocus
          />
        ))}
      </View>
      {error && (
        <Text className="mt-2 text-xs text-red-500 text-center">{error}</Text>
      )}
    </View>
  );
};

// Form Input

interface FormInputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onRightIconPress?: () => void;
  containerClassName?: string;
}

export function FormInput({
  label,
  error,
  icon,
  rightIcon,
  onRightIconPress,
  containerClassName = "",
  className = "",
  ...props
}: FormInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`mb-md ${containerClassName}`}>
      {label && (
        <Text className="text-base font-poppins text-text mb-xs">{label}</Text>
      )}

      <View
        className={`flex-row items-center bg-surface border rounded-[18px] px-md py-md ${
          error
            ? "border-error"
            : isFocused
              ? "border-primary"
              : "border-borderLight"
        }`}
      >
        {icon && <View className="mr-sm">{icon}</View>}

        <TextInput
          className={`flex-1 text-base font-poppins-medium text-text py-xs ${className}`}
          placeholderTextColor="#9CA3AF"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />

        {rightIcon && (
          <TouchableOpacity onPress={onRightIconPress} className="ml-sm">
            {rightIcon}
          </TouchableOpacity>
        )}
      </View>

      {error && (
        <Text className="text-xs font-supreme text-error mt-xs">{error}</Text>
      )}
    </View>
  );
}

// src/features/authentication/hooks/useLogin.ts
import { storage } from "@/src/core/storage";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert } from "react-native";
import { authService } from "../services/authService";
import { LoginFormData, LoginFormErrors } from "../types";
import { validateLoginForm } from "../utils/validation";

const initialFormData: LoginFormData = {
  email: "",
  password: "",
  deviceFingerprint: "",
  rememberMe: false,
};

export const useLogin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>(initialFormData);
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const getDeviceFingerPrint = async (): Promise<any> => {
    return "Hi, John Doe";
  };

  const updateField = <K extends keyof LoginFormData>(
    field: K,
    value: LoginFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleLogin = async () => {
    try {
      // Validate form
      const validationErrors = validateLoginForm(formData);

      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }

      setLoading(true);
      setErrors({});

      // Call login API
      const response = await authService.login({
        email: formData.email,
        password: formData.password,
        deviceFingerprint: "12345",
      });

      console.log(response);

      // Store auth data
      await storage.setToken(response.accessToken);
      await storage.setRefreshToken(response.refreshToken);
      await storage.setUserData(response.payload);

      // Store remember me preference
      if (formData.rememberMe) {
        await storage.setItem("@remember_email", formData.email);
      } else {
        await storage.removeItem("@remember_email");
      }

      // Navigate to main app
      router.replace("/(tabs)");
    } catch (error: any) {
      console.error("Login error:", error);

      // Handle specific error messages from API
      if (error.statusCode === 401) {
        setErrors({
          email: "Invalid email or password",
          password: "Invalid email or password",
        });
      } else if (error.message?.toLowerCase().includes("email")) {
        setErrors({ email: error.message });
      } else if (error.message?.toLowerCase().includes("password")) {
        setErrors({ password: error.message });
      } else {
        Alert.alert(
          "Login Failed",
          error.message || "Unable to login. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const navigateToSignup = () => {
    router.push("/(auth)/register");
  };

  const navigateToForgotPassword = () => {
    router.push("/(auth)/forgot-password");
  };

  const loadRememberedEmail = async () => {
    try {
      const rememberedEmail = await storage.getItem<string>("@remember_email");
      if (rememberedEmail) {
        setFormData((prev) => ({
          ...prev,
          email: rememberedEmail,
          rememberMe: true,
        }));
      }
    } catch (error) {
      console.error("Error loading remembered email:", error);
    }
  };

  return {
    // State
    formData,
    errors,
    loading,
    showPassword,

    // Actions
    updateField,
    setShowPassword,
    handleLogin,
    navigateToSignup,
    navigateToForgotPassword,
    loadRememberedEmail,
    getDeviceFingerPrint,
  };
};

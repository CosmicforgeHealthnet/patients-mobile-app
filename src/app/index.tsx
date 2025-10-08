import { Redirect } from "expo-router";
import { useEffect } from "react";
import { initializeDatabase } from "../core/db/setup";
import "../global.css";

export default function HomeScreen() {
  //   const { isAuthenticated } = useAuth();
  useEffect(() => {
    initializeDatabase();
  }, []);

  const isAuthenticated = true;
  if (isAuthenticated) {
    return <Redirect href="/(dashboard)/(tabs)" />;
  }

  return <Redirect href="/onboarding" />; // intially was redirection to href=""
}

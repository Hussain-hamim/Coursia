import { useEffect, useState } from 'react';
import { Stack, useRouter, useSegments } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  useFrameworkReady();
  const [isReady, setIsReady] = useState(false);
  const [initialRoute, setInitialRoute] = useState<string | null>(null);
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    const checkAuthState = async () => {
      try {
        // Always show onboarding first every time app opens
        setInitialRoute('(onboarding)');
      } catch (error) {
        console.error('Error checking auth state:', error);
        setInitialRoute('(onboarding)');
      } finally {
        setIsReady(true);
      }
    };

    checkAuthState();
  }, []);

  useEffect(() => {
    if (!isReady || !initialRoute) return;

    const inTabsGroup = segments[0] === '(tabs)';
    const inAuthGroup = segments[0] === '(auth)';
    const inOnboardingGroup = segments[0] === '(onboarding)';

    // Only redirect on initial load, not when user navigates
    if (initialRoute === '(onboarding)' && !inOnboardingGroup && !inAuthGroup && !inTabsGroup) {
      router.replace('/(onboarding)');
    }
  }, [isReady, initialRoute]);

  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#7c6ff5" />
      </View>
    );
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(onboarding)" />
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="notification" />
        <Stack.Screen name="notifications" />
        <Stack.Screen name="my-courses" />
        <Stack.Screen name="cart" />
        <Stack.Screen name="course-details" />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="light" backgroundColor="#7c6ff5" />
    </>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});

import { useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useSession } from '@/hooks/useSession';
import { ActivityIndicator, View } from 'react-native';
import { Layout } from '@/constants/Theme';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { session, loading } = useSession();
  const segments = useSegments();
  const router = useRouter();

  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': 'https://rsms.me/inter/font-files/Inter-Regular.otf?v=3.19',
    'Inter-Bold': 'https://rsms.me/inter/font-files/Inter-Bold.otf?v=3.19',
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    if (loading) return;

    const inAuthGroup = segments[0] === '(auth)';

    if (session && inAuthGroup) {
      router.replace('/(tabs)');
    } else if (!session && !inAuthGroup) {
      router.replace('/(auth)');
    }
  }, [session, loading, segments, router]);

  if (!fontsLoaded || fontError || loading) {
    return (
      <View style={Layout.centered}>
        <ActivityIndicator color="#FF4D67" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="dark" />
      <Slot />
    </>
  );
}

import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Typography, Layout, Gutters } from '@/constants/Theme';
import { AppButton } from '@/components/ui/AppButton';
import { PixlifyLogo } from '@/components/ui/PixlifyLogo';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={Layout.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <PixlifyLogo size={64} />
          <Text style={[Typography.h1, { marginTop: Gutters.padding }]}>Pixlify</Text>
          <Text style={Typography.body}>Welcome! Let's dive into your account!</Text>
        </View>
        <View style={styles.footer}>
          <AppButton title="Sign in with password" onPress={() => router.push('/(auth)/login')} />
          <View style={styles.signupContainer}>
            <Text style={Typography.body}>Don't have an account? </Text>
            <Text onPress={() => router.push('/(auth)/signup')} style={styles.link}>
              Sign up
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: Gutters.padding,
  },
  header: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    paddingBottom: Gutters.padding,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  link: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

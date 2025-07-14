import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { AppInput } from '@/components/ui/AppInput';
import { AppButton } from '@/components/ui/AppButton';
import { Colors } from '@/constants/Colors';
import { Layout, Typography, Gutters } from '@/constants/Theme';

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        // In a real app, you'd use a deep link
        emailRedirectTo: 'exp://127.0.0.1:8081',
      },
    });
    if (error) {
      Alert.alert('Sign Up Error', error.message);
    } else {
      Alert.alert('Check your email!', 'A confirmation link has been sent to your email to verify your account.');
      router.push('/(auth)/login');
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={Layout.container}>
      <Stack.Screen options={{ headerShown: true, headerTitle: '', headerShadowVisible: false }} />
      <View style={styles.content}>
        <Text style={Typography.h1}>Hello there 👋</Text>
        <Text style={Typography.body}>Please enter your email & password to create an account.</Text>

        <View style={styles.form}>
          <AppInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <AppInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            isPassword
          />
        </View>

        <AppButton title="Sign up" onPress={handleSignUp} loading={loading} />

        <View style={styles.footer}>
          <Text style={Typography.body}>Already have an account? </Text>
          <Text onPress={() => router.replace('/(auth)/login')} style={styles.link}>
            Sign in
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: Gutters.padding,
  },
  form: {
    marginVertical: Gutters.margin,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Gutters.margin,
  },
  link: {
    color: Colors.primary,
    fontWeight: 'bold',
  },
});

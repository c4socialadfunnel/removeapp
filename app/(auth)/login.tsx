import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { useRouter, Stack } from 'expo-router';
import { supabase } from '@/lib/supabase';
import { AppInput } from '@/components/ui/AppInput';
import { AppButton } from '@/components/ui/AppButton';
import { Colors } from '@/constants/Colors';
import { Layout, Typography, Gutters } from '@/constants/Theme';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) Alert.alert('Login Error', error.message);
    // The root layout will handle redirection on success
    setLoading(false);
  };

  return (
    <SafeAreaView style={Layout.container}>
      <Stack.Screen options={{ headerShown: true, headerTitle: '', headerShadowVisible: false }} />
      <View style={styles.content}>
        <Text style={Typography.h1}>Welcome back 👋</Text>
        <Text style={Typography.body}>Please enter your email & password to sign in.</Text>

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
          <TouchableOpacity onPress={() => Alert.alert("Forgot Password", "Password reset functionality coming soon!")}>
            <Text style={styles.forgotPassword}>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <AppButton title="Sign in" onPress={handleLogin} loading={loading} />
        
        <View style={styles.footer}>
          <Text style={Typography.body}>Don't have an account? </Text>
          <Text onPress={() => router.replace('/(auth)/signup')} style={styles.link}>
            Sign up
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
  forgotPassword: {
    color: Colors.primary,
    fontWeight: '600',
    textAlign: 'right',
    marginBottom: Gutters.margin,
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

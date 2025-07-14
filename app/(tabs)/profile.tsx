import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { supabase } from '@/lib/supabase';
import { useAuthStore } from '@/store/authStore';
import { Layout, Typography, Gutters } from '@/constants/Theme';
import { Colors } from '@/constants/Colors';
import { ChevronRight, LogOut, User, Shield } from 'lucide-react-native';

const ProfileMenuItem = ({ label, icon: Icon, onPress }: { label: string, icon: React.ElementType, onPress: () => void }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Icon color={Colors.textSecondary} size={24} />
    <Text style={styles.menuItemText}>{label}</Text>
    <ChevronRight color={Colors.textSecondary} size={24} />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  const { user } = useAuthStore();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) Alert.alert('Error', error.message);
  };

  return (
    <SafeAreaView style={Layout.container}>
      <View style={styles.header}>
        <Text style={Typography.h1}>Account</Text>
      </View>
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user?.email?.[0].toUpperCase()}</Text>
        </View>
        <Text style={Typography.h2}>{user?.email}</Text>
        <Text style={Typography.body}>Free Plan</Text>
      </View>
      <View style={styles.menu}>
        <ProfileMenuItem label="Edit Profile" icon={User} onPress={() => Alert.alert("Coming Soon!")} />
        <ProfileMenuItem label="Privacy Policy" icon={Shield} onPress={() => Alert.alert("Coming Soon!")} />
        <ProfileMenuItem label="Log Out" icon={LogOut} onPress={handleSignOut} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: Gutters.padding / 2,
  },
  profileCard: {
    alignItems: 'center',
    padding: Gutters.padding,
    backgroundColor: Colors.surface,
    borderRadius: Gutters.radius,
    marginBottom: Gutters.margin,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarText: {
    color: Colors.white,
    fontSize: 32,
    fontWeight: 'bold',
  },
  menu: {
    backgroundColor: Colors.surface,
    borderRadius: Gutters.radius,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  menuItemText: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: Colors.text,
  },
});

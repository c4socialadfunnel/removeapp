import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity } from 'react-native';
import { Layout, Typography, Gutters } from '@/constants/Theme';
import { Colors } from '@/constants/Colors';
import { ChevronRight, Wand2, UserSquare, Eraser } from 'lucide-react-native';
import { useRouter } from 'expo-router';

const tools = [
  { id: '1', name: 'AI Avatar Generator', description: 'Create a custom avatar from a single photo', icon: UserSquare, screen: '/remove' },
  { id: '2', name: 'AI Background Remover', description: 'Remove background from any image', icon: Wand2, screen: '/remove' },
  { id: '3', name: 'AI Magic Eraser', description: 'Remove unwanted objects from your photos', icon: Eraser, screen: '/remove' },
];

export default function ToolboxScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={Layout.container}>
      <View style={styles.header}>
        <Text style={Typography.h1}>AI Toolbox</Text>
      </View>
      <FlatList
        data={tools}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.toolCard} onPress={() => router.push(item.screen as any)}>
            <View style={styles.iconContainer}>
              <item.icon color={Colors.primary} size={24} />
            </View>
            <View style={styles.textContainer}>
              <Text style={Typography.h2}>{item.name}</Text>
              <Text style={Typography.body}>{item.description}</Text>
            </View>
            <ChevronRight color={Colors.textSecondary} />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: Gutters.padding / 2,
  },
  toolCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: Gutters.padding / 1.5,
    borderRadius: Gutters.radius,
    marginBottom: 16,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  textContainer: {
    flex: 1,
  },
});

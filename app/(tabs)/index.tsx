import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Layout, Typography, Gutters } from '@/constants/Theme';
import { Colors } from '@/constants/Colors';
import { AppButton } from '@/components/ui/AppButton';
import { useRouter } from 'expo-router';

const mockImages = [
  { id: '1', url: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '2', url: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '3', url: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '4', url: 'https://images.pexels.com/photos/1528640/pexels-photo-1528640.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '5', url: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800' },
  { id: '6', url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const { width } = Dimensions.get('window');
const imageSize = (width - Gutters.padding * 2 - 8) / 2; // 2 columns, 8px gap

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={Layout.container}>
      <View style={styles.header}>
        <Text style={Typography.h1}>Home</Text>
      </View>
      <FlatList
        data={mockImages}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={
          <View style={styles.banner}>
            <Text style={Typography.h2}>AI Toolbox</Text>
            <Text style={Typography.body}>Unleash your creativity and try our AI Toolbox now!</Text>
            <AppButton title="Try Now" onPress={() => router.push('/(tabs)/toolbox')} style={{marginTop: 16}} />
          </View>
        }
        ListHeaderComponentStyle={{marginBottom: Gutters.margin}}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
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
  banner: {
    backgroundColor: Colors.surface,
    padding: Gutters.padding,
    borderRadius: Gutters.radius,
  },
  imageContainer: {
    width: imageSize,
    height: imageSize * 1.25,
    borderRadius: Gutters.radius,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

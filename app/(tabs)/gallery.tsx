import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList, Image, Dimensions } from 'react-native';
import { Layout, Typography, Gutters } from '@/constants/Theme';

const mockImages = [
  { id: '1', url: 'https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '2', url: 'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '3', url: 'https://images.pexels.com/photos/2422915/pexels-photo-2422915.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '4', url: 'https://images.pexels.com/photos/1528640/pexels-photo-1528640.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { id: '5', url: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800' },
  { id: '6', url: 'https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

const { width } = Dimensions.get('window');
const imageSize = (width - Gutters.padding * 3) / 2;

export default function GalleryScreen() {
  return (
    <SafeAreaView style={Layout.container}>
      <View style={styles.header}>
        <Text style={Typography.h1}>Your Gallery</Text>
        <Text style={Typography.body}>All your processed images.</Text>
      </View>
      <FlatList
        data={mockImages}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: Gutters.padding,
  },
  list: {
    paddingHorizontal: Gutters.padding,
  },
  imageContainer: {
    width: imageSize,
    height: imageSize,
    margin: Gutters.padding / 2,
    borderRadius: Gutters.radius,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

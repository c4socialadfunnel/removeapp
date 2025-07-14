import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator, Alert, SafeAreaView, TouchableOpacity } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import { AppButton } from '@/components/ui/AppButton';
import { Layout, Typography, Gutters } from '@/constants/Theme';
import { Colors } from '@/constants/Colors';
import { UploadCloud } from 'lucide-react-native';

export default function RemoveBackgroundScreen() {
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRemoveBackground = async () => {
    if (!image) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Alert.alert('Success!', 'Background removed. In a real app, you would see the result here.');
      setImage(null);
    }, 2000);
  };

  return (
    <SafeAreaView style={[Layout.container, styles.container]}>
      <Stack.Screen options={{ title: 'AI Background Remover', headerShadowVisible: false }} />
      
      <View style={styles.content}>
        <View style={styles.imagePreview}>
          {image ? (
            <Image source={{ uri: image }} style={styles.image} />
          ) : (
            <TouchableOpacity onPress={pickImage} style={styles.placeholder}>
              <UploadCloud size={48} color={Colors.textSecondary} />
              <Text style={styles.placeholderText}>Tap to upload an image</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.footer}>
        <AppButton 
          title={image ? "Remove Background" : "Choose Image"}
          onPress={image ? handleRemoveBackground : pickImage}
          disabled={isLoading}
          loading={isLoading}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  imagePreview: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: Colors.surface,
    borderRadius: Gutters.radius,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  placeholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    ...Typography.body,
    marginTop: 8,
  },
  footer: {
    paddingVertical: Gutters.padding,
  }
});

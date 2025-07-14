import { TextStyle, ViewStyle } from 'react-native';
import { Colors } from './Colors';

export const Gutters = {
  padding: 24,
  margin: 24,
  radius: 16,
};

export const Typography: Record<string, TextStyle> = {
  h1: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.text,
    lineHeight: 36,
  },
  h2: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.text,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  label: {
    fontSize: 14,
    color: Colors.text,
    fontWeight: '500',
  },
};

export const Layout: Record<string, ViewStyle> = {
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Gutters.padding,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
};

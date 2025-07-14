import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { Colors } from '@/constants/Colors';

export function PixlifyLogo({ size = 48 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <Path d="M24 0H48V24H24V0Z" fill={Colors.primary} />
      <Path d="M0 24H24V48H0V24Z" fill={Colors.primary} fillOpacity="0.6" />
    </Svg>
  );
}

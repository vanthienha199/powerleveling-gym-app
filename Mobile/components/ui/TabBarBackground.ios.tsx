

import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function BlurTabBarBackground() {
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  );
}

export function useBottomTabOverflow() {
  let tabHeight = 0;
  try {
    tabHeight =
      Platform.OS === 'ios' ? useBottomTabBarHeight?.() ?? 0 : 0;
  } catch (e) {
    tabHeight = 0;
  }
  const { bottom } = useSafeAreaInsets();
  return tabHeight - bottom;
}

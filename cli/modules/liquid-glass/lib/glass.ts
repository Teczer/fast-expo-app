import { Platform } from 'react-native';
import { isLiquidGlassAvailable } from 'expo-glass-effect';

/**
 * Liquid Glass (iOS 26+) is only available on iOS. On Android or older iOS
 * versions the glass components render their fallback styles instead.
 */
export const isGlassEnabled = Platform.OS === 'ios' && isLiquidGlassAvailable();

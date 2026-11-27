import { type ReactNode } from 'react';
import { View, Pressable, StyleSheet, type PressableProps, type StyleProp, type ViewStyle } from 'react-native';
import { GlassView, type GlassViewProps } from 'expo-glass-effect';

import { isGlassEnabled } from '@/lib/glass';

type GlassProps = {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
  glassEffectStyle?: GlassViewProps['glassEffectStyle'];
  isInteractive?: boolean;
  colorScheme?: 'light' | 'dark';
  fallbackStyle?: StyleProp<ViewStyle>;
};

/**
 * A Liquid Glass surface (iOS 26+). Falls back to a muted translucent view
 * everywhere else, so it is safe to use on every platform.
 */
export function Glass({
  children,
  style,
  glassEffectStyle = 'regular',
  isInteractive = false,
  colorScheme,
  fallbackStyle,
}: GlassProps) {
  if (isGlassEnabled) {
    return (
      <GlassView
        style={style}
        glassEffectStyle={glassEffectStyle}
        isInteractive={isInteractive}
        colorScheme={colorScheme}
      >
        {children}
      </GlassView>
    );
  }

  return <View style={[styles.glassFallback, fallbackStyle, style]}>{children}</View>;
}

interface GlassButtonProps extends Omit<PressableProps, 'style'> {
  children: ReactNode;
  size?: number;
  pill?: boolean;
  colorScheme?: 'light' | 'dark';
  style?: StyleProp<ViewStyle>;
  fallbackStyle?: StyleProp<ViewStyle>;
}

/**
 * A circular (or pill) Liquid Glass button with a press feedback, falling
 * back to a bordered muted button when glass is not available.
 */
export function GlassButton({
  children,
  size = 44,
  pill = false,
  colorScheme,
  style,
  fallbackStyle,
  ...pressableProps
}: GlassButtonProps) {
  const buttonSize = pill
    ? { height: size, borderRadius: size / 2, paddingHorizontal: 12 }
    : { width: size, height: size, borderRadius: size / 2 };

  return (
    <Pressable
      style={({ pressed }) => [style, pressed ? styles.pressed : undefined]}
      {...pressableProps}
    >
      {isGlassEnabled ? (
        <GlassView
          style={[buttonSize, styles.center]}
          glassEffectStyle="regular"
          isInteractive
          colorScheme={colorScheme}
        >
          {children}
        </GlassView>
      ) : (
        <View style={[styles.buttonFallback, fallbackStyle, buttonSize, styles.center]}>
          {children}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  glassFallback: {
    backgroundColor: 'rgba(128, 128, 128, 0.18)',
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonFallback: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(128, 128, 128, 0.4)',
    backgroundColor: 'rgba(128, 128, 128, 0.18)',
  },
  pressed: {
    opacity: 0.7,
  },
});

export { isGlassEnabled };

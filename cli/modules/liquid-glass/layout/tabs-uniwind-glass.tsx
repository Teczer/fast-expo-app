import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { NativeTabs } from 'expo-router/native-tabs';
import { Tabs } from 'expo-router/js-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

import { ThemeToggle } from '@/components/theme-toggle';
import { useUniwindTheme } from '@/lib/use-uniwind-theme';
import { Glass, GlassButton, isGlassEnabled } from '@/components/glass';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']; color: string }) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

/** Classic JS tab bar — used on Android and iOS versions without Liquid Glass. */
function JsTabs() {
  const { colors } = useUniwindTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.mutedForeground,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
        },
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          color: colors.foreground,
        },
        headerTintColor: colors.foreground,
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={colors.foreground}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color as string} />,
          title: 'Home',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerRight: () => <ThemeToggle />,
          tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={color as string} />,
          title: 'Settings',
        }}
      />
    </Tabs>
  );
}

/** Native tab bar with the Liquid Glass material (iOS 26+). */
function GlassTabs() {
  const { colors } = useUniwindTheme();
  return (
    <NativeTabs tintColor={colors.primary}>
      <NativeTabs.Trigger name="index" disableAutomaticContentInsets>
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'house', selected: 'house.fill' }} />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings" disableAutomaticContentInsets>
        <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: 'gearshape', selected: 'gearshape.fill' }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

/**
 * Floating Liquid Glass controls (the native tab bar has no JS header, so the
 * modal link and the theme toggle live here).
 */
function GlassControls() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { colors, currentTheme } = useUniwindTheme();
  const colorScheme = currentTheme === 'light' ? 'light' : 'dark';

  return (
    <View pointerEvents="box-none" style={[styles.controls, { top: insets.top + 8 }]}>
      <GlassButton
        accessibilityLabel="Open modal"
        onPress={() => router.push('/modal')}
        colorScheme={colorScheme}
      >
        <Ionicons name="information-circle-outline" size={22} color={colors.foreground} />
      </GlassButton>
      <Glass isInteractive colorScheme={colorScheme} style={styles.togglePill}>
        <ThemeToggle />
      </Glass>
    </View>
  );
}

export default function TabLayout() {
  if (!isGlassEnabled) {
    return <JsTabs />;
  }

  return (
    <View style={styles.root}>
      <GlassTabs />
      <GlassControls />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    right: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  togglePill: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export default function ShakeEffect() {
  const offset = useSharedValue(0);

  useEffect(() => {
    offset.value = withSequence(
      withTiming(-14, { duration: 50 }),
      withTiming(12, { duration: 50 }),
      withTiming(-10, { duration: 50 }),
      withTiming(8, { duration: 50 }),
      withTiming(-5, { duration: 50 }),
      withTiming(0, { duration: 50 }),
    );
  }, [offset]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.badge, animatedStyle]}>
        <Text style={styles.text}>Invalid code. Try again.</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    width: '88%',
    maxWidth: 340,
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
    borderWidth: 1,
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  text: {
    color: '#B91C1C',
    fontSize: 14,
    fontWeight: '600',
  },
});

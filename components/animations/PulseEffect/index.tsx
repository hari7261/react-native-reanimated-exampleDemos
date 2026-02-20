import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export default function PulseEffect() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 950, easing: Easing.out(Easing.quad) }),
        withTiming(0, { duration: 950, easing: Easing.in(Easing.quad) }),
      ),
      -1,
      false,
    );
  }, [progress]);

  const ringStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 1.65]);
    const opacity = interpolate(progress.value, [0, 1], [0.22, 0]);
    return { transform: [{ scale }], opacity };
  });

  const coreStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [0.96, 1.06]);
    return { transform: [{ scale }] };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ring, ringStyle]} />
      <Animated.View style={[styles.core, coreStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 220,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ring: {
    position: 'absolute',
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: '#60A5FA',
  },
  core: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2563EB',
  },
});

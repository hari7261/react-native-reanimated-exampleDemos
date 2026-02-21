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

export default function BouncingBall() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withSequence(
        withTiming(1, {
          duration: 520,
          easing: Easing.out(Easing.cubic),
        }),
        withTiming(0, {
          duration: 520,
          easing: Easing.in(Easing.cubic),
        }),
      ),
      -1,
      false,
    );
  }, [progress]);

  const ballStyle = useAnimatedStyle(() => {
    const translateY = interpolate(progress.value, [0, 1], [0, -140]);
    const scaleX = interpolate(progress.value, [0, 0.12, 1], [1.12, 1, 1]);
    const scaleY = interpolate(progress.value, [0, 0.12, 1], [0.88, 1, 1]);

    return {
      transform: [{ translateY }, { scaleX }, { scaleY }],
    };
  });

  const shadowStyle = useAnimatedStyle(() => {
    const scale = interpolate(progress.value, [0, 1], [1, 0.58]);
    const opacity = interpolate(progress.value, [0, 1], [0.22, 0.08]);

    return {
      transform: [{ scaleX: scale }],
      opacity,
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, ballStyle]} />
      <Animated.View style={[styles.shadow, shadowStyle]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 240,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  ball: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4F46E5',
    marginBottom: 22,
  },
  shadow: {
    width: 76,
    height: 14,
    borderRadius: 8,
    backgroundColor: '#0F172A',
    marginBottom: 8,
  },
});

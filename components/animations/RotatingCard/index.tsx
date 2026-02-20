import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function RotatingCard() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 2400,
        easing: Easing.inOut(Easing.cubic),
      }),
      -1,
      true,
    );
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = `${interpolate(progress.value, [0, 1], [-18, 18])}deg`;

    return {
      transform: [{ perspective: 900 }, { rotateY }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.title}>Rotating Card</Text>
        <Text style={styles.subtitle}>3D perspective with smooth Y-axis motion</Text>
      </Animated.View>
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
  card: {
    width: '86%',
    maxWidth: 340,
    borderRadius: 18,
    backgroundColor: '#111827',
    paddingVertical: 28,
    paddingHorizontal: 20,
  },
  title: {
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 8,
    color: '#CBD5E1',
    fontSize: 14,
  },
});

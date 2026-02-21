import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export default function FadeInOut() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 900, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 900, easing: Easing.inOut(Easing.quad) }),
      ),
      -1,
      false,
    );
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const opacity = interpolate(progress.value, [0, 1], [0.4, 1]);
    const scale = interpolate(progress.value, [0, 1], [0.97, 1]);

    return {
      opacity,
      transform: [{ scale }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.title}>Connection Stable</Text>
        <Text style={styles.subtitle}>Realtime updates are active</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '88%',
    maxWidth: 340,
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 18,
    backgroundColor: '#0EA5E9',
  },
  title: {
    color: '#F8FAFC',
    fontSize: 17,
    fontWeight: '700',
  },
  subtitle: {
    marginTop: 6,
    color: '#E0F2FE',
    fontSize: 14,
  },
});

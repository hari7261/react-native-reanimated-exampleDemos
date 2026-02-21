import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function ColorMorph() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 4200,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, [progress]);

  const animatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 0.33, 0.66, 1],
      ['#38BDF8', '#34D399', '#A78BFA', '#38BDF8'],
    );

    return { backgroundColor };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.block, animatedStyle]}>
        <Text style={styles.text}>Smooth Color Morph</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    width: '86%',
    maxWidth: 340,
    borderRadius: 18,
    paddingVertical: 26,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

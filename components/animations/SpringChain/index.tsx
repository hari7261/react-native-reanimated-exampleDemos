import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
} from 'react-native-reanimated';

export default function SpringChain() {
  const dot1 = useSharedValue(0);
  const dot2 = useSharedValue(0);
  const dot3 = useSharedValue(0);
  const dot4 = useSharedValue(0);
  const dot5 = useSharedValue(0);

  useEffect(() => {
    const springConfig = {
      damping: 11,
      stiffness: 170,
      mass: 0.5,
    };

    dot1.value = withDelay(0, withRepeat(withSpring(1, springConfig), -1, true));
    dot2.value = withDelay(110, withRepeat(withSpring(1, springConfig), -1, true));
    dot3.value = withDelay(220, withRepeat(withSpring(1, springConfig), -1, true));
    dot4.value = withDelay(330, withRepeat(withSpring(1, springConfig), -1, true));
    dot5.value = withDelay(440, withRepeat(withSpring(1, springConfig), -1, true));
  }, [dot1, dot2, dot3, dot4, dot5]);

  const dotStyle1 = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(dot1.value, [0, 1], [0, -18]) }],
  }));
  const dotStyle2 = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(dot2.value, [0, 1], [0, -18]) }],
  }));
  const dotStyle3 = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(dot3.value, [0, 1], [0, -18]) }],
  }));
  const dotStyle4 = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(dot4.value, [0, 1], [0, -18]) }],
  }));
  const dotStyle5 = useAnimatedStyle(() => ({
    transform: [{ translateY: interpolate(dot5.value, [0, 1], [0, -18]) }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Animated.View style={[styles.dot, dotStyle1]} />
        <Animated.View style={[styles.dot, dotStyle2]} />
        <Animated.View style={[styles.dot, dotStyle3]} />
        <Animated.View style={[styles.dot, dotStyle4]} />
        <Animated.View style={[styles.dot, dotStyle5]} />
      </View>
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
  row: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginHorizontal: 6,
    backgroundColor: '#0EA5E9',
  },
});

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

export default function FlipCard() {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, {
        duration: 2800,
        easing: Easing.inOut(Easing.cubic),
      }),
      -1,
      false,
    );
  }, [progress]);

  const frontStyle = useAnimatedStyle(() => {
    const rotateY = `${interpolate(progress.value, [0, 0.5, 1], [0, 180, 360])}deg`;
    return {
      transform: [{ perspective: 1000 }, { rotateY }],
      opacity: interpolate(progress.value, [0, 0.24, 0.26, 0.74, 0.76, 1], [1, 1, 0, 0, 1, 1]),
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const rotateY = `${interpolate(progress.value, [0, 0.5, 1], [180, 360, 540])}deg`;
    return {
      transform: [{ perspective: 1000 }, { rotateY }],
      opacity: interpolate(progress.value, [0, 0.24, 0.26, 0.74, 0.76, 1], [0, 0, 1, 1, 0, 0]),
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.cardWrap}>
        <Animated.View style={[styles.card, styles.front, frontStyle]}>
          <Text style={styles.title}>Plan</Text>
          <Text style={styles.body}>Active subscription</Text>
        </Animated.View>
        <Animated.View style={[styles.card, styles.back, backStyle]}>
          <Text style={styles.title}>Renewal</Text>
          <Text style={styles.body}>Next billing in 12 days</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 230,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardWrap: {
    width: '84%',
    maxWidth: 330,
    height: 160,
  },
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 18,
    justifyContent: 'center',
    paddingHorizontal: 18,
    backfaceVisibility: 'hidden',
  },
  front: {
    backgroundColor: '#1D4ED8',
  },
  back: {
    backgroundColor: '#0F766E',
  },
  title: {
    color: '#F8FAFC',
    fontSize: 18,
    fontWeight: '700',
  },
  body: {
    marginTop: 8,
    color: '#E2E8F0',
    fontSize: 14,
  },
});

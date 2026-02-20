import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function SlideIn() {
  const translateX = useSharedValue(-320);

  useEffect(() => {
    translateX.value = withSpring(0, {
      damping: 14,
      stiffness: 130,
      mass: 0.9,
      overshootClamping: false,
      restDisplacementThreshold: 0.2,
      restSpeedThreshold: 0.2,
    });
  }, [translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.card, animatedStyle]}>
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Your workspace is synced and ready.</Text>
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
    overflow: 'hidden',
  },
  card: {
    width: '88%',
    maxWidth: 350,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 18,
    shadowColor: '#0F172A',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 14,
    color: '#334155',
  },
});

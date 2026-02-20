import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

export default function StaggeredList() {
  const item1 = useSharedValue(0);
  const item2 = useSharedValue(0);
  const item3 = useSharedValue(0);
  const item4 = useSharedValue(0);

  useEffect(() => {
    const config = { duration: 480, easing: Easing.out(Easing.cubic) };
    item1.value = withDelay(0, withTiming(1, config));
    item2.value = withDelay(90, withTiming(1, config));
    item3.value = withDelay(180, withTiming(1, config));
    item4.value = withDelay(270, withTiming(1, config));
  }, [item1, item2, item3, item4]);

  const itemStyle1 = useAnimatedStyle(() => ({
    opacity: item1.value,
    transform: [{ translateY: interpolate(item1.value, [0, 1], [18, 0]) }],
  }));
  const itemStyle2 = useAnimatedStyle(() => ({
    opacity: item2.value,
    transform: [{ translateY: interpolate(item2.value, [0, 1], [18, 0]) }],
  }));
  const itemStyle3 = useAnimatedStyle(() => ({
    opacity: item3.value,
    transform: [{ translateY: interpolate(item3.value, [0, 1], [18, 0]) }],
  }));
  const itemStyle4 = useAnimatedStyle(() => ({
    opacity: item4.value,
    transform: [{ translateY: interpolate(item4.value, [0, 1], [18, 0]) }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Animated.View style={[styles.item, itemStyle1]}>
          <Text style={styles.text}>Profile updated successfully</Text>
        </Animated.View>
        <Animated.View style={[styles.item, itemStyle2]}>
          <Text style={styles.text}>New device login approved</Text>
        </Animated.View>
        <Animated.View style={[styles.item, itemStyle3]}>
          <Text style={styles.text}>Weekly report generated</Text>
        </Animated.View>
        <Animated.View style={[styles.item, itemStyle4]}>
          <Text style={styles.text}>Backup completed at 09:32</Text>
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '90%',
    maxWidth: 360,
  },
  item: {
    backgroundColor: '#F8FAFC',
    borderColor: '#E2E8F0',
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  text: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: '500',
  },
});

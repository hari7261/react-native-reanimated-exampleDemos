# RotatingCard

A rectangular card rotating on the Y axis with perspective to create controlled 3D depth.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withRepeat`
- `interpolate`

## Key implementation notes
- `progress` oscillates between 0 and 1 using reverse repeat.
- Rotation angle is interpolated to a balanced range to avoid aggressive perspective distortion.
- `perspective` is included in transform for proper 3D projection.

## Start behavior
- Starts automatically on mount.
- Loops in reverse for continuous motion.

## Usage
```tsx
import RotatingCard from './components/animations/RotatingCard';

export default function DemoScreen() {
  return <RotatingCard />;
}
```

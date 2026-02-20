# FadeInOut

A compact status card that fades in and out continuously with a subtle scale shift to avoid flat opacity-only motion.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withSequence`
- `withRepeat`
- `interpolate`

## Key implementation notes
- `progress` loops from 0 to 1 and back.
- Opacity interpolates from low visibility to fully visible.
- Scale interpolation adds slight depth while maintaining legibility.

## Start behavior
- Starts automatically on mount.
- Loops indefinitely.

## Usage
```tsx
import FadeInOut from './components/animations/FadeInOut';

export default function DemoScreen() {
  return <FadeInOut />;
}
```

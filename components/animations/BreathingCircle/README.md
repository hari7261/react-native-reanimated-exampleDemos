# BreathingCircle

A calm, slow breathing animation for ambient or focus-oriented UI moments.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withSequence`
- `withRepeat`
- `interpolate`

## Key implementation notes
- A sinusoidal ease profile keeps inhale/exhale transitions smooth.
- Scale and opacity are both driven by one shared `progress` value.
- Timing is intentionally long to support non-distracting motion.

## Start behavior
- Starts automatically on mount.
- Loops continuously.

## Usage
```tsx
import BreathingCircle from './components/animations/BreathingCircle';

export default function DemoScreen() {
  return <BreathingCircle />;
}
```

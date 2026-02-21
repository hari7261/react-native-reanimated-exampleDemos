# SpringChain

A sequence of dots animated with delayed springs to form a continuous chain-like wave.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withSpring`
- `withDelay`
- `withRepeat`
- `interpolate`

## Key implementation notes
- Each dot has its own shared value for independent phase offset.
- Delays are staggered so spring oscillations propagate across the row.
- All dots use identical spring tuning for consistent motion quality.

## Start behavior
- Auto-starts on mount.
- Infinite reverse spring loop with delay offsets.

## Usage
```tsx
import SpringChain from './components/animations/SpringChain';

export default function DemoScreen() {
  return <SpringChain />;
}
```

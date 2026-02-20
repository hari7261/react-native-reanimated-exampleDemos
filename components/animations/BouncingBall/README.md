# BouncingBall

A circular ball that bounces vertically while adding squash/stretch at impact for a physically grounded motion.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withSequence`
- `withRepeat`
- `interpolate`

## Key implementation notes
- A single `progress` shared value drives all motion.
- Vertical movement is mapped from `progress` using `translateY`.
- Squash/stretch uses `scaleX` and `scaleY`, focused near the ground contact phase.
- A separate animated shadow scales and fades to reinforce depth.

## Start behavior
- Starts automatically on mount.
- Runs in an infinite loop.

## Usage
```tsx
import BouncingBall from './components/animations/BouncingBall';

export default function DemoScreen() {
  return <BouncingBall />;
}
```

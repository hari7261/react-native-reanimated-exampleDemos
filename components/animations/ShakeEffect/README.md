# ShakeEffect

A horizontal shake pattern for inline validation or error feedback.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withSequence`
- `withTiming`

## Key implementation notes
- A single `translateX` shared value runs through a short decaying sequence.
- Motion alternates left/right and settles back at zero.
- Duration is intentionally brief to preserve responsiveness.

## Start behavior
- Triggers once on mount.
- Intended to be reused for event-driven validation feedback.

## Usage
```tsx
import ShakeEffect from './components/animations/ShakeEffect';

export default function DemoScreen() {
  return <ShakeEffect />;
}
```

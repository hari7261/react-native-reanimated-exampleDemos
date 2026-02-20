# SlideIn

A notification-style card that slides in from the left with a spring profile and slight overshoot.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withSpring`

## Key implementation notes
- Horizontal position is a shared value initialized offscreen.
- The spring target is `0`, producing natural settling with a brief overshoot.
- Static container uses `overflow: hidden` to avoid clipping artifacts during entry.

## Start behavior
- Single auto-start entrance animation on mount.

## Usage
```tsx
import SlideIn from './components/animations/SlideIn';

export default function DemoScreen() {
  return <SlideIn />;
}
```

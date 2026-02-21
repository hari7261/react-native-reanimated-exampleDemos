# FlipCard

A dual-sided card that flips in 3D with perspective, front/back visibility control, and continuous rotation.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withRepeat`
- `interpolate`

## Key implementation notes
- Two absolutely stacked animated faces are rendered.
- Each face uses its own `rotateY` mapping offset by 180 degrees.
- Opacity windows switch visible face near the edge-on angles to avoid overlap artifacts.
- `backfaceVisibility: 'hidden'` is applied to both faces.

## Start behavior
- Starts automatically on mount.
- Infinite looping flip.

## Usage
```tsx
import FlipCard from './components/animations/FlipCard';

export default function DemoScreen() {
  return <FlipCard />;
}
```

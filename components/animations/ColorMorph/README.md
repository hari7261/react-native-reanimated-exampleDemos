# ColorMorph

A rounded block that continuously transitions between multiple brand-like colors.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withRepeat`
- `interpolateColor`

## Key implementation notes
- A linear shared progress runs from 0 to 1 in a loop.
- `interpolateColor` maps progress across multiple color stops.
- The final stop repeats the first color for seamless looping.

## Start behavior
- Starts on mount.
- Loops continuously.

## Usage
```tsx
import ColorMorph from './components/animations/ColorMorph';

export default function DemoScreen() {
  return <ColorMorph />;
}
```

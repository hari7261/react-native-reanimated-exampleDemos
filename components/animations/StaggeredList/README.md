# StaggeredList

A vertical list where rows enter with staggered fade and upward translation.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withDelay`
- `interpolate`

## Key implementation notes
- Each row owns an independent shared value for clear stagger control.
- Entry uses delayed timing animation with eased deceleration.
- Opacity and `translateY` are combined for smooth list appearance.

## Start behavior
- Runs once automatically on mount.
- Designed for initial list reveal.

## Usage
```tsx
import StaggeredList from './components/animations/StaggeredList';

export default function DemoScreen() {
  return <StaggeredList />;
}
```

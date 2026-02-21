# PulseEffect

A rounded pulse indicator with a soft expanding ring and subtle core scaling.

## Reanimated primitives used
- `useSharedValue`
- `useAnimatedStyle`
- `withTiming`
- `withSequence`
- `withRepeat`
- `interpolate`

## Key implementation notes
- One shared `progress` value drives both outer ring and inner core.
- The ring expands and fades out to create a soft pulse wave.
- The core scales slightly to keep the center visually alive.

## Start behavior
- Auto-starts on mount.
- Continuous loop.

## Usage
```tsx
import PulseEffect from './components/animations/PulseEffect';

export default function DemoScreen() {
  return <PulseEffect />;
}
```

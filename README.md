# React Native Reanimated Example Demos

A modern collection of **clean, reusable, production-style animation components** built with [`react-native-reanimated`](https://docs.swmansion.com/react-native-reanimated/).

This repository is organized as a demo library: every animation lives in its own folder with:
- a ready-to-use `index.tsx` component,
- a focused component README,
- and an implementation that favors smooth, low-overhead UI motion.

---

## ✨ Highlights

- **11 isolated animation demos** (easy to copy into app code)
- **Reanimated-first architecture** with shared values + animated styles
- **Practical patterns** for onboarding UI, feedback states, ambient motion, and micro-interactions
- **Readable code structure** for quick learning and extension

---

## 📁 Project Structure

```text
components/
  animations/
    BouncingBall/
    BreathingCircle/
    ColorMorph/
    FadeInOut/
    FlipCard/
    PulseEffect/
    RotatingCard/
    ShakeEffect/
    SlideIn/
    SpringChain/
    StaggeredList/
```

Each animation directory contains:
- `index.tsx` → the component implementation
- `README.md` → behavior notes, Reanimated primitives used, and usage snippet

---

## 🧩 Included Animations

| Animation | Purpose |
|---|---|
| `BouncingBall` | Bounce motion with squash/stretch and shadow depth |
| `BreathingCircle` | Slow inhale/exhale ambient animation |
| `ColorMorph` | Smooth multi-stop looping color transitions |
| `FadeInOut` | Soft opacity + scale pulse for status/UI emphasis |
| `FlipCard` | 3D dual-face card flip loop |
| `PulseEffect` | Expanding ring pulse indicator |
| `RotatingCard` | Controlled 3D Y-axis card rotation |
| `ShakeEffect` | Short horizontal shake for error/validation feedback |
| `SlideIn` | Spring-based slide-in entrance card |
| `SpringChain` | Delayed spring wave across multiple dots |
| `StaggeredList` | Sequential list-row reveal animation |

---

## 🚀 Usage

Import any component directly from its folder:

```tsx
import BouncingBall from './components/animations/BouncingBall';

export default function DemoScreen() {
  return <BouncingBall />;
}
```

You can swap `BouncingBall` for any other animation listed above.

---

## ⚙️ Requirements

To run these components in a React Native app, ensure your project is configured for Reanimated:

- `react-native-reanimated` installed
- Babel plugin enabled (`react-native-reanimated/plugin`)
- Metro/cache reset after config changes
- Gesture Handler / Fabric setup aligned with your RN version (if your app requires it)

Refer to the official setup guide:
- https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started/

---

## 🤝 Contributing

Contributions are welcome. Good additions include:
- new animation components following the current folder pattern,
- performance or readability improvements to existing demos,
- improved component documentation and usage notes.

---

## 📄 License

This repository is licensed under the MIT License. See [`LICENSE`](./LICENSE).

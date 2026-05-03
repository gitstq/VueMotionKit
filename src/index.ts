// Styles
import './styles/variables.css'
import './styles/animations.css'

// Components - Text
export { GradientText } from './components/text'
export { TypewriterText } from './components/text'
export { GlitchText } from './components/text'
export { SplitText } from './components/text'
export { FadeText } from './components/text'
export { WaveText } from './components/text'
export { MarqueeText } from './components/text'
export { CountUp } from './components/text'

// Components - Background
export { ParticleField } from './components/background'
export { AuroraBg } from './components/background'
export { GradientOrb } from './components/background'
export { GridBg } from './components/background'
export { NoiseBg } from './components/background'
export { StarfieldBg } from './components/background'

// Components - Interaction
export { MagneticElement } from './components/interaction'
export { TiltCard } from './components/interaction'
export { SpotlightCard } from './components/interaction'
export { RippleButton } from './components/interaction'
export { MorphingCard } from './components/interaction'
export { ParallaxScroll } from './components/interaction'
export { DragContainer } from './components/interaction'

// Components - Transition
export { FadeExpand } from './components/transition'
export { SlideReveal } from './components/transition'
export { FlipCard } from './components/transition'
export { AccordionTransition } from './components/transition'
export { StaggerList } from './components/transition'
export { PageTransition } from './components/transition'

// Components - Feedback
export { ConfettiExplosion } from './components/feedback'
export { PulseRing } from './components/feedback'
export { ShimmerEffect } from './components/feedback'
export { ProgressBar } from './components/feedback'
export { ToastNotification } from './components/feedback'

// Composables
export { useMousePosition } from './composables'
export { useScrollProgress } from './composables'
export { useReducedMotion } from './composables'

// Utils
export { generateId, clamp, lerp, randomInRange, easeOutCubic, easeInOutQuad } from './utils'

// Types
export type {
  Direction,
  TriggerMode,
  AnimationType,
  SplitMode,
  GradientDirection,
  GlitchIntensity,
  ToastType,
  Axis,
  FlipDirection,
  MarqueeDirection,
  OrbPosition,
  ParticleConfig,
  StarConfig,
  ToastOptions,
} from './types'

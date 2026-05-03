export type EasingFunction = (t: number) => number

export type Direction = 'up' | 'down' | 'left' | 'right'

export type TriggerMode = 'mount' | 'hover' | 'scroll'

export type AnimationType = 'fade' | 'slide' | 'bounce' | 'rotate'

export type SplitMode = 'chars' | 'words'

export type GradientDirection = 'horizontal' | 'vertical' | 'diagonal'

export type GlitchIntensity = 'low' | 'medium' | 'high'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export type Axis = 'x' | 'y' | 'both'

export type FlipDirection = 'horizontal' | 'vertical'

export type MarqueeDirection = 'left' | 'right'

export type OrbPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'

export interface ParticleConfig {
  count?: number
  color?: string
  size?: number
  speed?: number
  connectLines?: boolean
  connectDistance?: number
}

export interface StarConfig {
  count?: number
  speed?: number
  depth?: number
  color?: string
}

export interface ToastOptions {
  message: string
  type?: ToastType
  duration?: number
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'bottom'
}

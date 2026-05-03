<template>
  <div>
    <section class="demo-section">
      <h2 class="demo-section__title">Magnetic Element</h2>
      <div class="demo-card" style="display: flex; justify-content: center; padding: 60px;">
        <MagneticElement :strength="0.4" :radius="200">
          <div style="padding: 16px 32px; background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.4); border-radius: 12px; font-size: 16px;">
            Move your mouse near me
          </div>
        </MagneticElement>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Tilt Card</h2>
      <div class="demo-card">
        <div class="demo-row" style="justify-content: center;">
          <TiltCard :max-tilt="15" :perspective="1000" :glare="true" :scale="1.02">
            <div style="width: 250px; height: 180px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
              Tilt Me!
            </div>
          </TiltCard>
          <TiltCard :max-tilt="10" :glare="true" glare-color="rgba(6, 182, 212, 0.6)">
            <div style="width: 250px; height: 180px; background: linear-gradient(135deg, #06b6d4, #34d399); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
              Glare Effect
            </div>
          </TiltCard>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Spotlight Card</h2>
      <div class="demo-card">
        <div class="demo-row" style="justify-content: center;">
          <SpotlightCard spotlight-color="rgba(99, 102, 241, 0.2)" :border-glow="true">
            <div style="width: 300px; padding: 32px; background: rgba(30, 30, 50, 0.8); border-radius: 12px;">
              <h3 style="color: #e2e8f0; margin-bottom: 8px;">Spotlight Card</h3>
              <p style="color: #94a3b8; font-size: 14px;">Move your mouse over this card to see the spotlight effect.</p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Ripple Button</h2>
      <div class="demo-card">
        <div class="demo-row">
          <RippleButton variant="filled">Filled Button</RippleButton>
          <RippleButton variant="outlined">Outlined Button</RippleButton>
          <RippleButton variant="text">Text Button</RippleButton>
          <RippleButton variant="filled" color="rgba(255, 255, 255, 0.3)">Custom Ripple</RippleButton>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Morphing Card</h2>
      <div class="demo-card">
        <div class="demo-row" style="justify-content: center;">
          <MorphingCard :border-radius="12" :scale="1.05" :rotate-x="3" :rotate-y="3">
            <div style="width: 280px; padding: 32px; background: linear-gradient(135deg, #1e1e32, #2a2a4a); border-radius: 12px;">
              <h3 style="color: #e2e8f0; margin-bottom: 8px;">Morphing Card</h3>
              <p style="color: #94a3b8; font-size: 14px;">Hover to see the morphing effect with border radius change and shadow.</p>
            </div>
          </MorphingCard>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Parallax Scroll</h2>
      <div class="demo-card" style="height: 200px; overflow: hidden;">
        <ParallaxScroll :speed="0.3" direction="vertical">
          <div style="display: flex; gap: 16px;">
            <div v-for="i in 5" :key="i" style="width: 150px; height: 150px; background: rgba(99, 102, 241, 0.2); border: 1px solid rgba(99, 102, 241, 0.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #6366f1; font-size: 24px; font-weight: bold;">
              {{ i }}
            </div>
          </div>
        </ParallaxScroll>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Drag Container</h2>
      <div class="demo-card" style="height: 200px; overflow: hidden;">
        <DragContainer axis="both" :bounds="true">
          <div style="display: flex; gap: 16px; padding: 20px;">
            <div style="width: 120px; height: 120px; background: rgba(99, 102, 241, 0.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; cursor: grab; color: white;">
              Drag Me
            </div>
            <div style="width: 120px; height: 120px; background: rgba(139, 92, 246, 0.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; cursor: grab; color: white;">
              And Me
            </div>
            <div style="width: 120px; height: 120px; background: rgba(6, 182, 212, 0.3); border-radius: 12px; display: flex; align-items: center; justify-content: center; cursor: grab; color: white;">
              Me Too
            </div>
          </div>
        </DragContainer>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  MagneticElement,
  TiltCard,
  SpotlightCard,
  RippleButton,
  MorphingCard,
  ParallaxScroll,
  DragContainer,
} from 'vue-motion-kit'
</script>

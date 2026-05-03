<template>
  <div>
    <section class="demo-section">
      <h2 class="demo-section__title">Particle Field</h2>
      <div class="demo-card" style="height: 300px; position: relative; overflow: hidden;">
        <ParticleField :count="60" color="rgba(99, 102, 241, 0.6)" :connect-lines="true" :connect-distance="120" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Aurora Background</h2>
      <div class="demo-card" style="height: 300px; position: relative; overflow: hidden;">
        <AuroraBg :colors="['#6366f1', '#8b5cf6', '#06b6d4', '#f43f5e']" :speed="8" :opacity="0.4" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Gradient Orb</h2>
      <div class="demo-card" style="height: 300px; position: relative; overflow: hidden;">
        <GradientOrb :colors="['#6366f1', '#8b5cf6']" :size="250" position="top-left" />
        <GradientOrb :colors="['#06b6d4', '#34d399']" :size="200" position="bottom-right" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Grid Background</h2>
      <div class="demo-card" style="height: 250px; position: relative; overflow: hidden;">
        <GridBg color="rgba(99, 102, 241, 0.2)" :cell-size="40" :animate="true" :speed="3" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Noise Background</h2>
      <div class="demo-card" style="height: 200px; position: relative; overflow: hidden; background: linear-gradient(135deg, #1a1a2e, #16213e);">
        <NoiseBg :opacity="0.08" blend-mode="overlay" />
        <div style="position: relative; z-index: 2; display: flex; align-items: center; justify-content: center; height: 100%; color: white; font-size: 20px;">
          Noise Texture Overlay
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Starfield Background</h2>
      <div class="demo-card" style="height: 300px; position: relative; overflow: hidden;">
        <StarfieldBg :count="300" :speed="1" color="#ffffff" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ParticleField,
  AuroraBg,
  GradientOrb,
  GridBg,
  NoiseBg,
  StarfieldBg,
} from 'vue-motion-kit'
</script>

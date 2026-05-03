<template>
  <div>
    <section class="demo-section">
      <h2 class="demo-section__title">Gradient Text</h2>
      <div class="demo-card">
        <div class="demo-card__label">Horizontal</div>
        <GradientText
          :colors="['#6366f1', '#8b5cf6', '#06b6d4']"
          font-size="36px"
          :speed="3"
        >
          Beautiful Gradient Text
        </GradientText>
      </div>
      <div class="demo-card">
        <div class="demo-card__label">Vertical</div>
        <GradientText
          :colors="['#f43f5e', '#fbbf24', '#34d399']"
          direction="vertical"
          font-size="36px"
          :speed="4"
        >
          Vertical Gradient
        </GradientText>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Typewriter Text</h2>
      <div class="demo-card">
        <div class="demo-card__label">Basic</div>
        <TypewriterText text="Hello, VueMotionKit!" :speed="80" />
      </div>
      <div class="demo-card">
        <div class="demo-card__label">Looping</div>
        <TypewriterText text="This text loops forever..." :speed="50" :loop="true" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Glitch Text</h2>
      <div class="demo-card">
        <div class="demo-card__label">Always On</div>
        <GlitchText text="GLITCH EFFECT" intensity="high" />
      </div>
      <div class="demo-card">
        <div class="demo-card__label">Hover Trigger</div>
        <GlitchText text="Hover Me" intensity="medium" trigger="hover" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Split Text</h2>
      <div class="demo-card">
        <div class="demo-card__label">Fade - Characters</div>
        <SplitText text="Hello World" split-by="chars" animation="fade" :stagger-delay="60" />
      </div>
      <div class="demo-card">
        <div class="demo-card__label">Bounce - Words</div>
        <SplitText text="Vue Motion Kit Components" split-by="words" animation="bounce" :stagger-delay="100" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Fade Text</h2>
      <div class="demo-card">
        <div class="demo-row">
          <FadeText direction="up" :duration="800">Fade Up</FadeText>
          <FadeText direction="down" :duration="800">Fade Down</FadeText>
          <FadeText direction="left" :duration="800">Fade Left</FadeText>
          <FadeText direction="right" :duration="800">Fade Right</FadeText>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Wave Text</h2>
      <div class="demo-card">
        <WaveText text="Hello Wave!" :amplitude="12" :duration="2000" />
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Marquee Text</h2>
      <div class="demo-card">
        <MarqueeText :speed="20" :pause-on-hover="true">
          <span style="font-size: 24px; color: #6366f1;">VueMotionKit</span>
          <span style="font-size: 24px; color: #8b5cf6;">Creative</span>
          <span style="font-size: 24px; color: #06b6d4;">Animations</span>
          <span style="font-size: 24px; color: #f43f5e;">Components</span>
        </MarqueeText>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Count Up</h2>
      <div class="demo-card">
        <div class="demo-row">
          <div>
            <div class="demo-card__label">Basic</div>
            <CountUp :from="0" :to="1000" :duration="2000" />
          </div>
          <div>
            <div class="demo-card__label">With Prefix/Suffix</div>
            <CountUp :from="0" :to="99.9" :duration="2000" prefix="$" suffix="%" :decimals="1" />
          </div>
          <div>
            <div class="demo-card__label">With Separator</div>
            <CountUp :from="0" :to="100000" :duration="2500" separator="," />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  GradientText,
  TypewriterText,
  GlitchText,
  SplitText,
  FadeText,
  WaveText,
  MarqueeText,
  CountUp,
} from 'vue-motion-kit'
</script>

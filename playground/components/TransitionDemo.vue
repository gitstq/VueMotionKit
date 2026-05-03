<template>
  <div>
    <section class="demo-section">
      <h2 class="demo-section__title">Fade Expand</h2>
      <div class="demo-card">
        <button @click="showFadeExpand = !showFadeExpand" style="margin-bottom: 12px; padding: 8px 16px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
          Toggle Fade Expand
        </button>
        <FadeExpand :duration="400">
          <div v-if="showFadeExpand" style="padding: 16px; background: rgba(99, 102, 241, 0.1); border-radius: 8px;">
            This content fades in and expands. It uses CSS transitions for smooth height animation combined with opacity fading.
          </div>
        </FadeExpand>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Slide Reveal</h2>
      <div class="demo-card">
        <div class="demo-row" style="margin-bottom: 12px;">
          <button v-for="dir in ['left', 'right', 'up', 'down']" :key="dir" @click="slideDirection = dir as any" style="padding: 6px 12px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            {{ dir }}
          </button>
          <button @click="showSlide = !showSlide" style="padding: 6px 12px; background: rgba(244, 63, 94, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            Toggle
          </button>
        </div>
        <SlideReveal :direction="slideDirection" :duration="500">
          <div v-if="showSlide" style="padding: 16px; background: rgba(99, 102, 241, 0.1); border-radius: 8px;">
            Content slides in from the {{ slideDirection }} direction.
          </div>
        </SlideReveal>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Flip Card</h2>
      <div class="demo-card">
        <div class="demo-row" style="justify-content: center;">
          <FlipCard :duration="600" :perspective="1000" direction="horizontal">
            <template #front>
              <div style="width: 250px; height: 180px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                Front Side
              </div>
            </template>
            <template #back>
              <div style="width: 250px; height: 180px; background: linear-gradient(135deg, #06b6d4, #34d399); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                Back Side
              </div>
            </template>
          </FlipCard>
          <FlipCard :duration="600" direction="vertical">
            <template #front>
              <div style="width: 250px; height: 180px; background: linear-gradient(135deg, #f43f5e, #fbbf24); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                Vertical Flip
              </div>
            </template>
            <template #back>
              <div style="width: 250px; height: 180px; background: linear-gradient(135deg, #fbbf24, #34d399); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                Reversed!
              </div>
            </template>
          </FlipCard>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Accordion Transition</h2>
      <div class="demo-card">
        <button @click="showAccordion = !showAccordion" style="margin-bottom: 12px; padding: 8px 16px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
          Toggle Accordion
        </button>
        <AccordionTransition :duration="400">
          <div v-if="showAccordion" style="padding: 16px; background: rgba(99, 102, 241, 0.1); border-radius: 8px;">
            <p style="margin-bottom: 8px;">This is an accordion transition that smoothly expands and collapses content.</p>
            <p>It uses JavaScript to measure the actual height for smooth animation.</p>
          </div>
        </AccordionTransition>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Stagger List</h2>
      <div class="demo-card">
        <div class="demo-row" style="margin-bottom: 12px;">
          <button @click="addStaggerItem" style="padding: 8px 16px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            Add Item
          </button>
          <button @click="staggerItems = []" style="padding: 8px 16px; background: rgba(244, 63, 94, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
            Clear
          </button>
        </div>
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div
            v-for="(item, index) in staggerItems"
            :key="item.id"
            :data-index="index"
            style="padding: 12px 16px; background: rgba(99, 102, 241, 0.1); border: 1px solid rgba(99, 102, 241, 0.2); border-radius: 8px;"
          >
            Item {{ item.id }}
          </div>
        </div>
      </div>
    </section>

    <section class="demo-section">
      <h2 class="demo-section__title">Page Transition</h2>
      <div class="demo-card">
        <button @click="showPage = !showPage" style="padding: 8px 16px; background: rgba(99, 102, 241, 0.3); border: none; color: white; border-radius: 6px; cursor: pointer;">
          Toggle Page
        </button>
        <PageTransition :duration="400" mode="out-in">
          <div v-if="showPage" key="page1" style="margin-top: 12px; padding: 16px; background: rgba(99, 102, 241, 0.1); border-radius: 8px;">
            Page 1 - This content transitions in and out smoothly.
          </div>
          <div v-else key="page2" style="margin-top: 12px; padding: 16px; background: rgba(6, 182, 212, 0.1); border-radius: 8px;">
            Page 2 - Different content with smooth transition.
          </div>
        </PageTransition>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Direction } from 'vue-motion-kit'
import {
  FadeExpand,
  SlideReveal,
  FlipCard,
  AccordionTransition,
  StaggerList,
  PageTransition,
} from 'vue-motion-kit'

const showFadeExpand = ref(false)
const showSlide = ref(false)
const slideDirection = ref<Direction>('left')
const showAccordion = ref(false)
const showPage = ref(true)

interface StaggerItem {
  id: number
}

const staggerItems = ref<StaggerItem[]>([])
let nextId = 1

const addStaggerItem = () => {
  staggerItems.value.push({ id: nextId++ })
}
</script>

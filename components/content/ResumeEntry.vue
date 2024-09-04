<script lang="ts" setup>
// import type { PropType } from 'vue'

// interface ResumeEntry {
//   jobTitle: string
//   companyName: string
//   // startDate: Date
//   // endDate: Date
//   // location: string
//   // bulletPoints: string[]
// }

// defineProps({
//   resumeEntry: {
//     type: Object as PropType<ResumeEntry>,
//     required: true,
//   },
// });
</script>

<template>
  <div class="resume-entry">
    <div class="title">
      <ContentSlot :use="$slots.title" unwrap="p"> Job Title </ContentSlot>
    </div>
    <div class="organization">
      <ContentSlot :use="$slots.organization" unwrap="p"> Organization Name </ContentSlot>
    </div>
    <div class="tenure-location">
      <div class="tenure">
        <ContentSlot :use="$slots.startDate" unwrap="p">Start Date</ContentSlot>
        - <ContentSlot :use="$slots.endDate" unwrap="p">End Date</ContentSlot>
      </div>
      <div class="location">
        <ContentSlot :use="$slots.location" unwrap="p">
          Company Location
        </ContentSlot>
      </div>
    </div>
    <ContentSlot :use="$slots.bulletPoints" unwrap="ul li">
      <ul>
        <li>Bullet Point 1</li>
        <li>Bullet Point 2</li>
        <li>Bullet Point 3</li>
      </ul>
    </ContentSlot>
  </div>
</template>

<style scoped lang="ts">
css({
 '.resume-entry': {
    '.title': {
      fontSize: '{text.2xl.fontSize}',
      lineHeight: '{text.2xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
    },
    '.organization': {
      fontSize: '{text.lg.fontSize}',
      lineHeight: '{text.lg.lineHeight}',
      fontWeight: '{fontWeight.semibold}',
    },
    '.tenure-location': {
      display: 'flex',
      flexDirection: 'row', 
      justifyContent: 'space-between',
      '.location': {
        fontStyle: 'italic',
      },
    },
  }
})
</style>

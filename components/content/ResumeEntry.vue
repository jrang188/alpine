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
    <div>
      <ContentSlot :use="$slots.company" unwrap="p"> Company Name </ContentSlot>
    </div>
    <div>
      <div>
        <ContentSlot :use="$slots.startDate" unwrap="p">Start Date</ContentSlot>
        - <ContentSlot :use="$slots.endDate" unwrap="p">End Date</ContentSlot>
      </div>
      <div>
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
  }
})
</style>

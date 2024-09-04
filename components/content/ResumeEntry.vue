<script lang="ts" setup>
defineProps({
  startDate: {
    type: String,
    default: "2020-01-01",
  },
  endDate: {
    type: String,
    default: () => new Date(),
  },
});

const formatDate = (date: string): string => {
  const [year, month] = date.split("-").map(Number);
  return new Date(year, month - 1).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  });
};
</script>

<template>
  <div class="resume-entry">
    <div class="title">
      <ContentSlot :use="$slots.title" unwrap="p"> Job Title </ContentSlot>
    </div>
    <div class="organization">
      <ContentSlot :use="$slots.organization" unwrap="p">
        Organization Name
      </ContentSlot>
    </div>
    <div class="tenure-location">
      <div class="tenure">
        {{ formatDate(startDate) }} -
        {{ formatDate(endDate) }}
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

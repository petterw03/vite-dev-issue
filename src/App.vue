<script setup>
import { ref, computed } from 'vue';

const updated = ref(false);

const data = ref([
  ['Category', 'Series 1'],
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);

function updateData() {
  data.value = [
    ['Category', 'Series 1'], // this will make Highcharts crash
    ['a', 'abc'],
    ['b', 2],
    ['c', 3],
  ]
  updated.value = true; // this should still be fired
}

const chartOptions = computed(() => {
  return {
    chart: {
      showErrors: true,
    },
    lang: {
      locale: 'en',
    },
    data: {
      rows: data.value,
    },
  };
});
</script>

<template>
  <highcharts :options="chartOptions" style="width: 500px" />
  <button @click="updateData">Update</button>
  <p>Updated: {{ updated }}</p>
</template>

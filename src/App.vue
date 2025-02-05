<script setup>
import { Chart } from 'highcharts-vue';
import 'highcharts/modules/data';
import { ref, computed } from 'vue';

const updated = ref(false);

const data = ref([
  ['Category', 'Series 1'],
  ['a', 'abc'],
  ['b', 2],
  ['c', 3],
]);

function updateData() {
  data.value = [
    ['Category', 'Series 1'],
    ['a', 1],
    ['b', 2],
    ['c', 3],
  ];
  updated.value = true;
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
  <Chart :options="chartOptions" style="width: 500px" />
  <button @click="updateData">Update</button>
  <p>Updated: {{ updated }}</p>
</template>

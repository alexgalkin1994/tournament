<template>
  <div>
    <span>Return Matches</span
    ><n-switch
      v-model:value="returnMatches"
      @update:value="toggleReturnMatches"
    />
  </div>
</template>

<script setup lang="ts">
import useMatchStore from '../store/match';
import { NSwitch } from 'naive-ui';
import { ref } from 'vue';

const matchStore = useMatchStore();

const returnMatches = ref(false);

const toggleReturnMatches = () => {
  returnMatches.value
    ? matchStore.generateReturnMatches()
    : matchStore.removeReturnMatches();
};
</script>

<style scoped></style>

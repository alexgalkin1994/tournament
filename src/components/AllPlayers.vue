<template>
  <div>
    <span v-for="(player, index) in playerStore.players" :key="index">
      {{ player.name }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import usePlayerStore from '../store/player';

const playerStore = usePlayerStore();
</script>

<style scoped></style>

<template>
  <n-table>
    <tr>
      <th>Name</th>
      <th>Points</th>
      <th>Goals</th>
    </tr>
    <PlayerListRow
      v-for="(player, index) in orderedByPoints"
      :key="index"
      :player="player"
    />
  </n-table>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { NTable } from 'naive-ui';
import usePlayerStore from '../store/player';
import PlayerListRow from './PlayerListRow.vue';

const playerStore = usePlayerStore();

const orderedByPoints = computed(() =>
  playerStore.players.sort((a, b) => b.points - a.points)
);
</script>

<style scoped></style>

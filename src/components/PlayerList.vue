<template>
  <n-table>
    <tr>
      <th>Name</th>
      <th>Points</th>
      <th>Goals</th>
      <th>Actions</th>
    </tr>
    <PlayerListRow
      v-for="(player, index) in playerStore.orderedByPoints"
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
</script>

<style></style>

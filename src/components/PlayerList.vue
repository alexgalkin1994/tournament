<template>
  <n-table>
    <tr>
      <th>Name</th>
      <th>Points</th>
    </tr>
    <PlayerListRow
      v-for="(player, index) in playerStore.players"
      :key="index"
      :player="player"
    />
  </n-table>
</template>

<script setup lang="ts">
import { NTable } from 'naive-ui';
import usePlayerStore from '../store/player';
import PlayerListRow from './PlayerListRow.vue';

const playerStore = usePlayerStore();
</script>

<style scoped></style>

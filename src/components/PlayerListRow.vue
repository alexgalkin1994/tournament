<template>
  <tr class="player-list-row">
    <td class="player-name">{{ player.name }}</td>
    <td>{{ player.points }}</td>
    <td>{{ player.goals }}</td>
    <td>
      <n-button @click="removePlayer" class="remove-btn">
        <TrashIcon class="remove-btn h-5 w-5 text-white-500"
      /></n-button>
    </td>
  </tr>
  <div></div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui';
import { TrashIcon } from '@heroicons/vue/outline';
import { Player } from '../types';
import usePlayerStore from '../store/player';

const props = defineProps<{
  player: Player;
}>();

const playerStore = usePlayerStore();

const removePlayer = () => {
  playerStore.removePlayer(props.player);
};
</script>

<style>
.player-name {
  text-transform: capitalize;
}

.remove-btn {
  visibility: hidden;
}
.player-list-row:hover .remove-btn {
  visibility: visible;
}
</style>

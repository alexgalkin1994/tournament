<template>
  <div class="add-player">
    <n-input-group class="mb-8">
      <n-input
        type="text"
        v-model:value="player.name"
        placeholder="Your Name"
      />
      <n-button @click="addPlayer">Add</n-button>
    </n-input-group>
    <PlayerList />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PlayerList from './PlayerList.vue';
import usePlayerStore from '../store/player';
import useMatchStore from '../store/match';
import { Player } from '../types';
import { NButton, NInput, NInputGroup } from 'naive-ui';

const playerStore = usePlayerStore();
const matchStore = useMatchStore();

const player = ref<Player>({
  name: '',
  points: 0,
});

const addPlayer = () => {
  if (!player.value.name.trim()) return;
  playerStore.addPlayer({ ...player.value });
  player.value.name = '';
};
</script>

<style scoped>
.add-player {
  display: flex;
  flex-direction: column;
  padding: 3rem;
}
</style>

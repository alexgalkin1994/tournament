<template>
  <div class="add-player">
    <n-input-group class="mb-8">
      <n-input
        type="text"
        v-model:value="player.name"
        placeholder="Your Name"
        @keyup.enter="addPlayer"
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
import { Player } from '../types';
import { NButton, NInput, NInputGroup } from 'naive-ui';
import { v4 as uuidv4 } from 'uuid';

const playerStore = usePlayerStore();

const player = ref<Player>({
  id: '',
  name: '',
  points: 0,
  goals: 0,
});

const addPlayer = () => {
  if (!player.value.name.trim()) return;
  player.value.id = uuidv4();
  playerStore.addPlayer({ ...player.value });
  player.value.name = '';
};
</script>

<style scoped>
.add-player {
  display: flex;
  flex-direction: column;
}
</style>

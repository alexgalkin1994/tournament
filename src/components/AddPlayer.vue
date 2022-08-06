<template>
  <div class="flex flex-col">
    <n-input-group>
      <n-input
        class="text-left"
        type="text"
        v-model:value="player.name"
        placeholder="Name"
        @keyup.enter="addPlayer"
        autofocus
      />
      <n-button @click="addPlayer">Add</n-button>
    </n-input-group>
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

<template>
  <div class="p-6" v-if="matchStore.matches.length">
    <n-table>
      <tr>
        <th>Player 1</th>
        <th>Player 2</th>
        <th>Goals Player 1</th>
        <th>Goals Player 2</th>
      </tr>
      <tr v-for="(match, index) in matchStore.matches" :key="index">
        <td>{{ match.firstPlayer.name }}</td>
        <td>{{ match.secondPlayer.name }}</td>
        <td>
          <n-input-number
            @input="matchStore.calcPoints"
            v-model:value="match.goalsPlayer1"
            placeholder=""
            :min="0"
          />
        </td>
        <td>
          <n-input-number
            @input="matchStore.calcPoints"
            v-model:value="match.goalsPlayer2"
            placeholder=""
            :min="0"
          />
        </td>
      </tr>
    </n-table>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import usePlayerStore from '../store/player';
import useMatchStore from '../store/match';
import { NTable, NInputNumber } from 'naive-ui';

const matchStore = useMatchStore();
const playerStore = usePlayerStore();
</script>

<style scoped></style>

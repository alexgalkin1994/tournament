<template>
  <div class="pl-12" v-if="matchStore.matches.length">
    <n-table>
      <tr v-for="(match, index) in matchStore.matches" :key="index">
        <td>{{ match.firstPlayer.name }}</td>
        <td>
          <span>vs.</span>
        </td>
        <td>{{ match.secondPlayer.name }}</td>
        <td>
          <n-input-number
            @input="matchStore.calcStats"
            v-model:value="match.goalsPlayer1"
            placeholder=""
            :min="0"
            :show-button="false"
            class="w-10"
          />
        </td>

        <td>
          <n-input-number
            @input="matchStore.calcStats"
            v-model:value="match.goalsPlayer2"
            placeholder=""
            :min="0"
            :show-button="false"
            class="w-10"
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

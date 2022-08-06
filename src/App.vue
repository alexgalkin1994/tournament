<script setup lang="ts">
import AddPlayer from './components/AddPlayer.vue';
import PlayerList from './components/PlayerList.vue';
import AllMatches from './components/AllMatches.vue';
import { darkTheme, NConfigProvider, NGlobalStyle } from 'naive-ui';
import MatchSettings from './components/MatchSettings.vue';

const players = [];
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <div class="app flex justify-between mt-12">
      <div class="player">
        <PlayerList />
      </div>

      <AllMatches class="mx-8" />
      <div class="config">
        <AddPlayer />
        <MatchSettings />
      </div>
    </div>

    <n-global-style />
  </n-config-provider>
</template>

<style></style>

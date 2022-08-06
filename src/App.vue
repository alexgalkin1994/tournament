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
    <div class="app">
      <div class="player">
        <AddPlayer />
        <MatchSettings />
      </div>
      <AllMatches />
    </div>
    <n-global-style />
  </n-config-provider>
</template>

<style>
.app {
  display: flex;
}
</style>

import { defineStore } from 'pinia';
import { Player } from '../types';
import useMatchStore from './match';

type PlayerStore = {
  players: Player[];
};

export default defineStore('player', {
  state: () =>
    ({
      players: [],
    } as PlayerStore),
  getters: {
    allPlayers: state => state.players,
  },
  actions: {
    generateMatches() {
      const matchStore = useMatchStore();
      matchStore.generateMatches();
    },
    addPlayer(player: Player) {
      this.players.push(player);
      this.generateMatches();
    },
    removePlayer(player: Player) {
      this.players = this.players.filter(p => p !== player);
      this.generateMatches();
    },
  },
  //   persist: true,
});

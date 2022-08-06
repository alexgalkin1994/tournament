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
    generateMatches(player: Player) {
      const matchStore = useMatchStore();
      matchStore.generateMatches(player);
    },
    addPlayer(player: Player) {
      this.players.push(player);
      this.generateMatches(player);
    },
    removePlayer(player: Player) {
      this.players = this.players.filter(p => p !== player);
      this.generateMatches(player);
    },
  },
  //   persist: true,
});

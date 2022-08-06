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
    orderedByPoints: state => {
      return state.players.sort((a: Player, b: Player) => {
        if (a.points === b.points) return b.goals - a.goals;
        return b.points - a.points;
      });
    },
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
});

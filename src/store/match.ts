import { defineStore } from 'pinia';
import usePlayerStore from './player';
import { v4 as uuidv4 } from 'uuid';
import { Match, Player } from '../types';

type MatchStore = {
  matches: Match[];
};

export default defineStore('match', {
  state: () =>
    ({
      matches: [],
    } as MatchStore),
  getters: {},
  actions: {
    generateMatches() {
      const playerStore = usePlayerStore();

      this.matches = [];
      playerStore.players.forEach((firstPlayer, index) => {
        playerStore.players.forEach(secondPlayer => {
          if (firstPlayer !== secondPlayer) {
            this.matches.push({
              id: uuidv4(),
              firstPlayer,
              secondPlayer,
              goalsPlayer1: null,
              goalsPlayer2: null,
            });
          }
        });
      });
    },
    findPlayer(player: Player) {
      const playerStore = usePlayerStore();
      return playerStore.players.find(p => p === player);
    },
    clearPoints() {
      const playerStore = usePlayerStore();
      for (const player of playerStore.players) {
        player.points = 0;
      }
    },
    calcPoints() {
      this.clearPoints();
      for (const match of this.matches) {
        console.log('nm', match);
        if (match.goalsPlayer1 === null || match.goalsPlayer2 === null) {
          console.log('hi');
          continue;
        }
        const player1 = this.findPlayer(match.firstPlayer);
        const player2 = this.findPlayer(match.secondPlayer);
        if (player1 && player2) {
          if (match.goalsPlayer1 === match.goalsPlayer2) {
            player1.points += 1;
            player2.points += 1;
          } else if (match.goalsPlayer1 > match.goalsPlayer2) {
            player1.points += 3;
          } else if (match.goalsPlayer1 < match.goalsPlayer2) {
            player2.points += 3;
          }
        }
      }
    },
  },
  // persist: true,
});

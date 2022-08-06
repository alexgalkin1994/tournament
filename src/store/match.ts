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
    generateMatches(newPlayer: Player) {
      const playerStore = usePlayerStore();

      playerStore.players.forEach(player => {
        if (newPlayer.id !== player.id) {
          this.matches.push({
            id: uuidv4(),
            firstPlayer: newPlayer,
            secondPlayer: player,
            goalsPlayer1: null,
            goalsPlayer2: null,
          });
        }
      });
    },
    generateReturnMatches() {
      const returnMatches = JSON.parse(JSON.stringify(this.matches));
      returnMatches.forEach((match: Match) => {
        match.id = uuidv4();
        match.goalsPlayer1 = null;
        match.goalsPlayer2 = null;
      });
      this.matches = [...this.matches, ...returnMatches];
    },
    removeReturnMatches() {
      this.matches = this.matches.slice(0, this.matches.length / 2);
    },
    findPlayer(id: string) {
      const playerStore = usePlayerStore();
      return playerStore.players.find(p => p.id === id);
    },
    clearPoints() {
      const playerStore = usePlayerStore();
      for (const player of playerStore.players) {
        player.points = 0;
      }
    },
    clearGoals() {
      const playerStore = usePlayerStore();
      for (const player of playerStore.players) {
        player.goals = 0;
      }
    },
    calcStats() {
      console.log('calc stats..');
      this.calcPoints();
      this.calcGoals();
    },
    calcGoals() {
      this.clearGoals();
      this.matches.forEach(match => {
        if (match.goalsPlayer1 === null || match.goalsPlayer2 === null) {
          return;
        }
        const firstPlayer = this.findPlayer(match.firstPlayer.id);
        const secondPlayer = this.findPlayer(match.secondPlayer.id);

        console.log('playerg', match.goalsPlayer1, match.goalsPlayer2);
        console.log('firstPlayer', firstPlayer);
        console.log('secondPlayer', secondPlayer);

        if (!firstPlayer || !secondPlayer) return;

        firstPlayer.goals =
          firstPlayer.goals + match.goalsPlayer1 - match.goalsPlayer2;

        secondPlayer.goals =
          secondPlayer.goals + match.goalsPlayer2 - match.goalsPlayer1;
      });
    },
    calcPoints() {
      this.clearPoints();
      for (const match of this.matches) {
        if (match.goalsPlayer1 === null || match.goalsPlayer2 === null) {
          continue;
        }
        const player1 = this.findPlayer(match.firstPlayer.id);
        const player2 = this.findPlayer(match.secondPlayer.id);
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

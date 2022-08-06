export type Match = {
  id: string;
  firstPlayer: Player;
  secondPlayer: Player;
  goalsPlayer1: number | null;
  goalsPlayer2: number | null;
};

export type Player = {
  id: string;
  name: string;
  points: number;
  goals: number;
};

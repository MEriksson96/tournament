export type Player = {
  Id: string;
  Name: string;
  PlayerTeam: string;
  GamesPlayed: number;
  Points: number;
  ScoredGoals: string;
  ConcededGoals: string;
  Diff: number;
  PlayerIsAdmin: boolean;
};

export const apiUrl = "http://localhost:60120/api/player";

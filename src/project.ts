import audio from "../audio/VoiceOver_.wav";
import buildGames from "./scenes/build-games?scene";
import gameEngineSelection from "./scenes/game-engine-selection?scene";
import gameImages from "./scenes/game-images?scene";
import { makeProject } from "@motion-canvas/core";

export default makeProject({
  scenes: [gameImages, buildGames, gameEngineSelection],
  audio,
  experimentalFeatures: true,
});

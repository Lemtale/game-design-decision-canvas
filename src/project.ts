import audio from "../audio/VoiceOver_.wav";
import gameImages from "./scenes/game-images?scene";
import { makeProject } from "@motion-canvas/core";

export default makeProject({
  scenes: [gameImages],
  audio,
  experimentalFeatures: true,
});

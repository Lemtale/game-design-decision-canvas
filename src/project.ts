import audio from "../audio/VoiceOver_.wav";
import example from "./scenes/example?scene";
import { makeProject } from "@motion-canvas/core";

export default makeProject({
  scenes: [example],
  audio,
});

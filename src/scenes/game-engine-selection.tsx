import {
  Direction,
  all,
  createRef,
  delay,
  easeOutBack,
  slideTransition,
  waitUntil,
} from "@motion-canvas/core";
import { Img, Layout, Txt, makeScene2D } from "@motion-canvas/2d";

import businessMan from "../../images/business-man.png";
import godot from "../../images/godot.png";
import hammer from "../../images/hammer.png";
import runtimeFee from "../../images/runtime-fee.png";
import unity from "../../images/unity logo.webp";
import unreal from "../../images/unreal-engine.png";

export default makeScene2D(function* (view) {
  const gameEngineSelectionRef = createRef<Txt>();
  const unrealRef = createRef<Img>();
  const unityRef = createRef<Img>();
  const godotRef = createRef<Img>();
  const hammerRef = createRef<Img>();
  const businessManRef = createRef<Img>();
  const runtimeFeeRef = createRef<Img>();

  view.add(
    <>
      <Layout layout direction="column" alignItems="center" gap={100}>
        <Txt
          ref={gameEngineSelectionRef}
          fill="white"
          fontSize={80}
          fontWeight={600}
          textAlign="center"
        />
        <Img ref={unrealRef} src={unreal} width={0} />
        <Img ref={godotRef} src={godot} width={0} />
        <Img ref={unityRef} src={unity} width={0} />
      </Layout>
      <Img
        ref={hammerRef}
        src={hammer}
        scaleX={-1}
        position={[-800, -400]}
        rotation={-30}
      />
      <Img ref={businessManRef} src={businessMan} position={[0, 2000]} />
      <Img
        ref={runtimeFeeRef}
        src={runtimeFee}
        scale={0.8}
        position={[0, -1600]}
      />
    </>
  );
  yield* slideTransition(Direction.Left, 0.5);
  yield* waitUntil("game_engine_selection");

  yield* gameEngineSelectionRef().text("Game", 0.4);
  yield* gameEngineSelectionRef().text("Game Engine", 0.4);
  yield* gameEngineSelectionRef().text("Game Engine\nSelection", 0.4);

  yield* waitUntil("unreal_engine");
  yield* unrealRef().width(300, 0.2, easeOutBack);

  yield* waitUntil("unity");
  yield* unityRef().width(600, 0.2, easeOutBack);

  yield* waitUntil("godot");
  yield* godotRef().width(300, 0.2, easeOutBack);

  yield* waitUntil("unreal_engine_out");
  yield* all(
    hammerRef().position([-800, -400], 0.2),
    hammerRef().rotation(30, 0.2, easeOutBack),
    delay(0.05, unrealRef().width(0, 0.2))
  );

  yield* delay(0.5, hammerRef().rotation(-30, 0.2));

  yield* waitUntil("open_source");
  yield* all(godotRef().width(400, 0.4), unityRef().opacity(0.25, 0.2));

  yield* waitUntil("private_company");
  yield* all(
    godotRef().width(300, 0.2),
    godotRef().opacity(0.25, 0.2),
    unityRef().width(700, 0.4),
    unityRef().opacity(1, 0.2)
  );

  yield* waitUntil("license_could_change");
  yield* businessManRef().position([0, 250], 2);

  yield* waitUntil("throat_clear");
  yield* runtimeFeeRef().position([0, 0], 0.5);

  unityRef().width(0);
  gameEngineSelectionRef().fontSize(0);
  godotRef().width(600);
  godotRef().opacity(1);

  yield* waitUntil("final_choice");
  yield* all(
    businessManRef().position([0, 2000], 0.4),
    runtimeFeeRef().position([0, 2000], 0.4),
    godotRef().width(1000, 2),
    godotRef().rotation(5, 2)
  );

  yield* waitUntil("engine_end");
});

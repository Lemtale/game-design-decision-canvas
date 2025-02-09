import {
  Direction,
  all,
  createRef,
  delay,
  easeOutBack,
  easeOutCubic,
  slideTransition,
  waitUntil,
} from "@motion-canvas/core";
import { Img, Txt, makeScene2D } from "@motion-canvas/2d";

import controller from "../../images/360 controller.png";
import hammer from "../../images/hammer.png";

export default makeScene2D(function* (view) {
  const hammerRef = createRef<Img>();
  const controllerRef = createRef<Img>();

  view.add(
    <>
      <Img
        ref={controllerRef}
        src={controller}
        width={550}
        position={[-50, 100]}
      />
      <Img
        ref={hammerRef}
        src={hammer}
        width={1200}
        position={[1000, -200]}
        rotation={40}
      />
    </>
  );

  yield* slideTransition(Direction.Right);

  yield* waitUntil("hammer");

  yield* all(
    hammerRef().position([650, -200], 0.2),
    hammerRef().rotation(-40, 0.5, easeOutBack),
    delay(
      0.2,
      all(
        controllerRef().position([-50, 1500], 0.2, easeOutCubic),
        controllerRef().rotation(6, 0.2)
      )
    )
  );

  yield* waitUntil("day 0");

  yield* all(
    hammerRef().rotation(40, 0.2),
    hammerRef().position([1000, -200], 0.2)
  );

  yield* waitUntil("buildgames_end");
});

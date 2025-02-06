import { Img, makeScene2D } from "@motion-canvas/2d";
import { createRef, easeOutBack } from "@motion-canvas/core";

import blackOpsSix from "../../images/Squid Game BO6.jpg";

export default makeScene2D(function* (view) {
  const blackOpsRef = createRef<Img>();

  view.add(<Img ref={blackOpsRef} src={blackOpsSix} scale={0} />);

  yield* blackOpsRef().scale(0.5, 0.75, easeOutBack);
});

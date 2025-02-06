import { Img, Layout, Rect, makeScene2D } from "@motion-canvas/2d";
import { all, createRef, easeOutBack, waitUntil } from "@motion-canvas/core";

import blackOpsSix from "../../images/Squid Game BO6.jpg";
import glow from "../../shaders/glow.glsl";
import luigisManson from "../../images/luigis mansio.png";
import spongebob from "../../images/spongebob-squarepants-the-patrick-star-game-header.png";

export default makeScene2D(function* (view) {
  const blackOpsRef = createRef<Img>();
  const spongebobRef = createRef<Img>();
  const luigisRef = createRef<Img>();

  view.add(
    <Layout layout direction="column" alignItems="center" width={1000} gap={40}>
      <Img
        ref={blackOpsRef}
        src={blackOpsSix}
        width={0}
        rotation={0}
        radius={20}
        shaders={{ fragment: glow, uniforms: { glowStrength: 0.6 } }}
      />
      <Img
        ref={spongebobRef}
        src={spongebob}
        width={0}
        rotation={0}
        radius={20}
        shaders={{ fragment: glow, uniforms: { glowStrength: 0.25 } }}
      />
      <Img
        ref={luigisRef}
        src={luigisManson}
        width={0}
        rotation={0}
        radius={20}
        shaders={{ fragment: glow, uniforms: { glowStrength: 0.8 } }}
      />
    </Layout>
  );

  yield* all(
    blackOpsRef().width("95%", 0.75, easeOutBack),
    blackOpsRef().rotation(-2, 0.6)
  );

  yield* all(
    luigisRef().width("85%", 0.6, easeOutBack),
    luigisRef().rotation(3, 0.4)
  );

  yield* all(
    spongebobRef().width("105%", 0.4, easeOutBack),
    spongebobRef().rotation(1, 0.4)
  );

  yield* waitUntil("screenshots_end");
});

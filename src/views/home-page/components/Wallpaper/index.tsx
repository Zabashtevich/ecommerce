import { wallpaperLinks } from "@src/fixtures/wallpaper";
import { useState } from "react";
import { FC } from "react";

import {
  Container,
  Thumbnail,
  Wrapper,
  LeftToggler,
  RightToggler,
} from "./style/wallpaper";

const Wallpaper: FC = () => {
  const [activeThumbnail, setActiveThumbnail] = useState(0);

  return (
    <Container>
      <Thumbnail src={`${wallpaperLinks[activeThumbnail]}`} />
      <Wrapper>
        <LeftToggler
          onClick={() => setActiveThumbnail(0)}
          selected={activeThumbnail === 0}
        />
        <RightToggler
          onClick={() => setActiveThumbnail(1)}
          selected={activeThumbnail === 1}
        />
      </Wrapper>
    </Container>
  );
};

export default Wallpaper;

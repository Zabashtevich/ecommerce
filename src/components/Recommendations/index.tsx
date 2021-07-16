import gsap from "gsap";
import { useEffect } from "react";

import {
  Container,
  Title,
  Slider,
  Button,
  LeftArrow,
  Viewport,
  Inner,
  Slide,
  Thumbnail,
  Price,
  Subtitle,
  RightArrow,
} from "./styles/recommendations";

const mockedUrl =
  "https://jolybell.com/storage/tjrqbqb2p8.jpg?preview=&width=101&height=142&quality=100";
const mockedSlides = [
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
  mockedUrl,
];

export default function Recommendations() {
  useEffect(() => {
    gsap.set(".slider-inner", { duration: 0 });
  }, []);

  return (
    <Container>
      <Title>
        РЕКОМЕНДУЕМ К <span>ПОКУПКЕ</span>
      </Title>
      <Slider>
        <Button onClick={() => gsap.to(".slider-inner", { x: "+=225" })}>
          <LeftArrow />
        </Button>

        <Viewport>
          <Inner className="slider-inner">
            {mockedSlides.map((item) => (
              <Slide key={item}>
                <Thumbnail src={item} />
                <Price>300 RUB</Price>
                <Subtitle>Стикеры Дауны</Subtitle>
              </Slide>
            ))}
          </Inner>
        </Viewport>

        <Button
          onClick={() =>
            gsap.to(".slider-inner", {
              x: "-=225",
            })
          }
        >
          <RightArrow />
        </Button>
      </Slider>
    </Container>
  );
}

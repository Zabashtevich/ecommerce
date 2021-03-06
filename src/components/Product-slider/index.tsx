import gsap from "gsap";
import { useRef, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import {
  Container,
  Viewport,
  Slide,
  PrevButton,
  Left,
  NextButton,
  Right,
  Pagination,
  Dot,
  LeftMobileButton,
  RightMobileButton,
} from "./styles/product-slider";

interface ProductSliderProps {
  images: string[];
}

export default function ProductSlider({ images }: ProductSliderProps) {
  const navigationVisible = useRef(images.length > 1);
  const clicks = useRef(0);
  const index = useRef(0);

  const [{ enter, exit }, setOffset] = useState({ enter: 0, exit: 0 });
  const [list, setList] = useState([{ src: images[0] }]);

  function nextSlide() {
    clicks.current++;
    setOffset({ enter: 200, exit: -200 });
    if (images.length - 1 !== index.current) {
      index.current++;
      setList([{ src: images[index.current] }]);
    } else {
      index.current = 0;
      setList([{ src: images[index.current] }]);
    }
  }

  function prevSlide() {
    clicks.current++;
    setOffset({ enter: -200, exit: 200 });
    if (index.current === 0) {
      index.current = images.length - 1;
      setList([{ src: images[index.current] }]);
    } else {
      index.current--;
      setList([{ src: images[index.current] }]);
    }
  }

  function onDotClick(src: string, i: number) {
    if (i > index.current) {
      index.current = i;
      setOffset({ enter: 200, exit: -200 });
      setList([{ src: src }]);
    } else {
      index.current = i;
      setOffset({ enter: -200, exit: 200 });
      setList([{ src: src }]);
    }
  }

  return (
    <Container>
      <TransitionGroup component={Viewport}>
        {list.map(({ src }) => (
          <CSSTransition
            key={`${clicks.current} ${src}`}
            timeout={1000}
            className="fade"
            mountOnEnter
            unmountOnExit
            onEnter={(node: HTMLElement) =>
              gsap.from(node, {
                scale: 0.4,
                zIndex: 100,
                opacity: 0,
                x: enter,
                duration: 1,
              })
            }
            onExit={(node: HTMLElement) =>
              gsap.to(node, {
                scale: 0.4,
                zIndex: 1,
                opacity: 0,
                x: exit,
                duration: 1,
              })
            }
          >
            <Slide src={src} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      {navigationVisible && (
        <>
          <PrevButton onClick={prevSlide}>
            <Left />
          </PrevButton>
          <NextButton onClick={nextSlide}>
            <Right />
          </NextButton>
        </>
      )}

      {navigationVisible && (
        <Pagination>
          <LeftMobileButton onClick={prevSlide}>
            <Left />
          </LeftMobileButton>
          {images.map((item, i) => (
            <Dot
              key={item}
              selected={index.current === i}
              onClick={() => onDotClick(item, i)}
            />
          ))}
          <RightMobileButton onClick={nextSlide}>
            <Right />
          </RightMobileButton>
        </Pagination>
      )}
    </Container>
  );
}

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
  const offset = useRef({ enter: 0, exit: 0 });
  const [{ activeIndex, clicks }, setSliderSettings] = useState({
    clicks: 0,
    activeIndex: 1,
  });
  const [list, setList] = useState([{ src: images[0] }]);

  function nextSlide() {
    offset.current = { enter: 200, exit: -200 };
    if (activeIndex === 1) {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 2 });
      setList([{ src: images[1] }]);
    } else {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 1 });
      setList([{ src: images[0] }]);
    }
  }

  function prevSlide() {
    offset.current = { enter: -200, exit: 200 };
    if (activeIndex === 1) {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 2 });
      setList([{ src: images[1] }]);
    } else {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 1 });
      setList([{ src: images[0] }]);
    }
  }

  return (
    <Container>
      <TransitionGroup component={Viewport}>
        {list.map(({ src }) => (
          <CSSTransition
            key={clicks}
            timeout={1000}
            className="fade"
            mountOnEnter
            unmountOnExit
            onEnter={(node: HTMLElement) =>
              gsap.from(node, {
                scale: 0.4,
                zIndex: 100,
                opacity: 0,
                x: offset.current.enter,
                duration: 1,
              })
            }
            onExit={(node: HTMLElement) =>
              gsap.to(node, {
                scale: 0.4,
                zIndex: 1,
                opacity: 0,
                x: offset.current.exit,
                duration: 1,
              })
            }
          >
            <Slide src={src} />
          </CSSTransition>
        ))}
      </TransitionGroup>

      <PrevButton onClick={prevSlide}>
        <Left />
      </PrevButton>

      <NextButton onClick={nextSlide}>
        <Right />
      </NextButton>

      <Pagination>
        <LeftMobileButton onClick={prevSlide}>
          <Left />
        </LeftMobileButton>
        <Dot />
        <Dot />
        <RightMobileButton onClick={nextSlide}>
          <Right />
        </RightMobileButton>
      </Pagination>
    </Container>
  );
}

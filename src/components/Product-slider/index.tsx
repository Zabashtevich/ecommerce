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
} from "./styles/product-slider";

const mainLink =
  "https://jolybell.com/storage/ngm6sm8lya.png?preview=&width=765&height=841";

const auxLink =
  "https://jolybell.com/storage/cgt40j9mjg.png?width=765&height=843";

export default function ProductSlider() {
  const offset = useRef({ enter: 0, exit: 0 });
  const [{ activeIndex, clicks }, setSliderSettings] = useState({
    clicks: 0,
    activeIndex: 1,
  });
  const [list, setList] = useState([{ src: mainLink }]);

  function nextSlide() {
    offset.current = { enter: 300, exit: -300 };
    if (activeIndex === 1) {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 2 });
      setList([{ src: auxLink }]);
    } else {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 1 });
      setList([{ src: mainLink }]);
    }
  }

  function prevSlide() {
    offset.current = { enter: -300, exit: 300 };
    if (activeIndex === 1) {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 2 });
      setList([{ src: auxLink }]);
    } else {
      setSliderSettings({ clicks: clicks + 1, activeIndex: 1 });
      setList([{ src: mainLink }]);
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
        <Dot />
        <Dot />
      </Pagination>
    </Container>
  );
}

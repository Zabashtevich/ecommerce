import { CSSTransition } from "react-transition-group";
import { FC } from "react";

import { MobileNav } from "@src/components";
import gsap from "gsap";

interface IAnimatedMobileNav {
  mobileNavVisible: boolean;
  setMobileNavVisible: (arg: boolean) => void;
}

const AnimatedMobileNav: FC<IAnimatedMobileNav> = ({
  mobileNavVisible,
  setMobileNavVisible,
}) => {
  function enterAnimation(target: HTMLElement) {
    gsap.from(target.children[0], { opacity: 0, duration: 0.6 });
    gsap.from(target.children[1], {
      duration: 0.6,
      xPercent: 100,
      ease: "power4.out",
    });
  }

  function exitAnimation(target: HTMLElement) {
    gsap.to(target.children[0], { duration: 0.6, opacity: 0 });
    gsap.to(target.children[1], {
      xPercent: 100,
      duration: 0.6,
      ease: "power4.in",
    });
  }

  return (
    <CSSTransition
      in={mobileNavVisible}
      timeout={600}
      mountOnEnter
      unmountOnExit
      appear={true}
      onEnter={enterAnimation}
      onExit={exitAnimation}
    >
      <MobileNav setMobileNavVisible={setMobileNavVisible} />
    </CSSTransition>
  );
};

export default AnimatedMobileNav;

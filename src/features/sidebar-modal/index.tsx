import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";

import { SidebarCard, Sidebar } from "@comps";
import { useAppSelector, useAppDispatch } from "@src/hooks/redux";
import { closeSidebar } from "@src/redux/sidebar-slice";

const SidebarModal: FC = () => {
  const { visible, purchases } = useAppSelector(({ sidebar }) => sidebar);
  const dispatch = useAppDispatch();

  return (
    <CSSTransition
      timeout={{ enter: 1000, exit: 600 }}
      in={visible}
      mountOnEnter
      unmountOnExit
      appear={true}
      onEntering={(target: HTMLElement) => {
        gsap.from(target.children[0], { opacity: 0, duration: 1 });
        gsap.from(target.children[1], {
          duration: 1,
          xPercent: 100,
          ease: "power4.out",
        });
      }}
      onExiting={(target: HTMLElement) => {
        gsap.to(target.children[0], { duration: 0.6, opacity: 0 });
        gsap.to(target.children[1], {
          xPercent: 100,
          duration: 0.6,
          ease: "power4.in",
        });
      }}
    >
      <Sidebar
        closeSidebar={() => {
          dispatch(closeSidebar());
        }}
        renderItem={(item) => <SidebarCard item={item} key={item.id} />}
        items={purchases}
      />
    </CSSTransition>
  );
};

export default SidebarModal;

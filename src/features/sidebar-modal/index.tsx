import { FC } from "react";
import { CSSTransition } from "react-transition-group";
import gsap from "gsap";
import { useEffect } from "react";

import { SidebarCard, Sidebar } from "@comps";
import { useAppSelector, useAppDispatch } from "@src/hooks/redux";
import { close, updateState } from "@src/redux/sidebar-slice";
import useLocalStorage from "../../hooks/useLocalStorage/index";

const SidebarModal: FC = () => {
  const { visible, purchases, totalPrice } = useAppSelector(({ sidebar }) => sidebar);
  const [storagePurchases, updateStorage] = useLocalStorage("purchases");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (storagePurchases) dispatch(updateState(storagePurchases));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateStorage({ purchases, totalPrice });
  }, [purchases, totalPrice]);

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
          dispatch(close());
        }}
        renderItem={(item) => <SidebarCard item={item} key={item.id} />}
        totalPrice={totalPrice}
        items={purchases}
      />
    </CSSTransition>
  );
};

export default SidebarModal;

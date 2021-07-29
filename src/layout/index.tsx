import { Brand, Navigation, Footer } from "@comps/";
import { Header, Content } from "./styles/index";
import { BounceModal } from "@src/features";
import { CareInfo, SizeInfo } from "@src/components";
import { useCareContext, useSizeContext } from "@src/contexts";

export default function AppLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [careVisible, setCareVisible] = useCareContext();
  const [sizeVisible, setSizeVisible] = useSizeContext();

  return (
    <>
      <Header>
        <Brand />
        <Navigation />
      </Header>

      <Content>{children}</Content>

      <BounceModal visible={careVisible} setVisible={setCareVisible}>
        <CareInfo />
      </BounceModal>
      <BounceModal visible={sizeVisible} setVisible={setSizeVisible}>
        <SizeInfo />
      </BounceModal>

      <Footer />
    </>
  );
}

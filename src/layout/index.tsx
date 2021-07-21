import { Brand, Navigation, Footer } from "@comps/";
import { Header, Content } from "./styles/index";
import { BounceModal } from "@src/features";
import { CareInfo, SizeInfo } from "@src/components";

export default function AppLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <>
      <Header>
        <Brand />
        <Navigation />
      </Header>

      <Content>{children}</Content>

      <BounceModal contextKey="careVisible">
        <CareInfo />
      </BounceModal>

      <BounceModal contextKey="sizeVisible">
        <SizeInfo />
      </BounceModal>

      <Footer />
    </>
  );
}

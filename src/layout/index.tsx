import { Brand, Navigation, Footer } from "@comps/";
import { Header, Content } from "./styles/index";
import { BounceModal } from "@src/features";
import { CareInfo, SizeInfo, DetailsPopup } from "@src/components";
import { useCareContext, useSizeContext, useDetailsContext } from "@src/contexts";

export default function AppLayout({ children }: { children: JSX.Element | JSX.Element[] }) {
  const [careVisible, setCareVisible] = useCareContext();
  const [sizeVisible, setSizeVisible] = useSizeContext();
  const [detailsVisble, productItem, setDetailsModal] = useDetailsContext();

  return (
    <>
      <Header>
        <Brand />
        <Navigation />
      </Header>

      <Content>{children}</Content>

      <BounceModal visible={detailsVisble} closeModal={() => setDetailsModal({ visible: false, item: null })}>
        <DetailsPopup product={productItem!} />
      </BounceModal>

      <BounceModal visible={careVisible} closeModal={() => setCareVisible(false)}>
        <CareInfo />
      </BounceModal>

      <BounceModal visible={sizeVisible} closeModal={() => setSizeVisible(false)}>
        <SizeInfo />
      </BounceModal>

      <Footer />
    </>
  );
}

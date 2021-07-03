import { Brand, Navigation, Footer } from "@comps/";
import { Header, Content } from "./styles/index";

export default function AppLayout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  return (
    <>
      <Header>
        <Brand />
        <Navigation />
      </Header>
      <Content>{children}</Content>
      <Footer />
    </>
  );
}

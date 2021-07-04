import Link from "next/link";

import { Container, LinkWrapper, Logo } from "./styles/brand";

export default function Brand() {
  return (
    <Container>
      <Link href="/" passHref>
        <LinkWrapper title="home page">
          <Logo src="/logo.png" />
        </LinkWrapper>
      </Link>
    </Container>
  );
}

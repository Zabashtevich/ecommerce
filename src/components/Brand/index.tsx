import Link from "next/link";
import { FC } from "react";

import { Container, LinkWrapper, Logo } from "./styles/brand";

const Brand: FC = () => {
  return (
    <Container>
      <Link href="/" passHref>
        <LinkWrapper title="home page">
          <Logo src="/logo.png" />
        </LinkWrapper>
      </Link>
    </Container>
  );
};

export default Brand;

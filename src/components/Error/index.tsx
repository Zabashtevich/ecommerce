import NextLink from "next/link";

import { Inner, Container, ErrorIcon, Message, Link } from "./styles/error";

export default function Error() {
  return (
    <Inner>
      <Container>
        <ErrorIcon />
        <Message>
          Oops, something gone wrong, please, return to main page
        </Message>
        <NextLink passHref href="/">
          <Link>Back to the home page</Link>
        </NextLink>
      </Container>
    </Inner>
  );
}

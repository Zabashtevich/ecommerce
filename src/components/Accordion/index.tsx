import { AnimatePresence } from "framer-motion";

import { FAQItem } from "@src/interfaces/fixtures";
import {
  Wrapper,
  Header,
  Container,
  Row,
  Question,
  Answer,
} from "./styles/faq";

interface IAccordion {
  name: string;
  visible: boolean;
  items: FAQItem[];
  setIsVisible: (arg: (prev: boolean) => boolean) => void;
}

export default function Accordion({
  name,
  visible,
  items,
  setIsVisible,
}: IAccordion) {
  return (
    <Wrapper>
      <Header onClick={() => setIsVisible((prev) => !prev)}>{name}</Header>
      <AnimatePresence>
        {visible && (
          <Container
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 2 }}
          >
            {items.map(({ question, answer }) => (
              <Row key={question}>
                <Question>{question.toUpperCase()}</Question>
                <Answer>{answer}</Answer>
              </Row>
            ))}
          </Container>
        )}
      </AnimatePresence>
    </Wrapper>
  );
}

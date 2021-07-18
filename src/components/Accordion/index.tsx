import { AnimatePresence } from "framer-motion";

import { FAQItem } from "@src/interfaces/fixtures";
import {
  Outer,
  Container,
  Wrapper,
  Header,
  Inner,
  Row,
  Question,
  Answer,
} from "./styles/faq";
import { useState } from "react";

interface IAccordion {
  faqdata: {
    name: string;
    questions: FAQItem[];
  };
}

export default function Accordion({ faqdata }: IAccordion) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Outer>
      <Container>
        <Wrapper>
          <Header onClick={() => setIsVisible((prev) => !prev)}>
            {faqdata.name.toUpperCase()}
          </Header>
          <AnimatePresence>
            {isVisible && (
              <Inner
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {faqdata.questions.map(({ question, answer }) => (
                  <Row key={question}>
                    <Question>{question}</Question>
                    <Answer>{answer}</Answer>
                  </Row>
                ))}
              </Inner>
            )}
          </AnimatePresence>
        </Wrapper>
      </Container>
    </Outer>
  );
}

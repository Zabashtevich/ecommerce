import { useState } from "react";

import { Accordion } from "@src/components";
import { Container, Inner } from "./styles/faq";
import { FAQItem } from "../../interfaces/fixtures";

interface IFAQ {
  faqdata: {
    name: string;
    questions: FAQItem[];
  };
}

export default function FAQ({ faqdata }: IFAQ) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Inner>
      <Container>
        <Accordion
          name={faqdata.name}
          visible={isVisible}
          items={faqdata.questions}
          setIsVisible={setIsVisible}
        />
      </Container>
    </Inner>
  );
}

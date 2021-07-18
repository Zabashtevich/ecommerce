import { Accordion } from "@src/components";
import { Container } from "./styles/faq";
import { FAQItem } from "../../interfaces/fixtures";
import { useState } from "react";

interface IFAQ {
  faqitems: FAQItem[];
}

export default function FAQ({ faqitems }: IFAQ) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container>
      <Accordion
        name="Общие вопросы"
        visible={isVisible}
        items={faqitems}
        setIsVisible={setIsVisible}
      />
    </Container>
  );
}

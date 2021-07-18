import { firebase } from "@src/libs";
import { FAQItem } from "../interfaces/fixtures";
import { Accordion } from "@src/components";

interface IFAQPage {
  data: {
    data: {
      name: string;
      questions: FAQItem[];
    };
  };
}

export default function FAQPage({ data }: IFAQPage) {
  return (
    <>
      <Accordion faqdata={data.data} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await firebase
      .firestore()
      .collection("products")
      .doc("faq")
      .get();

    return {
      props: {
        data: response.data(),
      },
    };
  } catch {
    return {
      redirect: {
        permanent: false,
        destination: "/error",
      },
    };
  }
}

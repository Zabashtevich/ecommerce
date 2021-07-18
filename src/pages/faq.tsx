import { FAQ } from "@src/features";
import { firebase } from "@src/libs";
import { FAQItem } from "../interfaces/fixtures";

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
      <FAQ faqdata={data.data} />
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
  } catch (error) {
    if (error) {
      return {
        redirect: {
          permanent: false,
          destination: "/error",
        },
      };
    }
  }
}

//TODO redirect

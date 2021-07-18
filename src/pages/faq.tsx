import { FAQ } from "@src/features";
import { firebase } from "@src/libs";
import { FAQItem } from "../interfaces/fixtures";

interface IFAQPage {
  data: { items: FAQItem[] };
}

export default function FAQPage({ data }: IFAQPage) {
  return (
    <>
      <FAQ faqitems={data.items} />
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
      console.log(error);
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

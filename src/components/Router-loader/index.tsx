import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import { Container, Overlay, Spinner, Timeline } from "./styles/router-loader";

export default function RouterLoader() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => setLoading(true));
    router.events.on("routeChangeComplete", () => setLoading(false));
    router.events.on("routeChangeError", () => setLoading(false));
  }, [router]);

  return (
    <AnimatePresence>
      {loading && (
        <Container>
          <Overlay initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <Timeline
            initial={{ width: 0 }}
            animate={{ width: "80%" }}
            transition={{ duration: 5 }}
            exit={{ width: "100%", transition: { duration: 0.2 } }}
          />
          <Spinner src={"/spinner.svg"} exit={{ opacity: 0 }} />
        </Container>
      )}
    </AnimatePresence>
  );
}

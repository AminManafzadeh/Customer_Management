import { useEffect, useState } from "react";
import CustomerEditPage from "../../components/templates/CustomerEditPage";
import { useRouter } from "next/router";

function Index() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const {
    query: { customerId },
    isReady,
  } = router;

  useEffect(() => {
    if (isReady) {
      fetch(`/api/customer/${customerId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [customerId, isReady]);

  if (data) return <CustomerEditPage data={data} id={customerId} />;
}

export default Index;

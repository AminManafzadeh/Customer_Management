import connectDB from "../utils/connectDB";
import Customer from "../models/Customer";
import HomePage from "../components/templates/HomePage";

function Index({ customers }) {
  console.log(customers);
  return (
    <div>
      <HomePage data={customers} />
    </div>
  );
}

export default Index;

export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

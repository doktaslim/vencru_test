import Layout from "../../components/layout";
import Billing from "./billing";
import Header from "./header";
import PaymentMethod from "./payment-method";
import Tabs from "./tabs";

export default function Settings() {
  return (
    <Layout>
      <div className="overflow-y-auto scroll h-[100vh] p-4 md:px-7 space-y-7">
        <Header />
        <Tabs />
        <PaymentMethod />
        <Billing />
      </div>
    </Layout>
  );
}

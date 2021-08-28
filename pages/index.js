import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/fixed/HeroSearch";

export default function Index() {
  return (
    <Layout>
      <div className="mx-auto">
        <Hero />
      </div>
    </Layout>
  );
}

import LandingPage from "@/components/LandingPage/LandingPage";
import "./globals.css";
import Layout from "../components/Layout/Layout";

export default async function Home() {
  return (
    <div>
      <Layout>
        <LandingPage />
      </Layout>
    </div>
  );
}

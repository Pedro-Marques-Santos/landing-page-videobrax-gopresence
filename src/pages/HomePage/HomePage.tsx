import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { IntroCard } from "../../components/IntroCard/IntroCard";
import { MediaShowcase } from "../../components/MediaShowcase/MediaShowcase";
import { OverviewSection } from "../../components/OverviewSection/OverviewSection";
import { Products } from "../../components/Products/Products";
import "./HomePage.scss";

export function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__hero-wrapper">
        <Header />
        <Hero />
      </section>
      <IntroCard />
      <OverviewSection />
      <Products />
      <MediaShowcase />
    </main>
  );
}

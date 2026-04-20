import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Hero } from "../../components/Hero/Hero";
import { IntroCard } from "../../components/IntroCard/IntroCard";
import { LiveSection } from "../../components/LiveSection/LiveSection";
import { MediaShowcase } from "../../components/MediaShowcase/MediaShowcase";
import { OverviewSection } from "../../components/OverviewSection/OverviewSection";
import { Products } from "../../components/Products/Products";
import { RevealOnScroll } from "../../components/RevealOnScroll/RevealOnScroll";
import "./HomePage.scss";

export function HomePage() {
  return (
    <main className="home-page">
      <section className="home-page__hero-wrapper home-page__enter home-page__enter--hero">
        <Header />
        <Hero />
      </section>

      <RevealOnScroll delay={0}>
        <IntroCard />
      </RevealOnScroll>

      <RevealOnScroll delay={40}>
        <LiveSection />
      </RevealOnScroll>

      <RevealOnScroll delay={80}>
        <OverviewSection />
      </RevealOnScroll>

      <RevealOnScroll delay={120}>
        <Products />
      </RevealOnScroll>

      <RevealOnScroll delay={160}>
        <MediaShowcase />
      </RevealOnScroll>

      <RevealOnScroll delay={200}>
        <Footer />
      </RevealOnScroll>
    </main>
  );
}

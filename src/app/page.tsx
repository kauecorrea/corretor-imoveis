import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Differentials } from "@/components/sections/Differentials";
import { Properties } from "@/components/sections/Properties";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { client } from "@/sanity/client";
import { getFeaturedPropertiesQuery, getPropertiesQuery } from "@/sanity/queries";

// Essa página será exportada de forma estática, mas fará a requisição para o Sanity durante o build
export default async function Home() {
  const properties = await client.fetch(getPropertiesQuery);
  const featuredProperties = await client.fetch(getFeaturedPropertiesQuery);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Differentials />
        <Properties initialProperties={properties} />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import { Announcements, About, AboutIITR } from "@/components/About";
import { Themes, ObjectivesAudience } from "@/components/Themes";
import { ImportantDates, Speakers, Committee } from "@/components/People";
import Registration from "@/components/Registration";
import { Venue, Contact, Footer } from "@/components/VenueContact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <Announcements />
        <About />
        <AboutIITR />
        <Themes />
        <ObjectivesAudience />
        <ImportantDates />
        <Speakers />
        <Committee />
        <Registration />
        <Venue />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

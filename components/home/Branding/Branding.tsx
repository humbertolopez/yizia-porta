import CardsBlock from "../CardsBlock/CardsBlock";
import data from "@/data/branding.json";
import TitleArea from "../TitleArea/TitleArea";

export default function Branding() {
  return (
    <section>
      <TitleArea
        title="Branding Project Showcase"
        description="Explore innovative branding designs that tell a story."
      />
      <CardsBlock projects={data} />
    </section>
  );
}

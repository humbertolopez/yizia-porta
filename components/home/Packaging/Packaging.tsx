import TitleArea from "../TitleArea/TitleArea";
import data from "@/data/packaging_projects.json";
import CardsBlock from "../CardsBlock/CardsBlock";

export default function Packaging() {
  return (
    <section>
      <TitleArea
        title="Packaging Project Showcase"
        description="Explore innovative branding designs that tell a story."
      />
      <CardsBlock projects={data} />
    </section>
  );
}

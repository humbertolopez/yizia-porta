import TitleArea from "../TitleArea/TitleArea";
import data from "@/data/uxui_projects.json";
import CardsBlock from "../CardsBlock/CardsBlock";

export default function UxUi() {
  return (
    <section>
      <TitleArea
        title="UX/UI Project Showcase"
        description="Explore innovative ux/ui designs that tell a story."
      />
      <CardsBlock projects={data} />
    </section>
  );
}

import Card from "@/components/general/Card/Card";
import TitleArea from "../TitleArea/TitleArea";
import data from "@/data/packaging_projects.json";

export default function Packaging() {
  return (
    <section>
      <TitleArea
        title="Packaging Project Showcase"
        description="Explore innovative packaging designs that tell a story."
      />
      <div className="container mx-auto w-full gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {data &&
          data.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              imageWidth={project.imageWidth}
              imageHeight={project.imageHeight}
              linkUrl={project.linkUrl}
              linkLabel={project.linkLabel}
            />
          ))}
      </div>
    </section>
  );
}

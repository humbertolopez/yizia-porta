import Card from "@/components/general/Card/Card";

type Project = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  linkUrl: string;
  linkLabel: string;
  tagline?: string;
  tags?: string[];
};

export default function CardsBlock({ projects }: { projects: Project[] }) {
  return (
    <div className="container mx-auto w-full gap-10 columns-1 md:columns-2 lg:columns-3">
      {projects &&
        projects.map((project: Project, index: number) => (
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
  );
}

import Card from "@/components/general/Card/Card";

export default function Packaging() {
  return (
    <section>
      <div className="container mx-auto py-28 w-3/4">
        <h2 className="text-center font-poppins text-5xl/tight">
          Packaging Project Showcase
        </h2>
        <p className="text-center font-signika text-lg/tight">
          Explore innovative packaging designs that tell a story.
        </p>
      </div>
      <div className="container mx-auto w-full flex gap-10">
        <Card
          title="AccuTec Pro: Cookie Jar"
          description="Result: Reinforced perceived value through a collectible-style format, while aligning with the broader packaging redesign system that optimized ink usage and visual consistency across SKUs."
          tags={["Brand Identity", "Packaging Design"]}
          imageSrc="/img/packaging/cookiejar.png"
          imageAlt="AccuTec Pro: Cookie Jar"
          imageWidth={416}
          imageHeight={416}
          linkUrl="#"
          linkLabel="View Project"
        />
        <Card
          title="AccuTec Pro: Premium Line"
          description="Result: Elevated brand perception through refined visual hierarchy and expanded color use — distinguishing the Infinity sub-line while staying within core packaging constraints."
          tags={["Brand Identity", "Packaging Design"]}
          imageSrc="/img/packaging/premiumline.png"
          imageAlt="AccuTec Pro: Premium Line"
          imageHeight={234}
          imageWidth={416}
          linkUrl="#"
          linkLabel="View Project"
        />
        <Card
          title="AccuTec Pro: Packaging Built From the Ground Up"
          description="Designed a scalable, two-ink packaging system across 200+ SKUs — reducing production complexity and generating an estimated $30K+ in annual printing savings while improving brand consistency and shelf impact."
          tags={["Brand Identity", "Packaging Design"]}
          imageSrc="/img/packaging/fromthegroundup.png"
          imageAlt="AccuTec Pro: Packaging Built From the Ground Up"
          imageHeight={416}
          imageWidth={416}
          linkUrl="#"
          linkLabel="View Project"
        />
      </div>
    </section>
  );
}

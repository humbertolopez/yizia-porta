import Card from "@/components/general/Card/Card";

export default function DesignSystemsThatWork() {
  return (
    <section>
      <div className="container mx-auto py-28 w-3/4">
        <p className="text-center font-signika text-lg/tight">Design</p>
        <h2 className="text-center font-poppins text-5xl/tight">
          Design Systems That Work — and Make People Feel
        </h2>
        <p className="text-center font-signika text-lg/tight">
          From physical packaging to digital journeys, I create design solutions
          that balance function, beauty, and purpose.
        </p>
      </div>
      <div className="container mx-auto w-full flex gap-10">
        <Card
          title="Boxes, Blisters & Bold Statements"
          description="Packaging is more than wrapping — it’s storytelling in 3D. I bring
              materials, ink, and structure together to speak the language of the product before anyone opens the box."
          tagline="Packaging"
          imageSrc="/img/designsystems/packaging.png"
          imageAlt="Packaging"
          imageWidth={416}
          imageHeight={233}
          linkUrl="#"
          linkLabel="See"
        />
        <Card
          title="Designing Interfaces That Feel Human"
          description="I design digital spaces you don’t have to fight with — just flow through. Whether it’s navigating an airport or booking a room, the goal is always clarity, ease, and delight."
          tagline="UX/UI"
          imageSrc="/img/designsystems/uxui.png"
          imageAlt="UX/UI"
          imageWidth={416}
          imageHeight={233}
          linkUrl="#"
          linkLabel="Explore"
        />
        <Card
          title="From Blank Canvas to Brand Soul"
          description="Whether it’s a sleek logotype or a full visual universe, I craft brand identities that know who they are — and aren’t afraid to show it."
          tagline="Brand Identity"
          imageSrc="/img/designsystems/brand.png"
          imageAlt="Brand Identity"
          imageWidth={416}
          imageHeight={233}
          linkUrl="#"
          linkLabel="Discover"
        />
      </div>
    </section>
  );
}

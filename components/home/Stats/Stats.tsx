export default async function Stats() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 py-28 px-5 gap-9">
        <div>
          <p className="font-signika text-base font-semibold">Experience</p>
          <h2 className="font-poppins text-5xl font-normal leading-snug">
            Impact in Numbers
          </h2>
        </div>
        <div className="col-span-3 grid grid-cols-3 gap-9">
          <div className="col-span-3">
            <h5 className="font-signika text-lg font-bold">
              Behind every project, there’s measurable impact
            </h5>
            <p className="font-signika text-lg">
              These are some of the results I’ve delivered — in cost savings,
              time efficiency, and real-world implementation.
            </p>
          </div>
          <div>
            <p className="font-poppins text-5xl font-normal leading-relaxed">
              $124K+
            </p>
            <p className="font-signika text-base">
              Estimated savings in packaging production.
            </p>
          </div>
          <div>
            <p className="font-poppins text-5xl font-normal leading-relaxed">
              60%
            </p>
            <p className="font-signika text-base">
              Reduction in task time through interface redesign.
            </p>
          </div>
          <div>
            <p className="font-poppins text-5xl font-normal leading-relaxed">
              200+
            </p>
            <p className="font-signika text-base">
              SKUs redesigned from scratch across multiple product lines.
            </p>
          </div>
          <div className="col-span-3">
            <p className="font-poppins text-5xl font-normal leading-relaxed">
              | 100% | 6+ |
            </p>
            <p className="font-signika text-base">
              Positive user feedback in usability testing | Industries served:
              energy, retail, tools, e-commerce, food, and tech.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

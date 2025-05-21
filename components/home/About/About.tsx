import Image from "next/image";

export default async function About() {
  return (
    <section>
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-4 py-28 px-5 gap-9">
        <div className="grid grid-cols-1 sm:grid-cols-3 col-span-3 gap-9">
          <div className="col-span-3">
            <p className="font-signika text-base font-semibold">
              Community & Tech Advocacy
            </p>
            <h2 className="font-poppins text-5xl font-normal leading-snug">
              Community-Driven. Tech-Rooted. Impact-Oriented.
            </h2>
          </div>
          <div>
            <p className="font-poppins text-5xl font-normal leading-relaxed">
              +50
            </p>
            <p className="font-signika text-base">Events Organized</p>
          </div>
          <div>
            <p className="font-poppins text-5xl font-normal leading-relaxed">
              +6000
            </p>
            <p className="font-signika text-base">Attendees reached</p>
          </div>
          <div>
            <p className="font-poppins text-5xl font-normal leading-relaxed">
              +10
            </p>
            <p className="font-signika text-base">Years of community work</p>
          </div>
          <div className="grid grid-cols-2 col-span-3 gap-9">
            <div>
              <Image
                src={"/img/icons/techwo.png"}
                width={48}
                height={48}
                alt="TechWo"
              />
              <h4 className="font-poppins text-xl leading-loose my-1.5">
                TechWo
              </h4>
              <p className="font-signika text-base leading-relaxed">
                Beyond design, I’ve spent over a decade actively contributing to
                the tech community in Mexico. I led a women-in-tech collective
                for more than four years, hosting monthly talks focused on code
                and development, and organizing anniversary events that brought
                together over 400 women from across the country.
              </p>
            </div>
            <div>
              <Image
                src={"/img/icons/hg.png"}
                width={48}
                height={48}
                alt="HackerGarage"
              />
              <h4 className="font-poppins text-xl leading-loose my-1.5">
                HackerGarage
              </h4>
              <p className="font-signika text-base leading-relaxed">
                I’ve also been deeply involved in large-scale events like Talent
                Land (formerly Campus Party), and served as a core organizer at
                Hacker Garage — a cornerstone space for tech experimentation and
                meetups in Guadalajara.
              </p>
            </div>
            <div className="col-span-2">
              <Image
                src={"/img/icons/maker.png"}
                width={48}
                height={48}
                alt="Maker Faire"
              />
              <h4 className="font-poppins text-xl leading-loose my-1.5">
                Maker Faire
              </h4>
              <p className="font-signika text-base leading-relaxed">
                In 2019, I joined the official organizing committee of Maker
                Faire Guadalajara, a licensed edition of the global Maker Faire
                movement, welcoming over 5,000 attendees across several days of
                hands-on innovation and creative technology.
              </p>
              <p className="font-signika text-base leading-relaxed">
                These experiences have shaped how I lead, collaborate, and
                design with purpose.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <Image src={"/img/yizia.jpg"} width={440} height={988} alt="Yizia" />
        </div>
      </div>
    </section>
  );
}

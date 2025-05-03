import Image from "next/image";
import Link from "next/link";

type CardProps = {
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

export default function Card({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  linkUrl,
  linkLabel,
  tagline,
  tags,
}: CardProps) {
  return (
    <div className="w-1/3 relative">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-auto"
      />
      <div className="p-10">
        {tagline && (
          <p className="font-signika text-base font-semibold mb-3">{tagline}</p>
        )}
        <h3 className="font-poppins text-3xl mb-3">{title}</h3>
        <p className="font-signika text-base mb-4">{description}</p>
        {tags && (
          <div className="flex gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2.5 py-1 rounded-sm border border-gray-300 text-sm font-signika font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <Link
          href={linkUrl}
          className="font-signika font-medium after:content-['>'] after:ml-4"
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  );
}

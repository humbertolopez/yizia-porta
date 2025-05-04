type TitleAreaProps = {
  title: string;
  tagline?: string;
  description: string;
};

export default function TitleArea({
  title,
  tagline,
  description,
}: TitleAreaProps) {
  return (
    <div className="container mx-auto py-28 px-5 md:px-0 w-full md:w-3/4">
      {tagline && (
        <p className="text-center font-signika text-lg/tight mb-4">{tagline}</p>
      )}
      <h2 className="text-center font-poppins text-5xl/tight">{title}</h2>
      <p className="text-center font-signika text-lg/tight mt-4">
        {description}
      </p>
    </div>
  );
}

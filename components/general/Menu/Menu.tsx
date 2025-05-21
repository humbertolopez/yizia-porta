import Image from "next/image";

export default function Menu() {
  return (
    <header className="bg-white py-3">
      <div className="container flex w-full mx-auto items-center flex-row justify-between">
        <Image
          src="/img/yizia-logo.png"
          alt="Yizia Portfolio"
          width={81}
          height={55}
        />
        <ul className="flex gap-4 font-signika">
          <li className="flex items-center justify-between">
            About me / Creative Curiosities
          </li>
          <li className="flex items-center justify-between">Contact me</li>
        </ul>
      </div>
    </header>
  );
}

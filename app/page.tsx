import HeroArea from "@/components/home/HeroArea/HeroArea";
import DesignSystemsThatWork from "@/components/home/DesignSystemsThatWork/DesignSystemsThatWork";
import Packaging from "@/components/home/Packaging/Packaging";
import UxUi from "@/components/home/UxUi/UxUi";
import Branding from "@/components/home/Branding/Branding";

export default function Home() {
  return (
    <>
      <HeroArea />
      <DesignSystemsThatWork />
      <Packaging />
      <UxUi />
      <Branding />
    </>
  );
}

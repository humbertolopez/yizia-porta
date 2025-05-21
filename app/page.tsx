import HeroArea from "@/components/home/HeroArea/HeroArea";
import DesignSystemsThatWork from "@/components/home/DesignSystemsThatWork/DesignSystemsThatWork";
import Packaging from "@/components/home/Packaging/Packaging";
import UxUi from "@/components/home/UxUi/UxUi";
import Branding from "@/components/home/Branding/Branding";
import Menu from "@/components/general/Menu/Menu";
import Stats from "@/components/home/Stats/Stats";

export default function Home() {
  return (
    <>
      <Menu />
      <HeroArea />
      <Stats />
      <DesignSystemsThatWork />
      <Packaging />
      <UxUi />
      <Branding />
    </>
  );
}

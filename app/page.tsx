import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/HeroSection";
import PrologueSection from "@/components/PrologueSection";
import SiteContextSection from "@/components/SiteContextSection";
import ActiveSeniorSection from "@/components/ActiveSeniorSection";
import PauseConnectPulseSection from "@/components/PauseConnectPulseSection";
import VerticalProgramSection from "@/components/VerticalProgramSection";
import UrbanPromenadeSection from "@/components/UrbanPromenadeSection";
import RampSocialSpineSection from "@/components/RampSocialSpineSection";
import WellnessMaruSection from "@/components/WellnessMaruSection";
import TinyTownSection from "@/components/TinyTownSection";
import PlansGallery from "@/components/PlansGallery";
import SectionsGallery from "@/components/SectionsGallery";
import RenderDiagramSection from "@/components/RenderDiagramSection";
import EpilogueSection from "@/components/EpilogueSection";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PrologueSection />
        <SiteContextSection />
        <ActiveSeniorSection />
        <PauseConnectPulseSection />
        <VerticalProgramSection />
        <UrbanPromenadeSection />
        <RampSocialSpineSection />
        <WellnessMaruSection />
        <TinyTownSection />
        <PlansGallery />
        <SectionsGallery />
        <RenderDiagramSection />
        <EpilogueSection />
      </main>
    </>
  );
}

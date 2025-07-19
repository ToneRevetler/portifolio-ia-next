import Initial from "../../components/Hero"
import ProjectSection from "../../components/ProjectSection"
import AboutMe from "../../components/AboutMe"
import ButtonBackToTop from "../../components/ButtonBackToTop"
import { InfinityScroll } from "../../components/InfinityScroll/InfinityScroll"
import ExperienceAccordion from "@/../components/Accordion/Accordion"

export default function Home() {
  return (<>
    <Initial />
    < ProjectSection />
    < ExperienceAccordion />
    < InfinityScroll />
    <AboutMe />
    <ButtonBackToTop />
  </>
  );
}

import Initial from "../../components/Hero"
import ProjectSection from "../../components/ProjectSection"
import AboutMe from "../../components/AboutMe"
import ButtonBackToTop from "../../components/ButtonBackToTop"
import ExperienceAccordion from "@/../components/Accordion/Accordion"
import ContactSection from "../../components/ContactSection"

export default function Home() {
  return (<>
    <Initial />
    < ProjectSection />
    < ExperienceAccordion />
    <AboutMe />
    <ContactSection />
    <ButtonBackToTop />
  </>
  );
}

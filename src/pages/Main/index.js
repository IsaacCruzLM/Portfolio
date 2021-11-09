import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Summary from "../../components/Summary";
import Skills from "../../components/Skills";
import Journey from "../../components/Journey";
import ProjectsSlider from "../../components/ProjectsSlide";
import ContactMe from "../../components/ContactMe";

function Main() {
  return (
    <main>
      <Header />
      <Introduction />
      <Summary />
      <Skills />
      <Journey />
      <ProjectsSlider />
      <ContactMe />
    </main>
  );
}

export default Main;

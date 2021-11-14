import Header from "../../components/Header";
import Introduction from "../../components/Introduction";
import Summary from "../../components/Summary";
import Skills from "../../components/Skills";
import Journey from "../../components/Journey";
import ProjectsSlider from "../../components/ProjectsSlide";
import ContactMe from "../../components/ContactMe";
import Footer from "../../components/Footer";
import ScrollUp from "../../components/ScrollUp";

function Main() {

  return (
    <main className="main">
      <Header />
      <Introduction />
      <Summary />
      <Skills />
      <Journey />
      <ProjectsSlider />
      <ContactMe />
      <Footer />
      <ScrollUp />
    </main>
  );
}

export default Main;

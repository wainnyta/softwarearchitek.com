import Projects from "../components/pages/index/Projects";
import {Container} from "@chakra-ui/react";
import defaultConfig from "../components/AppSEO";
import {NextSeo} from "next-seo";

const ProjectsPage = ({onOpen, isOpen, onClose}) => {
  return (
    <>
      <NextSeo
        title={"Projects | " + defaultConfig.title}
      />
      <div>
        <main>
          <Container maxW="container.lg" px={{base: 6, xl: 2, lg: 4}} mt={12}>
            <Projects
              onOpen={onOpen}
              isOpen={isOpen}
              onClose={onClose}
            />
          </Container>
        </main>
      </div>
    </>
  );
}

export default ProjectsPage;
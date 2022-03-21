import Head from "next/head";
import {Container, Divider, useDisclosure} from "@chakra-ui/react";

import Stack from "components/pages/index/Stack";
import Timeline from "components/pages/index/Timeline";
import Profile from "components/pages/index/Profile";
import Projects from "../components/pages/index/Projects";
import {useState} from "react";
import ModalContact from "../components/pages/ModalContact";
import Process from "../components/pages/index/Process";
import Services from "../components/pages/index/Services";
import {NextSeo} from "next-seo";

export default function Home({initialValues, setInitialValues, isOpen, onOpen, onClose}) {

  return (
    <div>
      <main>
        <Container maxW="container.lg" mt={["5", "10"]} px={{base: 6, xl: 2, lg: 4}}>
          <Profile isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
          <Divider my={10} />
          {/*<Projects isOpen={isOpen} onOpen={onOpen} onClose={onClose} />*/}
          {/*<Process isOpen={isOpen} onOpen={onOpen} onClose={onClose} />*/}
          <Services
            isOpen={isOpen} onOpen={onOpen} onClose={onClose}
            setInitialValues={setInitialValues} initialValues={initialValues} />
          {/*<Stack />*/}

        </Container>
      </main>
    </div>
  );
}

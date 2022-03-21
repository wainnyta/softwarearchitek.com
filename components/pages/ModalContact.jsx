import {
  Box,
  Button, Container,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import {ContactFormik} from "../ContactFormik";

const ModalContact = ({onClose, isOpen, onOpen, initialValues, setInitialValues}) => {

  return <>
    <Modal
      onClose={onClose}
      onOpen={onOpen} size={'full'}
      isOpen={isOpen}
    >
      <ModalOverlay />
      <ModalContent mt={0} bgColor={useColorModeValue("#gray.50", "gray.800")}>
        <ModalHeader></ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container maxW="container.lg" px={{base: 6, md: 0}}>
            <ContactFormik
              initialValues={initialValues}
              setInitialValues={setInitialValues}
            />
          </Container>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  </>
}

export default ModalContact;
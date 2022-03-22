import {
  Box,
  Button, Container, Flex, IconButton, Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, Text, useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import {ContactFormik} from "../ContactFormik";
import {RemoveScroll} from "react-remove-scroll";
import {FaArrowLeft} from "react-icons/fa";

const ModalContact = ({onClose, isOpen, onOpen, initialValues, setInitialValues}) => {

  return <>
    {isOpen && <RemoveScroll>
        <Box
          bgColor={useColorModeValue("gray.50", "gray.800")}
          style={{
            zIndex: 10,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          <Container maxW="container.lg" px={{base: 6, md: 0}} pb={20}>
            <Box
              position={"-webkit-sticky"}
              position={"sticky"}
              top={0}
              zIndex={11}
              bgColor={useColorModeValue("gray.50", "gray.800")}
              py={6}
            >
              <Link
                onClick={onClose}
                variant={"ghost"}
                fontSize={"20px"}
                display={"flex"}
                style={{
                  alignItems: "center"
                }}
                pl={{base: 0, md: 6}}
              >
                <FaArrowLeft color={useColorModeValue("#32A0DB", "#CFEDFB")} />
                <Text pl={2} color={useColorModeValue("linkedin.500", "linkedin.100")}>Back</Text>
              </Link>
            </Box>

            <ContactFormik
              initialValues={initialValues}
              setInitialValues={setInitialValues}
              isModal={true}
            />
          </Container>


        </Box>
    </RemoveScroll> }
  </>
}

export default ModalContact;
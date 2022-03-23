import {
  Box, Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select, SlideFade, Textarea,
  useColorModeValue
} from "@chakra-ui/react";
import Paragraph from "../components/Paragraph";
import {ContactFormik} from "../components/ContactFormik";

const Contact = () => {
  const initialValues = {
    name: '',
    email: '',
    topic: 'Web Development',
    budget: 'Under $500',
    message: '',
  };

  return (
    <div>
      <main>
          <ContactFormik initialValues={initialValues} isModal={false} />
      </main>
    </div>
  );
}

export default Contact;
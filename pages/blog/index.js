import { Container } from "@chakra-ui/react";
import Warn from "../../components/Warn";

const Blog = () => {
  return (
    <Container>
      <Warn
        message="This page doesn't exist yet, it will be in the future"
        type="empty"
      />
    </Container>
  );
};

export default Blog;

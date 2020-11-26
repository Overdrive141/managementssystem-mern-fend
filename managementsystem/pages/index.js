import Nav from "../components/Nav";
import { Flex } from "@chakra-ui/react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <Flex direction="column" align="center" maxW={{ xl: "1920px" }} m="0 auto">
      <Nav />
      <Hero />
    </Flex>
  );
}

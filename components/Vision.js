import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }}>
          <Heading>Our Vision</Heading>
          <Text color={"gray.500"}>
            Today, PTVAI’s vision is to become first Indonesia’s local
            engineering company providing the valve automation and valve service
            with highest quality and reliability to meet customer’s highest
            expectation without compromising safety.
          </Text>
        </Stack>
      </Container>
    </>
  );
}

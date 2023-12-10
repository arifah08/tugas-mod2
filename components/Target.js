import { Box, Heading, Container, Text, Stack } from "@chakra-ui/react";

export default function Target() {
  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}
        >
          <Heading>Our Target</Heading>
          <Text color={"gray.500"}>
            PTVAI aims to become the first and top Indonesian company as “one
            solution for valve automation and services” by providing the supply
            and services for valves, actuators, solenoid valves, limit switches
            and other accessories including the mounting, calibration, and
            testing with a single source responsibility and faster delivery time
            as the company is the sole agent/distributor and stockist for <br />
            <a href="/products"> Our Products </a>
          </Text>
        </Stack>
      </Container>
    </>
  );
}

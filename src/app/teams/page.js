import {
  SimpleGrid,
  Heading,
  Container,
  Stack,
  Box,
  Text,
  Center,
  Image,
  Card,
  CardBody,
} from "@chakra-ui/react";

export default function Teams() {
  return (
    <Box
      w="100%"
      h="100%"
      bgGradient={[
        "linear(to-tr, teal.300, yellow.400)",
        "linear(to-t, blue.200, teal.500)",
        "linear(to-b, orange.100, purple.300)",
      ]}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
        textAlign={"center"}
        py={{ base: 5, md: 5 }}
      >
        Our Teams
      </Heading>
      <Container maxW={"3xl"} py={{ base: 20, md: 20 }}>
        <SimpleGrid columns={2} spacing={10}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/men/7.jpg"
                alt="Agung"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Agung</Heading>
                <Text>Product Manager</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/women/52.jpg"
                alt="Septiana"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Septiana</Heading>
                <Text>Product Manager</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
        <br />
        <SimpleGrid columns={3} spacing={10}>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/women/90.jpg"
                alt="Arifah"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Arifah</Heading>
                <Text>Product Engineer</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/women/0.jpg"
                alt="Ayu"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Ayu</Heading>
                <Text>Product Engineer</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/women/63.jpg"
                alt="Ratih"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Ratih</Heading>
                <Text>Product Engineer</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/women/60.jpg"
                alt="Ara"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Ara</Heading>
                <Text>Product Engineer</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/men/94.jpg"
                alt="Dharma"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Dharma</Heading>
                <Text>Product Engineer</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://randomuser.me/api/portraits/women/51.jpg"
                alt="Gisna"
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading size="md">Gisna</Heading>
                <Text>Product Engineer</Text>
                <Text>Email: mail@gmail.com</Text>
              </Stack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

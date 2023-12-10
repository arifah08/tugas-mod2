import Head from "next/head";
import { Box, Heading, Container, Text, Stack, Image } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      bgImage={
        "https://ptvai.co.id/wp-content/uploads/2022/11/IMG20221117104942-scaled.jpg"
      }
    >
      {/* <Image src="https://ptvai.co.id/wp-content/uploads/2022/11/IMG20221117104942-scaled.jpg" /> */}
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 20 }}
        >
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Valve Automation Indonesia
          </Text>
          <Text color={"white"}>
            PT. Valve Automation Indonesia (PTVAI) was incorporated in March
            2008. Starting the business with workshop in Daan Mogot area with
            focusing in doing the valve automation and valve services for oil &
            gas industries, pulp & paper industries, energy industries,
            petrochemical industries as well as general industries. Due to rapid
            growth of the company and market demands, in year 2010, PTVAI’s
            workshop has moved to a bigger facility in one of the industrial
            complex in Lippo Cikarang Bekasi.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

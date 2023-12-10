import { Box, Container, Center, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Box bgColor={"pink.500"} h={"50px"} lineHeight={"50px"} color={"white"}>
      <Container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <div w={"40%"} style={{ marginRight: 80 }}>
          <Link href={"/"}>MyWebsite</Link>
        </div>
        <nav display="flex" alignItems="center" justifyContent="space-between">
          <Link href={"/"} className="mr-[20px]" style={{ marginRight: 20 }}>
            {" "}
            Home{" "}
          </Link>
          <Link
            href={"/about"}
            className="mr-[20px]"
            style={{ marginRight: 20 }}
          >
            {" "}
            About Us{" "}
          </Link>
          <Link
            href={"/products"}
            className="mr-[20px]"
            style={{ marginRight: 20 }}
          >
            {" "}
            Products{" "}
          </Link>
          <Link
            href={"/teams"}
            className="mr-[20px]"
            style={{ marginRight: 20 }}
          >
            {" "}
            Teams{" "}
          </Link>
        </nav>
      </Container>
    </Box>
  );
}

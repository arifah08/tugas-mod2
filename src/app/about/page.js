// import Link from "next/link";
import { Image } from "@chakra-ui/react";
import Hero from "../../../components/Hero";
import Vision from "../../../components/Vision";
import Target from "../../../components/Target";

export default function Home() {
  return (
    <main
      bgImage={
        "https://ptvai.co.id/wp-content/uploads/2022/11/IMG20221117104942-scaled.jpg"
      }
    >
      {/* <Image src="https://ptvai.co.id/wp-content/uploads/2022/11/IMG20221117104942-scaled.jpg" /> */}
      <Hero />
      <Vision />
      <Target />
    </main>
  );
}

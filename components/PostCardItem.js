import { Heading } from "@chakra-ui/react";

export default function PostCardItem(props) {
  const { title, description } = props;

  return (
    <div className="post-item">
      <img src="./desc.png" />
      <div className="desc-text">
        <Heading as={"h4"} size={"md"} marginBottom={5}>
          {title}
        </Heading>
        <p marginBottom={10}>{description.substring(0, 50)} ... </p>
      </div>
    </div>
  );
}

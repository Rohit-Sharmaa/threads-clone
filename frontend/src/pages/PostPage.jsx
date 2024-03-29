import {
  Avatar,
  Flex,
  Text,
  Image,
  Box,
  Divider,
  Button,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";
import Comments from "../components/Comments";

export default function PostPage() {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src="/zuck-avatar.png" size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              markzuckerberg
            </Text>
            <Image src="/verified.png" w="4" h={4} ml="4" />
          </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
          <Text fontSize={"sm"} color={"gray"}>
            1d
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>
      <Text my={"3"}>Let&apos;s talk about Threads</Text>
      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid "}
        borderColor={"gray.light"}
      >
        <Image src={"/post1.png"} w={"full"}></Image>
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setliked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"gray.light"} fontSize={"sm"}>
          2345 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
        <Text color={"gray.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>
            Get the app to like , reply and post.
          </Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />
      <Comments
        comment="Looks really good"
        createdAt="2d"
        likes={100}
        username="johndoe"
        userAvatar="https://bit.ly/ryan-florence"
      />
      <Comments
        comment="hey dear"
        createdAt="4d"
        likes={170}
        username="Akash"
        userAvatar="https://bit.ly/prosper-baba"
      />
      <Comments
        comment="Looks really good"
        createdAt="9d"
        likes={500}
        username="johnd"
        userAvatar="https://bit.ly/code-beast"
      />
      <Comments
        comment="Awesome brother"
        createdAt="20d"
        likes={10}
        username="Sonu"
        userAvatar="https://bit.ly/ryan-florence"
      />
    </>
  );
}

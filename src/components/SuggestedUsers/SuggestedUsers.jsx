import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />

      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
          SuggestedUsers
        </Text>
        <Text
          fontSize={12}
          fontWeight={"bold"}
          _hover={{ color: "gray.400" }}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>

      <SuggestedUser name="Den Abrahmov" followers={1192} avatar="https://bit.ly/dan-anramov" />
      <SuggestedUser name="Ryan Florence" followers={520} avatar="https://bit.ly/ryan-florence" />
      <SuggestedUser name="Christian Nwamba" followers={350} avatar="https://bit.ly/code-beast" />

      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2023 Built By{" "}
        <Link
          href="https://www.youtube.com/@cubeking007"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          CubeKing
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;

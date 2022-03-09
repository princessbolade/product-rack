import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Login from "../login";
import Register from "../register";

function Home() {
  return (
    <Box mx={"auto"} maxW={"1200px"} py={"200px"}>
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box>
          <Text fontSize={"44px"} fontWeight={"bold"} color={"#043927"}>
            Welcome,
          </Text>
          <Flex alignItems={"center"} justifyContent={"center"} pt={"20px"}>
            <Login />
            <Box ml={"20px"}>
              <Register />
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default Home;

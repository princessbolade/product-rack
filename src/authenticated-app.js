import {
  Box,
  Button,
  Flex,
  ListItem,
  UnorderedList,
  Text,
} from "@chakra-ui/react";
import React from "react";

function AuthApp() {
  const authUser = JSON.parse(localStorage.getItem("user"));

  const productList = ["Wishlist", "Items Purchased", "Discover Items"];

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"}>
      <Flex alignItems={"center"} justifyContent={"flex-end"}>
        <Text fontWeight={"bold"} fontSize="24px">
          Welcome, {authUser.username}!
        </Text>
        <Button colorScheme={"green"} ml={"50px"} onClick={logout}>
          Logout
        </Button>
      </Flex>
      <Box mx={"auto"} maxW={"800px"} py={"150px"}>
        <Flex>
          <Box
            bg={"white"}
            padding={"20px 20px"}
            boxShadow={"base"}
            width={"100%"}
            height={"250px"}
          >
            {productList.map((i) => (
              <UnorderedList listStyleType={"none"}>
                <ListItem pt={"30px"}>
                  <Text
                    cursor={"pointer"}
                    _hover={{ color: "green", bg: "gray.200" }}
                  >
                    {i}
                  </Text>
                </ListItem>
              </UnorderedList>
            ))}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AuthApp;

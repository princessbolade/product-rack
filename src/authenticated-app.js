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

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <Box mx={"auto"} maxW={"1440px"} py={"50px"}>
      <Flex alignItems={"center"} justifyContent={"flex-end"}>
        <Text>Welcome, {authUser.username}!</Text>
        <Button colorScheme={"green"} ml={"50px"} onClick={logout}>
          Logout
        </Button>
      </Flex>
      <Box mx={"auto"} maxW={"800px"} py={"150px"}>
        <Flex>
          <Box>
            <UnorderedList>
              <ListItem>
                <Text>HI</Text>
              </ListItem>
              <ListItem>
                <Text>HI</Text>
              </ListItem>
              <ListItem>
                <Text>HI</Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default AuthApp;

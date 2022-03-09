import {
  Box,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Input,
  ModalFooter,
  Button,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import useForm from "../../hooks/useform";
import React, { useState } from "react";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useForm({ username: "", password: "" });
  const [isError, setIsError] = useState(false);

  const intialRef = React.useRef();
  const finalRef = React.useRef();

  const onSubmit = () => {
    const isError = value.username === "" || value.password === "";
    setIsError(isError);
  };
  return (
    <Box>
      <Button padding={"12px 26px"} colorScheme={"green"} onClick={onOpen}>
        Login
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={intialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>Login to your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                name="username"
                value={value.username}
                onChange={setValue}
                placeholder="Username"
              />
              {!isError ? (
                <FormHelperText color={"green"} pt={"3px"}>
                  Enter your username
                </FormHelperText>
              ) : (
                <FormErrorMessage color={"red.800"}>
                  This is a required field
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="text"
                name="password"
                value={value.password}
                onChange={setValue}
                placeholder="Password"
              />
              {!isError ? (
                <FormHelperText color={"green"} pt={"3px"}>
                  Enter your password
                </FormHelperText>
              ) : (
                <FormErrorMessage color={"red.800"}>
                  This is a required field
                </FormErrorMessage>
              )}
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onSubmit} colorScheme={"green"} mr={3}>
              Submit
            </Button>
            <Button colorScheme={"green"} onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Login;

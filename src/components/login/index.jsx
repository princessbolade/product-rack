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
} from "@chakra-ui/react";
import useForm from "../../hooks/useform";
import React, { useState } from "react";
import auth from "../../auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { signIn, getToken } = auth;
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useForm({ username: "", password: "" });
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const intialRef = React.useRef();
  const finalRef = React.useRef();

  const onSubmit = async () => {
    const isError = value.username === "" || value.password === "";
    if (isError) {
      setIsError(isError);
      return;
    }
    setIsLoading(true);
    setIsError(false);
    try {
      await signIn(value, "POST");
      const token = await getToken();
      console.log(token);
      if (token) {
        return navigate("/shelf");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  if (isLoading) return "Authenticating";

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
              <FormHelperText color={!isError ? "green" : "red.800"}>
                {!isError ? "Enter your Username" : "This is a required field"}
              </FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="password"
                value={value.password}
                onChange={setValue}
                placeholder="Password"
              />
              <FormHelperText color={!isError ? "green" : "red.800"}>
                {!isError ? "Enter your Password" : "This is a required field"}
              </FormHelperText>
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

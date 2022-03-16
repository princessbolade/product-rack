import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import useForm from "../../hooks/useform";
import auth from "../../auth";

function Register() {
  const { signUp } = auth;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useForm({
    fullname: "",
    username: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const [isError, setIsError] = useState(false);

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const onSubmit = (e) => {
    const isError =
      value.username === "" || value.email === "" || value.password === "";
    if (isError) {
      setIsError(isError);
    } else {
      setIsError(false);
      signUp(value, "POST");
    }
  };
  return (
    <Box>
      <Button padding={"12px 26px"} colorScheme="green" onClick={onOpen}>
        Register
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Register</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input
                name="fullname"
                type="text"
                value={value.fullname}
                onChange={setValue}
                placeholder="FullName"
              />
              <FormHelperText color={!isError ? "green" : "red.800"}>
                {!isError ? "Enter your Fullname" : "This is a required field"}
              </FormHelperText>
              <FormLabel>Username</FormLabel>
              <Input
                name="username"
                type="text"
                value={value.username}
                onChange={setValue}
                placeholder="UserName"
              />
              <FormHelperText color={!isError ? "green" : "red.800"}>
                {!isError ? "Enter your Username" : "This is a required field"}
              </FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Email Address</FormLabel>
              <Input
                name="email"
                type="email"
                value={value.email}
                onChange={setValue}
                placeholder="Email Address"
              />
              <FormHelperText color={!isError ? "green" : "red.800"}>
                {!isError ? "Enter your Email" : "This is a required field"}
              </FormHelperText>
              <FormLabel>Phone Number</FormLabel>
              <Input
                name="phoneNumber"
                type="text"
                value={value.phoneNumber}
                onChange={setValue}
                placeholder="Phone Number"
              />
              <FormHelperText color={!isError ? "green" : "red.800"}>
                {!isError
                  ? "Enter your Phone number"
                  : "This is a required field"}
              </FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
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

export default Register;

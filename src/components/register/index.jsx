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

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useForm({ fullname: "", email: "", password: "" });
  const [isError, setIsError] = useState(false);

  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const onSubmit = (e) => {
    const isError =
      value.fullname === "" || value.email === "" || value.password === "";
    setIsError(isError);
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
                placeholder="Full Name"
              />
            <FormHelperText color={!isError ? 'green' :'red.800'}>{!isError ? 'Enter your Full name' : 'This is a required field'}</FormHelperText>
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
             <FormHelperText color={!isError ? 'green' :'red.800'}>{!isError ? 'Enter your Email' : 'This is a required field'}</FormHelperText>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="text"
                value={value.password}
                onChange={setValue}
                placeholder="Password"
              />
             <FormHelperText color={!isError ? 'green' :'red.800'}>{!isError ? 'Enter your Password' : 'This is a required field'}</FormHelperText>
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

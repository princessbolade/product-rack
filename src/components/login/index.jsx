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
} from "@chakra-ui/react";
import React from "react";

function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const intialRef = React.useRef();
  const finalRef = React.useRef();
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
              <Input placeholder="Username" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder="Password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme={"green"} mr={3}>
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

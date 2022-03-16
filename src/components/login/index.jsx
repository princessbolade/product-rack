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
import auth from '../../auth'

function Login() {
  const {signIn} = auth
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useForm({ username: "", password: "" });
  const [isError, setIsError] = useState(false);

  const intialRef = React.useRef();
  const finalRef = React.useRef();

  const onSubmit = () => {
    const isError = value.username === "" || value.password === "";
    if(isError){
       setIsError(isError);
    }
    else{
      setIsError(false);
      signIn(value, "POST")
    }
   
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
             <FormHelperText color={!isError ? 'green' :'red.800'}>{!isError ? 'Enter your Username' : 'This is a required field'}</FormHelperText>
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

export default Login;

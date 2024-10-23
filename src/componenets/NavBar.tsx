import { Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import logo from "../assets/fitnessLogo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Flex py={4} justifyContent="space-around" backgroundColor="#28488e"  color='white' pos='fixed' w='100%'>
      <HStack>
        <Image src={logo} boxSize="30px" />
        <Text fontSize='20px' as='b'>FitHub</Text>
      </HStack>
      <Flex justifyContent="center" fontSize='20px' as='b'>
        <Link>Store</Link>
        <Link mx='4'> <NavLink to={`/login`}>Login</NavLink></Link>
        <NavLink to={`/signup`}>SigUp</NavLink>
      </Flex>
      <ColorModeSwitch />
    </Flex>
  );
};

export default NavBar;

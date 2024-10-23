import { GridItem, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/fitnessLogo.webp";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    
      <GridItem area="aside" bg="#28488e" color="white" p="6" h="100vh">
        <HStack justifyContent="center">
          <Image src={logo} boxSize="30px" />
          <Text fontSize="20px" as="b">
            <NavLink to={`/timer`}>FitHub Demo</NavLink>
          </Text>
        </HStack>
        <Text fontSize="20px" as="b">
          <NavLink to={`/timer`}>Timer</NavLink>
          </Text>
          <Text fontSize="20px" as="b">
          <NavLink to={`/workout`}>Workout Assistant</NavLink>
          </Text>
      </GridItem>
     

  );
};

export default Dashboard;

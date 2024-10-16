import { Grid, GridItem, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/fitnessLogo.webp";

const Dashboard = () => {
  return (
    <Grid templateAreas={`"aside  main"`} gridTemplateColumns={"250px"}>
      <GridItem area="aside" bg="#28488e" color="white" p="6" h="100vh">
        <HStack justifyContent="center">
          <Image src={logo} boxSize="30px" />
          <Text fontSize="20px" as="b">
            FitHub Demo
          </Text>
        </HStack>
      </GridItem>
      <GridItem area="main" p="6">
        <HStack justifyContent="end">
          <Text fontSize="20px" as="b">
            Welcome user
          </Text>
          <Image src={logo} boxSize="30px" />
        </HStack>
        <Text>Main</Text>
      </GridItem>
    </Grid>
  );
};

export default Dashboard;

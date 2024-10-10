import NavBar from "./NavBar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import "../App.css";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="homepage-background">
        <Card position='absolute' bottom='0' left='11%' w="35%">
          <CardHeader>
            <Heading size="md"> Work Out to Stay Fit</Heading>
          </CardHeader>
          <CardBody py="0">
            <Text>
            Here on Fithub, you get to work with fitness trainer remotely and enjoy our inHouse fitness equippment.
            </Text>
          </CardBody>
          <CardFooter>
            <Link backgroundColor="#28488e" p='3' as='b' color="white" borderRadius='xl'>SIGN UP TO STAY FIT</Link>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default HomePage;

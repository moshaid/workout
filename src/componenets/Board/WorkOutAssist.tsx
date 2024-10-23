import {
  Grid,
  GridItem,
  HStack,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
import Dashboard from "./Dashboard";

const WorkOutAssist = () => {
  return (
    <Grid templateAreas={`"aside  main"`} gridTemplateColumns={"250px"}>
      {/* <GridItem area="aside" bg="#28488e" color="white" p="6" h="100vh">
        <HStack justifyContent="center">
          <Text fontSize="20px" as="b">
            Workout Assistant
          </Text>
        </HStack>
      </GridItem> */}
      <Dashboard />
      <GridItem area="main">
        <HStack justifyContent="end" p="6" borderBottom='1px' borderColor='#28488e'>
          <Text fontSize="20px" as="b">
            Welcome user
          </Text>
          {/* <Image src={logo} boxSize="30px" /> */}
        </HStack>
    <Grid templateColumns={{
        base: "repeat(2, 1fr)",
        md: "repeat(4, 1fr)"
        }} gap={2} p="6">
          <GridItem w="100%">
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eMjyvIQbn9M?si=JxV19GpZU6_ISLVa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </GridItem>
          <GridItem w="100%">
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eMjyvIQbn9M?si=JxV19GpZU6_ISLVa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </GridItem>
          <GridItem w="100%">
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eMjyvIQbn9M?si=JxV19GpZU6_ISLVa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </GridItem>
          <GridItem w="100%">
            <AspectRatio maxW="560px" ratio={1}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/eMjyvIQbn9M?si=JxV19GpZU6_ISLVa"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </AspectRatio>
          </GridItem>
        </Grid>
      </GridItem>
    </Grid>
  );
};

export default WorkOutAssist;

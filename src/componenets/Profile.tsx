import { Grid, GridItem, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Grid>
      <GridItem area="aside" bg="#28488e" color="white" p="6" h="100vh">
        <Text fontSize="20px" as="b">
          Profile
        </Text>
      </GridItem>
      <GridItem>
        Profiler
      </GridItem>
    </Grid>
  );
};

export default Profile;

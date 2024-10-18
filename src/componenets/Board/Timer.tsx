import { GridItem, Button, Flex, Stack, Text, Grid } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const getH = (ms: number) => ("0" + (Math.floor(ms / 10) % 100)).slice(-2);
  const getS = (ms: number) => ("0" + Math.floor((ms / 1000) % 60)).slice(-2);
  const getM = (ms: number) =>
    ("0" + Math.floor((ms / 1000 / 60) % 60)).slice(-2);

  const formatTime = (ms: number) => `${getM(ms)}:${getS(ms)}:${getH(ms)}`;

  useEffect(() => {
    let interval: number | undefined;

    if (isRunning) {
      interval = setInterval(() => setTime((time) => time + 10), 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  return (
    <>
    <Grid templateAreas={`"aside  main"`} gridTemplateColumns={"250px"}>
    <GridItem area="aside" bg="#28488e" color="white" p="6" h="100vh">
          <Text fontSize="20px" as="b">
            Monitor Exercise
          </Text>
      </GridItem>
      <GridItem area="main">
      <Flex maxW='500px' w='100' bg="#28488e" color="white" p='6' alignItems='center' flexDirection='column' mx='auto'>
        <Text fontSize='2xl' className="display">{formatTime(time)}</Text>
        <Stack spacing={4} direction="row" align="center">
          {!isRunning && !time && (
            <Button color="#28488e" onClick={() => setIsRunning(true)}>
              Start
            </Button>
          )}
          {!isRunning && time > 0 && (
            <Button color="#28488e" onClick={() => setIsRunning(true)}>
              Resume
            </Button>
          )}
          {!isRunning && time > 0 && (
            <Button color="#28488e" onClick={() => setTime(0)}>
              Reset
            </Button>
          )}
          <Button color="#28488e" onClick={() => setIsRunning(false)}>
            Stop
          </Button>
        </Stack>
      </Flex>
      </GridItem>

    </Grid>
    </>
  );
};

export default Timer;

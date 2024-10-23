import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";

export default function NotFound(){
  return (
    <Text fontSize="xl" as="b">
        <Link to="/">Opps i am lost!!! Click Me</Link>
    </Text>
  )
}


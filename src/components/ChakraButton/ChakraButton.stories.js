import { Button } from "@chakra-ui/react";
import { action } from "@storybook/addon-actions";

export default {
  title: "Chakra/Button",
  component: Button,
};

export const Success = () => (
  <Button colorScheme="green" onClick={action("Hellooo!")}>
    Button
  </Button>
);
export const Danger = () => <Button colorScheme="red">Button</Button>;

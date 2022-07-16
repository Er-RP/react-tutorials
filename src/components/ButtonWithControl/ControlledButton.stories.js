import { Button } from "@chakra-ui/react";

export default {
  title: "Control/Button",
  component: Button,
  argTypes: {
    children: {
      options: ["red", "green", "blue"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <DynamicButton {...args} />;

export const CustomButton = Template.bind({});
CustomButton.args = {
  background: "red",
};

const DynamicButton = (props) => {
  const { background = "blue", children = "default" } = props;
  return <button style={{ backgroundColor: background }}> {children}</button>;
};

import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

export const StoryBookItems = [
  {
    title: "Button",
    url: "/group1-button",
    component: <Button>Button</Button>,
  },
  {
    title: "Input",
    url: "/group1-input",
    component: <Input size="small" />,
  },
  {
    title: "NestedStory",
    url: "/group1-SimpleForm",
    component: <Button>Nested story</Button>,
  },
];

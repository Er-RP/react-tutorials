import Button from "./Button";

//Adding Default export
export default {
  title: "Button", //mandatory and unique , It will be shown in left side navigation panel of storybook
  component: Button, //Optional ,But highly recommended
};

//Adding Named export

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

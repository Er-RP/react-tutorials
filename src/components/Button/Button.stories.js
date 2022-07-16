import Button from "./Button";

//Adding Default export
export default {
  title: "Group1/Button", //mandatory and unique , It will be shown in left side navigation panel of storybook
  component: Button, //Optional ,But highly recommended
  args: {
    children: "Global Button", // Declaring Global args value
  },
};

//Adding Named export

export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

//Creating Story Using Args (Reducing JSX)
const Template = (args) => <Button {...args} />;

export const PrimaryWithArgs = Template.bind({});
PrimaryWithArgs.args = {
  variant: "primary",
};

//Inline args value always overwrite inherited args value (Story level will args will be overwrite by component level args)
export const SecondaryWithOverWrittenArgs = Template.bind({});
SecondaryWithOverWrittenArgs.args = {
  variant: "primary",
  children: "Secondary With OverWritten Args",
};

//We reuse above args into another
export const SecondaryWithReusedArgs = Template.bind({});
SecondaryWithReusedArgs.args = {
  ...SecondaryWithOverWrittenArgs.args,
  children: "Secondary With Reused Args",
};

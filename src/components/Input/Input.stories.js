import Input from "./Input";

export default {
  title: "Group1/Input",
  componet: Input,
};

export const Small = () => <Input size="small" />;
export const Medium = () => <Input size="medium" />;
export const Large = () => <Input size="large" />;

Small.storyName = "Small renamed";

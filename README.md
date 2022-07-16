# Getting started with StoryBook

```sh
npm run storybook
```

## Nested Stories

1. Add below code under _src/components/SimpleForm/SimpleForm.stories.js_ to sort stories

```js
import { Primary } from "../Button/Button.stories";
import { Small } from "../Input/Input.stories";
export default {
  title: "Group1/SimpleForm",
};

export const SimpleForm = () => (
  <>
    <Small />
    <br />
    <Primary />
  </>
);
```
